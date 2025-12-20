const CarImagesSliderSkeleton = () => {
  return (
    <div className="car-images-slider-skeleton">
      {/* Main image skeleton */}
      <div className="image-box">
        <figure className="image" style={{ position: 'relative' }}>
          <div 
            className="skeleton-loader"
            style={{
              width: '100%',
              height: '400px',
              borderRadius: '8px'
            }}
          />
          {/* Loading indicator */}
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#6c757d',
              fontSize: '14px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              zIndex: 3
            }}
          >
            <div 
              style={{
                width: '16px',
                height: '16px',
                border: '2px solid #dee2e6',
                borderTop: '2px solid #6c757d',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }}
            />
            Loading images...
          </div>
        </figure>
      </div>
      
      {/* Navigation skeleton */}
      <div>
        <button 
          className="slick-prev slick-arrow" 
          disabled 
          style={{ 
            opacity: 0.3,
            cursor: 'not-allowed'
          }}
        >
          <div 
            className="skeleton-loader" 
            style={{ 
              width: '16px', 
              height: '16px', 
              borderRadius: '50%' 
            }} 
          />
        </button>
        <button 
          className="slick-next slick-arrow" 
          disabled 
          style={{ 
            opacity: 0.3,
            cursor: 'not-allowed'
          }}
        >
          <div 
            className="skeleton-loader" 
            style={{ 
              width: '16px', 
              height: '16px', 
              borderRadius: '50%' 
            }} 
          />
        </button>
      </div>
    </div>
  );
};

export default CarImagesSliderSkeleton;