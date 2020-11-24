import React from "react";
import "./Pagination.css";

function Pagination(props) {
  const [pages, setPages] = React.useState([]);
  React.useEffect(() => {
    var _pages = [];
    for (var i = 0; i < props.totalPage; i++) {
      _pages.push(i);
    }
    setPages(_pages);
  }, [props.totalPage]);
  return (
    <div className="pagination-container">
      <button
        onClick={() => {
          props.setCurrentPage(props.currentPage - 1);
        }}
        className="pagination-side-buttion"
      >
        {"<"}
      </button>
      {pages.map((item, index) => (
        <button
          onClick={() => {
            props.setCurrentPage(index);
          }}
          className={
            props.currentPage === item
              ? "pagination-page-button active"
              : "pagination-page-button"
          }
          key={index}
        >
          {item + 1}
        </button>
      ))}
      <button
        onClick={() => {
          props.setCurrentPage(props.currentPage + 1);
        }}
        className="pagination-side-buttion"
      >
        {">"}
      </button>
    </div>
  );
}

export default Pagination;
