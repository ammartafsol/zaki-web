import React from "react";
import classes from "./Pagination.module.css";
import { RECORDS_LIMIT } from "@/resources/utils/constant";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";


export default function Pagination({
  currentPage = 1,
  limit = RECORDS_LIMIT,
  totalRecords = 0,
  onPageChange,
  showResultsText = true,
  maxVisiblePages = 5,
}) {
  // Input validation - ensure required props are provided
  if (!onPageChange || typeof onPageChange !== 'function') {
    console.error('Pagination: onPageChange is required and must be a function');
    return null;
  }

  // Don't render pagination if there are no records
  if (totalRecords <= 0) {
    return null;
  }

  const totalPages = Math.ceil(totalRecords / limit);
  const safeCurrentPage = Math.max(1, Math.min(currentPage, totalPages));

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 1) return pages;

    // Previous arrow
    pages.push(
      <button
        key="prev"
        className={`${classes.arrowButton} ${classes.prevButton}`}
        onClick={() => onPageChange(Math.max(safeCurrentPage - 1, 1))}
        disabled={safeCurrentPage === 1}
        aria-label="Previous page"
        type="button"
      >
        <FaArrowLeftLong size={18} color="var(--blue-graph-light)"/>
        <span className={classes.arrowButtonText}>Previous</span>
      </button>
    );

    // Calculate page range to show
    const halfVisible = Math.floor(maxVisiblePages / 2);
    let startPage = Math.max(1, safeCurrentPage - halfVisible);
    let endPage = Math.min(totalPages, safeCurrentPage + halfVisible);

    // Adjust if we're near the beginning or end
    if (endPage - startPage + 1 < maxVisiblePages) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      } else {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
    }

    // First page (if not already included)
    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          className={safeCurrentPage === 1 ? classes.activePage : classes.pageButton}
          onClick={() => onPageChange(1)}
          aria-label="Go to page 1"
          type="button"
        >
          1
        </button>
      );

      // Ellipsis after first page
      if (startPage > 2) {
        pages.push(
          <span key="start-ellipsis" className={classes.ellipsis} aria-hidden="true">
            ...
          </span>
        );
      }
    }

    // Page numbers in range
    for (let i = startPage; i <= endPage; i++) {
      if (i !== 1 || startPage === 1) {
        pages.push(
          <button
            key={i}
            className={i === safeCurrentPage ? classes.activePage : classes.pageButton}
            onClick={() => onPageChange(i)}
            aria-label={`Go to page ${i}`}
            aria-current={i === safeCurrentPage ? 'page' : undefined}
            type="button"
          >
            {i}
          </button>
        );
      }
    }

    // Last page (if not already included)
    if (endPage < totalPages) {
      // Ellipsis before last page
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="end-ellipsis" className={classes.ellipsis} aria-hidden="true">
            ...
          </span>
        );
      }

      pages.push(
        <button
          key={totalPages}
          className={safeCurrentPage === totalPages ? classes.activePage : classes.pageButton}
          onClick={() => onPageChange(totalPages)}
          aria-label={`Go to page ${totalPages}`}
          type="button"
        >
          {totalPages}
        </button>
      );
    }

    // Next arrow
    pages.push(
      <button
        key="next"
        className={`${classes.arrowButton} ${classes.nextButton}`}
        onClick={() => onPageChange(Math.min(safeCurrentPage + 1, totalPages))}
        disabled={safeCurrentPage === totalPages}
        aria-label="Next page"
        type="button"
      >
        <span className={classes.arrowButtonText}>Next</span>
        <FaArrowRightLong size={18} color="var(--blue-graph-light)"/>
      </button>
    );

    return pages;
  };

  // Calculate the range of results being displayed
  const startResult = (safeCurrentPage - 1) * limit + 1;
  const endResult = Math.min(safeCurrentPage * limit, totalRecords);

  return (
    <div className={classes.paginationContainer}>
      <div className={classes.paginationButtons} role="navigation" aria-label="Pagination">
        {renderPageNumbers()}
      </div>
      {showResultsText && (
        <span className={classes.resultsText}>
          Showing {startResult} - {endResult} of {totalRecords}
        </span>
      )}
    </div>
  );
}
