import React from "react";
import "./NoticeTable.css";
import Pagination from "../Pagination/Pagination";

function NoticeTable(props) {
    const [active, setActive] = React.useState(-1);
    const [currentPage, setCurrentPage] = React.useState(1);
    return (
      <div className="notice-table-container">
          {props.data.map((item, index)=>(
            <div className={index===active?"notice-table-item active":"notice-table-item"}>
              <div className="notice-table-item-title">
                  <div className="notice-table-item-title-left">
                    <div className="notice-table-item-title-date">
                        <div className="notice-table-item-title-date-month">{item.date.slice(4,6)}</div>
                        <div className="notice-table-item-title-date-year">{item.date.slice(0,4)}</div>
                    </div>
                    <div className="notice-table-item-title-icon">공</div>
                    <div className="notice-table-item-title-text">{item.title}</div>
                  </div>
                <button className="slide-down" onClick={()=>{
                    if(active===index)setActive(-1)
                    else setActive(index);
                }}
                >v</button>
              </div>
              <div className="notice-table-item-desc">{item.desc}</div>
          </div>
          ))}
          <div className="notice-table-pagination">
            <Pagination pages={[1,2,3,4]} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </div>
      </div>
    );
  }
  
export default NoticeTable;