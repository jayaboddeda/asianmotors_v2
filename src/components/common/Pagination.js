'use client'

import { useMemo } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
    scrollToTop = true
}) => {
    // Generate page numbers to display
    const pageNumbers = useMemo(() => {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            // Show all pages if total is small
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Always show first page
            pages.push(1);

            if (currentPage > 3) {
                pages.push('...');
            }

            // Show pages around current
            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) {
                if (!pages.includes(i)) {
                    pages.push(i);
                }
            }

            if (currentPage < totalPages - 2) {
                pages.push('...');
            }

            // Always show last page
            if (!pages.includes(totalPages)) {
                pages.push(totalPages);
            }
        }

        return pages;
    }, [currentPage, totalPages]);

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages || page === currentPage) return;

        onPageChange(page);

        if (scrollToTop) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    if (totalPages <= 1) return null;

    return (
        <nav className="pagination-wrapper mt-4 mb-4" aria-label="Car listings pagination">
            <ul className="pagination justify-content-center align-items-center gap-2 flex-wrap">
                {/* Previous Button */}
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                        className="page-link d-flex align-items-center justify-content-center"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        aria-label="Previous page"
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '8px',
                            border: '1px solid #dee2e6',
                            backgroundColor: currentPage === 1 ? '#f8f9fa' : '#fff',
                            cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
                        }}
                    >
                        <FaChevronLeft size={12} />
                    </button>
                </li>

                {/* Page Numbers */}
                {pageNumbers.map((page, index) => (
                    <li key={index} className={`page-item ${page === currentPage ? 'active' : ''}`}>
                        {page === '...' ? (
                            <span
                                className="page-link"
                                style={{
                                    border: 'none',
                                    backgroundColor: 'transparent',
                                    padding: '0 8px'
                                }}
                            >
                                ...
                            </span>
                        ) : (
                            <button
                                className="page-link"
                                onClick={() => handlePageChange(page)}
                                aria-label={`Go to page ${page}`}
                                aria-current={page === currentPage ? 'page' : undefined}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '8px',
                                    border: page === currentPage ? 'none' : '1px solid #dee2e6',
                                    backgroundColor: page === currentPage ? '#e72400' : '#fff',
                                    color: page === currentPage ? '#fff' : '#333',
                                    fontWeight: page === currentPage ? '600' : '400',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                {page}
                            </button>
                        )}
                    </li>
                ))}

                {/* Next Button */}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button
                        className="page-link d-flex align-items-center justify-content-center"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        aria-label="Next page"
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '8px',
                            border: '1px solid #dee2e6',
                            backgroundColor: currentPage === totalPages ? '#f8f9fa' : '#fff',
                            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
                        }}
                    >
                        <FaChevronRight size={12} />
                    </button>
                </li>
            </ul>

            {/* Page info */}
            <div className="text-center text-muted mt-2" style={{ fontSize: '14px' }}>
                Page {currentPage} of {totalPages}
            </div>
        </nav>
    );
};

export default Pagination;
