import icon from '../../assets/images/icons/comas.png'

const TestimonialCard = ({testimonial, author, role, testimonialText,tag, image}) => {
    return (
      <div className="testimonial-block-four">
        <div className="inner-box wow fadeInUp">
          <figure className="icon">
            <a href="#">
              <img src={icon.src} alt="Testimonial Icon" />
            </a>
          </figure>
          <h6 className="title">{testimonial?.tag}</h6>
          <div className="text">
          {testimonial?.testimonialText}
          </div>
          <div className="auther-info">
            <figure className="image">
              {/* <a href="#"> */}
                <img src={testimonial?.image} alt="Leslie Alexander" />
              {/* </a> */}
            </figure>
            <h6 className="name">{testimonial?.author}</h6>
            {/* <span>{testimonial?.role}</span> */}
          </div>
        </div>
      </div>
    );
  };
  
  export default TestimonialCard;
  