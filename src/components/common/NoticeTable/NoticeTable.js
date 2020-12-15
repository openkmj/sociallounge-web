import React from "react";
import "./NoticeTable.css";
import Pagination from "../Pagination/Pagination";

function NoticeTable(props) {
  const [active, setActive] = React.useState(-1);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [totalPage, setTotalPage] = React.useState(1);
  const [currentData, setCurrentData] = React.useState([]);
  React.useEffect(() => {
    setCurrentData(props.data.slice(0, 10));
    setActive(-1);
    setCurrentPage(0);
    setTotalPage(parseInt((props.data.length - 1) / 10) + 1);
  }, [props.data]);
  const setPage = (index) => {
    if (index >= 0 && index < totalPage) {
      setCurrentPage(
        index >= 0 ? (index < totalPage ? index : totalPage - 1) : 0
      );
      setCurrentData(props.data.slice(index * 10, index * 10 + 10));
      setActive(-1);
      window.scrollTo(0, 0);
    }
    // pagination 5개로 제한둔다고 하면?
    // if (totalPage >= 5) {
    //   if (index == 0) {
    //     setPages([0, 1, 2, 3, 4]);
    //   } else if (index == totalPage - 1) {
    //     setPages([
    //       totalPage - 5,
    //       totalPage - 4,
    //       totalPage - 3,
    //       totalPage - 2,
    //       totalPage - 1,
    //     ]);
    //   } else if (index - 2 > 0 && index + 1 < totalPage - 1) {
    //     setPages([index - 2, index - 1, index, index + 1, index + 2]);
    //     console.log([index - 2, index - 1, index, index + 1, index + 2]);
    //   }
    // }
  };
  return (
    <div className="notice-table-container">
      <div className="notice-table">
        {currentData.map((item, index) => (
          <div
            key={index}
            className={
              index === active
                ? "notice-table-item active"
                : "notice-table-item"
            }
          >
            <div className="notice-table-item-title">
              <div className="notice-table-item-title-left">
                {props.showDate && (
                  <div className="notice-table-item-title-date">
                    <div className="notice-table-item-title-date-month">
                      {item.date.slice(4, 6)}
                    </div>
                    <div className="notice-table-item-title-date-year">
                      {item.date.slice(0, 4)}
                    </div>
                  </div>
                )}
                <div className="notice-table-item-title-icon">
                  {props.iconText}
                </div>
                <div className="notice-table-item-title-text">{item.title}</div>
              </div>
              <button
                className="slide-down"
                onClick={() => {
                  if (active === index) setActive(-1);
                  else setActive(index);
                }}
              >
                {index === active ? (
                  <img src="img/icon/ic-up.png" alt="up" />
                ) : (
                  <img src="img/icon/ic-down.png" alt="down" />
                )}
              </button>
            </div>
            <div className="notice-table-item-desc">{item.desc}</div>
          </div>
        ))}
      </div>
      <div className="notice-table-pagination">
        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          setCurrentPage={setPage}
        />
      </div>
    </div>
  );
}

export default NoticeTable;
