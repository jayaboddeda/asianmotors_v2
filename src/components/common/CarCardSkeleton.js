const CarCardSkeleton = ({ carspage }) => {
  return (
    <div className={`box-car car-block-three ${carspage && 'col-lg-3 col-md-6 col-sm-12'}`}>
      <div className="inner-box">
        <div className="image-box">
          <div className="slider-thumb">
            <div className="image skeleton-loader" style={{ height: '200px' }}>
            </div>
          </div>
        </div>
        <div className="content-box">
          <h6 className="title">
            <div className="skeleton-loader" style={{
              height: '20px',
              width: '80%',
              marginBottom: '10px'
            }}></div>
          </h6>
          <div className="text">
            <div className="skeleton-loader" style={{
              height: '16px',
              width: '100%',
              marginBottom: '15px'
            }}></div>
          </div>
          <ul className='row'>
            <li className='col-4'>
              <div className="skeleton-loader" style={{
                height: '16px',
                width: '100%'
              }}></div>
            </li>
            <li className='col-4'>
              <div className="skeleton-loader" style={{
                height: '16px',
                width: '100%'
              }}></div>
            </li>
            <li className='col-4'>
              <div className="skeleton-loader" style={{
                height: '16px',
                width: '100%'
              }}></div>
            </li>
          </ul>
          <div className="btn-box">
            <small>
              <div className="skeleton-loader" style={{
                height: '16px',
                width: '60px'
              }}></div>
            </small>
            <div className="skeleton-loader" style={{
              height: '20px',
              width: '80px'
            }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCardSkeleton;
