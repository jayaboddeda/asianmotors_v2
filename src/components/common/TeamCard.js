import team from '../../assets/images/team.jpg'

const TeamCard = () => {
    return (
      <div className="team-block-two col-lg-3 col-md-6 col-sm-6">
        <div className="inner-box wow fadeInUp position-relative">
          <div className="image-box">
            <figure className="image">
              <a href="#">
                <img src={team.src} alt="Team Member" />
              </a>
            </figure>
            <div className="contact-info">
              <span><a href="mailto:henry@asianmotors.com">henry@asianmotors.com</a></span>
              <small><a href="tel:+30595592912">+30 595 59 291 2</a></small>
            </div>
          </div>
          <div className="content-box">
            <h4 className="title">
              <a href="team-single.html">Courtney Henry</a>
            </h4>
            <span>Software Development Manager</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default TeamCard;
  