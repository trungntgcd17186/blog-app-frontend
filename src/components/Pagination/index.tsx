import classNames from "classnames";
import { IPagination } from "../../types";

const Pagination = ({
  currentPage,
  totalPage,
  onPageChange = () => {},
}: IPagination) => {
  const pages = Array.from({ length: totalPage }, (_, index) => index + 1);

  return (
    <ul className="pagination">
      <li
        className={classNames("page-item", {
          disabled: currentPage === 1,
        })}
      >
        <a
          className="page-link"
          onClick={() => onPageChange(currentPage - 1)}
          role="button"
        >
          Previous
        </a>
      </li>

      {pages.map((page) => (
        <li
          key={page}
          className={classNames("page-item", {
            active: currentPage === page,
          })}
        >
          <a
            className="page-link"
            onClick={() => onPageChange(page)}
            role="button"
          >
            {page}
          </a>
        </li>
      ))}

      <li
        className={classNames("page-item", {
          disabled: currentPage === totalPage,
        })}
      >
        <a
          className="page-link"
          onClick={() => onPageChange(currentPage + 1)}
          role="button"
        >
          Next
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
