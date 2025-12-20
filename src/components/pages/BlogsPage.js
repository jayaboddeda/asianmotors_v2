import BlogsSection from "../common/BlogsSection";
import Breadcrumb from "../common/Breadcrumb";

const BlogsPage = () => {
  return (
    <>
       <section className="blog-section v1 layout-radius">
        <h1 className="d-none">Preowned Car Buying Tips & Auto Insights</h1>
       <div className="boxcar-container">
        <Breadcrumb page={'Blogs'}/>
        <BlogsSection blogsPage={true}/>
      </div>
      </section>
    </>
  );
};

export default BlogsPage;
