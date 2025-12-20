
const Breadcrumb = ({ page, carDetails }) => {
  return (
    <div className="boxcar-title boxcar-title-three">
      <ul className="breadcrumb">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <span>{page}</span>
        </li>
      </ul>
      <h2>{page}</h2>
      {page === 'About Us' &&
        <div className="text">Building Trust and Delivering Quality Since 1969</div>}
    </div>
  )
}

export default Breadcrumb;



