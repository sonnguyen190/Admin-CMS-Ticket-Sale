import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { DOTS, usePagination } from "./UsePagi";

interface IPaginationBar {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  onPageChange: (page: number) => void;
}

const PaginationBar = ({
  currentPage,
  totalCount,
  pageSize,
  siblingCount,
  onPageChange,
}: IPaginationBar) => {
  const paginationdata = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationdata!.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <div className="pagination-bar">
      <span
        onClick={onPrevious}
        className={currentPage === 1 ? "disabled" : ""}
      >
        <AiFillCaretLeft
          color={currentPage === 1 ? "#A5A8B1" : "#FF993C"}
          fontSize={24}
        />
      </span>
      {paginationdata?.map((pageNumber: any, index: any) => {
        if (pageNumber === DOTS) {
          return <span key={index + 100}>&#8230;</span>;
        }

        return (
          <span
            key={index + 100}
            className={pageNumber === currentPage ? "active" : ""}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </span>
        );
      })}

      <span
        onClick={onNext}
        className={
          currentPage === paginationdata![paginationdata!.length - 1]
            ? "disabled"
            : ""
        }
      >
        <AiFillCaretRight
          color={
            currentPage === paginationdata![paginationdata!.length - 1]
              ? "#A5A8B1"
              : "#FF993C"
          }
          fontSize={24}
        />
      </span>
    </div>
  );
};

export default PaginationBar;
