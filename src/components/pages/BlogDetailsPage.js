'use client'
import { ApiService } from "@/services/apiservice";
import { useEffect, useState } from "react";
import DateFormat from "../common/DateFormat";
import { assetUrl } from "@/services/constants";
import Link from "next/link";

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
            <div className="right-box">
                <div className="large-container">
                    <div className="content-box">
                        <figure className="outer-image text-center"><img src={assetUrl + blogDetails?.image} alt="" /></figure>
                        <div className="right-box-two">
                            <div
                                dangerouslySetInnerHTML={{ __html: blogDetails?.description }} />
                            <div className="image-sec">
                                <div className="image-box">
                                    <figure className="inner-image"><img src="images/resource/inner-blog4-1.jpg" alt="" /></figure>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BlogDetailsPage;