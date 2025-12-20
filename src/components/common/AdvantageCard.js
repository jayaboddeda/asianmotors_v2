const AdvantageCard = ({icon,title,description}) => {
    return (
      <div className="advantage-block choose-us-block col-lg-3 col-md-6 col-sm-12">
        <div className="inner-box wow fadeInUp" data-wow-delay="100ms">
          <div className="icon-box">
            <img width="60" height="60" src={icon.src} alt="Icon" />
          </div>
          <div className="content-box">
            <h6 className="title">{title}</h6>
            <div className="text">{description}</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AdvantageCard;
  