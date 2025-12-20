import blog from '../../assets/images/blog.jpg'

import { assetUrl } from "@/services/constants";
import DateFormat from './DateFormat';

const BlogCard = ({ data }) => {
  return (
    <div className="blog-block col-lg-4 col-md-6 col-sm-12">
      <div className="inner-box wow fadeInUp">
        <div className="image-box">
          <figure className="image">
            <a href={'/blog/' + data?.slug}>
              <img src={data?.image ? assetUrl + data?.image : blog.src} alt="" />
            </a>
          </figure>
          {/* <span className="date">news</span> */}
        </div>
        <div className="content-box">
          <ul className="post-info">
            <li>{data?.author}</li>
            <li>
              <DateFormat isoDate={data?.date_created} />
            </li>
          </ul>
          <h6 className="title">
            <a href={'/blog/' + data?.slug} title="">
              {data?.tittle}
              {/* This Long-Awaited Technology May Finally Change the World */}
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
