'use client'

import { useEffect, useState, useCallback } from "react";
import Breadcrumb from "../common/Breadcrumb";
import CarCard from "../common/CarCard";
import CarCardSkeleton from "../common/CarCardSkeleton";
import Pagination from "../common/Pagination";
import { TbClearAll } from "react-icons/tb";
import { ApiService } from "@/services/apiservice";

const PAGE_SIZE = 12; // Cars per page

const CurrentStockPage = () => {
  const [selectedType, setSelectedType] = useState('0');
  const [selectedBrand, setSelectedBrand] = useState('0');
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState('0');
  const [loading, setLoading] = useState(true);
  const [imageCache, setImageCache] = useState({});

  // Calculate total pages
  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  // Build filter query string
  const buildFilterQuery = useCallback(() => {
    const filters = [];
    if (selectedType !== '0') {
      filters.push(`filter[category][_eq]=${selectedType}`);
    }
    if (selectedBrand !== '0') {
      filters.push(`filter[brand][_eq]=${selectedBrand}`);
    }
    return filters.length > 0 ? '&' + filters.join('&') : '';
  }, [selectedType, selectedBrand]);

  // Build sort query string
  const buildSortQuery = useCallback(() => {
    if (sort === '1') return '&sort[]=price';
    if (sort === '2') return '&sort[]=-price';
    return '&sort[]=-date_created';
  }, [sort]);

  // Fetch cars with pagination
  const fetchCars = useCallback(async () => {
    setLoading(true);
    try {
      const offset = (currentPage - 1) * PAGE_SIZE;
      const filterQuery = buildFilterQuery();
      const sortQuery = buildSortQuery();

      // Fetch paginated cars and total count in parallel
      const [carsResponse, countResponse] = await Promise.all([
        ApiService(`items/current_stock?limit=${PAGE_SIZE}&offset=${offset}${sortQuery}${filterQuery}`),
        ApiService(`items/current_stock?aggregate[count]=*${filterQuery}`)
      ]);

      const cars = carsResponse.data || [];
      setData(cars);

      // Extract total count
      const count = countResponse.data?.[0]?.count || 0;
      setTotalCount(parseInt(count, 10));

      // Batch fetch images for all cars on current page
      if (cars.length > 0) {
        const carIds = cars.map(car => car.id).join(',');
        const imagesResponse = await ApiService(
          `items/current_stock_files?fields[]=directus_files_id.id&fields[]=current_stock_id&filter[current_stock_id][_in]=${carIds}`
        );

        if (imagesResponse?.data) {
          const imageMap = {};
          imagesResponse.data.forEach(item => {
            if (item.current_stock_id && item.directus_files_id?.id) {
              // Store first image for each car
              if (!imageMap[item.current_stock_id]) {
                imageMap[item.current_stock_id] = item.directus_files_id.id;
              }
            }
          });
          setImageCache(prev => ({ ...prev, ...imageMap }));
        }
      }
    } catch (error) {
      console.error('Error fetching cars:', error);
    } finally {
      setLoading(false);
    }
  }, [currentPage, buildFilterQuery, buildSortQuery]);

  // Fetch filter options on mount
  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        const [brandsResponse, categoriesResponse] = await Promise.all([
          ApiService('fields/current_stock/brand'),
          ApiService('fields/current_stock/category')
        ]);
        setBrands(brandsResponse.data?.meta?.options?.choices || []);
        setCategories(categoriesResponse.data?.meta?.options?.choices || []);
      } catch (error) {
        console.error('Error fetching filter options:', error);
      }
    };
    fetchFilterOptions();
  }, []);

  // Fetch cars when page, filters, or sort changes
  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleSort = (event) => {
    setSort(event.target.value);
    setCurrentPage(1); // Reset to first page on sort change
  };

  const handleFiltersClear = () => {
    setSelectedType('0');
    setSelectedBrand('0');
    setSort('0');
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <section className="cars-section-four v1 layout-radius">
        <h1 className="d-none">Buy Preowned Cars in Hyderabad – Current Stock</h1>
        <div className="boxcar-container">
          <Breadcrumb page={'Cars for Sale'} />

          <form className="form-box d-none d-md-flex">
            <div className="form_boxes">
              <div className="drop-menu mb-0">
                <div className="">
                  <select
                    className="form-select select rounded-circle border-0 shadow-none h-100"
                    aria-label="Sort by price"
                    value={sort}
                    onChange={handleSort}
                  >
                    <option value={'0'}>Price</option>
                    <option value="1">Low to High</option>
                    <option value="2">High to Low</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form_boxes">
              <div className="drop-menu mb-0">
                <div className="">
                  <select
                    className="form-select select rounded-circle border-0 shadow-none h-100"
                    aria-label="Filter by type"
                    value={selectedType}
                    onChange={handleTypeChange}
                  >
                    <option value={'0'}>Type</option>
                    {categories?.map((category, index) => (
                      <option value={category.value} key={index}>{category.text}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="form_boxes">
              <div className="drop-menu mb-0">
                <div className="">
                  <select
                    className="form-select select rounded-circle border-0 shadow-none h-100"
                    aria-label="Filter by brand"
                    value={selectedBrand}
                    onChange={handleBrandChange}
                  >
                    <option value={'0'}>Brand</option>
                    {brands?.map((brand, index) => (
                      <option value={brand.value} key={index}>{brand.text}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <a className="btn btn-outline-danger" onClick={handleFiltersClear}>
                Clear All <TbClearAll />
              </a>
            </div>
          </form>

          {/* Results info */}
          <div className="text-box v1 d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">
              {!loading && `Showing ${data.length} of ${totalCount} cars`}
            </span>
          </div>

          <div className="row gy-4">
            {loading ? (
              // Show skeleton loaders while loading
              Array.from({ length: PAGE_SIZE }).map((_, index) => (
                <CarCardSkeleton key={index} carspage={true} />
              ))
            ) : data.length > 0 ? (
              // Show actual car cards when loaded
              data.map((car) => (
                <CarCard key={car.id} car={car} carspage={true} imageCache={imageCache} />
              ))
            ) : (
              // No results message
              <div className="col-12 text-center py-5">
                <h4 className="text-muted">No cars found matching your criteria</h4>
                <button className="btn btn-primary mt-3" onClick={handleFiltersClear}>
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {!loading && totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default CurrentStockPage;
