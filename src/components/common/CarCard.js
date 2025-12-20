import { TbManualGearbox } from "react-icons/tb";
import { BsSpeedometer2 } from "react-icons/bs";
import { LiaGasPumpSolid } from "react-icons/lia";
import { useEffect, useState } from 'react';
import { assetUrl } from '@/services/constants';
import { ApiService } from '@/services/apiservice';

const CarCard = ({ car, carspage, imageCache }) => {
  const [imgSrc, setImgSrc] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);  useEffect(() => {
    // Check if image is available in cache first
    if (imageCache && imageCache[car?.id]) {
      setImgSrc(imageCache[car.id]);
      return;
    }

    // Fallback to API call if not in cache
    const endPoint = `items/current_stock_files?fields[]=directus_files_id.id&fields[]=directus_files_id.type&fields[]=directus_files_id.title&fields[]=directus_files_id.filename_download&fields[]=id&filter[_and][0][current_stock_id]=${car?.id}`;
    const FindImage = async () => {
      try {
        const response = await ApiService(endPoint);
        if (response?.data && response.data.length > 0) {
          const imageId = response.data[0]?.directus_files_id.id;
          setImgSrc(imageId);
        }
      } catch (error) {
        console.error('Error loading image:', error);
        setImageError(true);
      }
    }
    if (car?.id) {
      FindImage();
    }
  }, [car?.id, imageCache])
  return (
    <div className={`box-car car-block-three ${carspage && 'col-lg-3 col-md-6 col-sm-12'}`}>
      <div className="inner-box">        <div className="image-box">
          <div className="slider-thumb">
            <div className="image">              <a href={"/buy-used-cars-hyderabad/" + car?.slug}>
                {imgSrc && !imageError ? (
                  <img 
                    src={assetUrl + imgSrc} 
                    alt={car?.name || "Car image"} 
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                    style={{ 
                      width: '100%',
                      height: 'auto'
                    }}
                    loading="lazy"
                  />
                ) : null}{!imgSrc && !imageError && (
                  <div 
                    className="skeleton-loader"
                    style={{
                      width: '100%',
                      height: '200px',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '6px'
                    }}
                  />
                )}
                {imageError && (
                  <div 
                    style={{
                      width: '100%',
                      height: '200px',
                      backgroundColor: '#f8f9fa',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#6c757d',
                      fontSize: '14px',
                      borderRadius: '6px',
                      border: '1px solid #dee2e6'
                    }}
                  >
                    Image not available
                  </div>
                )}
              </a>
            </div>
          </div>
        </div>
        <div className="content-box">
          <h6 className="title">
            <a href={"/buy-used-cars-hyderabad/" + car?.slug}>{car?.name}</a>
          </h6>
          <div className="text">{car?.short_description}</div>
          <ul className='row'>
            <li className='col-4'>
              <BsSpeedometer2 size={20} />{car?.mileage}
            </li>
            <li className='col-4'>
              <LiaGasPumpSolid size={20} />{car?.fuel_type}
            </li>
            <li className='col-4'>
              <TbManualGearbox size={20} /><span className='text-truncate text-center' style={{width: '110px'}}>{car?.transmission}</span>
            </li>
          </ul>
          <div className="btn-box">
            <small>
              {
                '₹ ' + Number(car?.price)?.toLocaleString('en-IN')
                // car?.price ?
                // '₹' + car?.price : <span className='text-danger'>Sold Out</span>
              }
            </small>
            <a href={"/buy-used-cars-hyderabad/" + car?.slug} className="details">
              View Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clipPath="url(#clip0_601_4346)">
                  <path
                    d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z"
                    fill="#e72400"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_601_4346">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
