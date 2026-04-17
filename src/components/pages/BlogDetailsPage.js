'use client'
import { ApiService } from "@/services/apiservice";
import { useEffect, useState } from "react";
import DateFormat from "../common/DateFormat";
import { assetUrl } from "@/services/constants";
import Link from "next/link";
import blogFallback from '../../assets/images/blog.jpg';

const BlogDetailsPage = ({ slug }) => {
    const [blogDetails, setBlogDetails] = useState();
    const getBlogDetails = async () => {
        const queryString = "?sort=-date_created&filter[slug][_eq]=" + slug;
        const response = await ApiService('items/blogs' + queryString, 'get');
        setBlogDetails(response.data[0]);
    }
    useEffect(() => {
        getBlogDetails();
    }, [])
    return (
        <section className="blog-section-five layout-radius">
            <div className="boxcar-container">
                <div className="boxcar-title wow fadeInUp">
                    <ul className="breadcrumb">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/blog">Blogs</Link></li>
                        <li><span>{slug}</span></li>
                    </ul>
                    <h2>{blogDetails?.tittle}</h2>
                    <ul className="post-info">
                        <li>
                            {/* <img src="images/resource/ali-tufan.png" /> */}
                        </li>
                        <li><Link href="#" title="" className="text-capitalize">{blogDetails?.author}</Link></li>
                        {/* <li><a href="#" title="">News</a></li> */}
                        <li><DateFormat isoDate={blogDetails?.date_created} /></li>
                    </ul>
                </div>
            </div>
            <div className="boxcar-container">
                <figure className="text-center" style={{ marginBottom: '30px' }}>
                    <img 
                        src={blogDetails?.image ? assetUrl + blogDetails?.image : blogFallback.src} 
                        alt={blogDetails?.tittle || ''} 
                        style={{ maxWidth: '100%', height: 'auto', borderRadius: '16px' }} 
                    />
                </figure>
                <div style={{ 
                    maxWidth: '924px', 
                    margin: '0 auto', 
                    color: '#333', 
                    fontSize: '15px', 
                    lineHeight: '28px',
                    paddingBottom: '60px'
                }}>
                    {blogDetails?.description ? (
                        <div dangerouslySetInnerHTML={{ __html: blogDetails.description }} />
                    ) : (
                        <p>No description available.</p>
                    )}
                </div>
            </div>
        </section>
    )
}
export default BlogDetailsPage;