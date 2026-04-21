import BlogDetailsPage from "@/components/pages/BlogDetailsPage";
import { serverUrl } from "@/services/constants";

async function getBlogBySlug(slug) {
    try {
        const res = await fetch(
            `${serverUrl}items/blogs?sort=-date_created&filter[slug][_eq]=${encodeURIComponent(slug)}`,
            {
                headers: { Authorization: "Bearer JCBW975NFBEP2fL2fwt0b01ms1blC2R8" },
                cache: "no-store",
            }
        );
        if (!res.ok) return null;
        const json = await res.json();
        return json?.data?.[0] ?? null;
    } catch {
        return null;
    }
}

function parseHeadTags(html) {
    if (!html || typeof html !== "string") return [];
    const tags = [];
    const tagRegex = /<(meta|link)\s+([^>]+?)\s*\/?>/gi;
    let match;
    while ((match = tagRegex.exec(html)) !== null) {
        const tagName = match[1].toLowerCase();
        const attrs = {};
        const attrRegex = /([\w:-]+)\s*=\s*"([^"]*)"/g;
        let a;
        while ((a = attrRegex.exec(match[2])) !== null) {
            attrs[a[1]] = a[2];
        }
        tags.push({ tag: tagName, attrs });
    }
    return tags;
}

function pickMeta(parsed, keyAttr, keyVal) {
    return parsed.find((t) => t.tag === "meta" && t.attrs[keyAttr] === keyVal)
        ?.attrs?.content;
}

function pickLink(parsed, relVal) {
    return parsed.find((t) => t.tag === "link" && t.attrs.rel === relVal)
        ?.attrs?.href;
}

function isValidJson(str) {
    if (!str || typeof str !== "string") return false;
    try {
        JSON.parse(str);
        return true;
    } catch {
        return false;
    }
}

export async function generateMetadata({ params }) {
    const resolved = typeof params?.then === "function" ? await params : params;
    const slug = resolved?.blogSlug;
    const blog = await getBlogBySlug(slug);
    if (!blog) return {};

    const parsed = parseHeadTags(blog.tags || "");
    const canonical = pickLink(parsed, "canonical");
    const ogImage = pickMeta(parsed, "property", "og:image");
    const twitterImage = pickMeta(parsed, "name", "twitter:image");
    const description =
        pickMeta(parsed, "property", "og:description") ||
        pickMeta(parsed, "name", "twitter:description") ||
        pickMeta(parsed, "name", "description");

    const ogWidth = parseInt(pickMeta(parsed, "property", "og:image:width") || "", 10);
    const ogHeight = parseInt(pickMeta(parsed, "property", "og:image:height") || "", 10);

    return {
        title: (blog.tittle || "").trim(),
        description,
        alternates: canonical ? { canonical } : undefined,
        robots: pickMeta(parsed, "name", "robots"),
        openGraph: {
            title: pickMeta(parsed, "property", "og:title"),
            description: pickMeta(parsed, "property", "og:description"),
            url: pickMeta(parsed, "property", "og:url"),
            siteName: pickMeta(parsed, "property", "og:site_name"),
            type: pickMeta(parsed, "property", "og:type"),
            locale: pickMeta(parsed, "property", "og:locale"),
            publishedTime: pickMeta(parsed, "property", "article:published_time"),
            modifiedTime: pickMeta(parsed, "property", "article:modified_time"),
            section: pickMeta(parsed, "property", "article:section"),
            tags: pickMeta(parsed, "property", "article:tag"),
            images: ogImage
                ? [
                      {
                          url: ogImage,
                          width: Number.isFinite(ogWidth) ? ogWidth : undefined,
                          height: Number.isFinite(ogHeight) ? ogHeight : undefined,
                          alt: pickMeta(parsed, "property", "og:image:alt"),
                      },
                  ]
                : undefined,
        },
        twitter: {
            card: pickMeta(parsed, "name", "twitter:card"),
            site: pickMeta(parsed, "name", "twitter:site"),
            title: pickMeta(parsed, "name", "twitter:title"),
            description: pickMeta(parsed, "name", "twitter:description"),
            images: twitterImage ? [twitterImage] : undefined,
        },
    };
}

const BlogDetails = async ({ params }) => {
    const resolved = typeof params?.then === "function" ? await params : params;
    const slug = resolved?.blogSlug;
    const blog = await getBlogBySlug(slug);

    return (
        <>
            {isValidJson(blog?.Article) && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: blog.Article }}
                />
            )}
            {isValidJson(blog?.faq) && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: blog.faq }}
                />
            )}
            {isValidJson(blog?.breadcrumb) && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: blog.breadcrumb }}
                />
            )}
            <BlogDetailsPage slug={slug} initialData={blog} />
        </>
    );
};

export default BlogDetails;
