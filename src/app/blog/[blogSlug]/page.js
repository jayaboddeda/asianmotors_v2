import BlogDetailsPage from "@/components/pages/BlogDetailsPage";

const BlogDetails = ({ params }) => {
    return (
        <BlogDetailsPage slug ={params?.blogSlug} />
    )
}
export default BlogDetails;
