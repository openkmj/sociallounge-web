import React from "react";
import "./Tab.css";

function Tab(props) {
  return (
    <div className="tab-container">
      <ul className="tab-list">
        {props.tabs.map((item, index) => (
          <li
            onClick={() => {
              props.setTab(index);
            }}
            className={
              props.currentTab === index ? "tab-item active" : "tab-item"
            }
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tab;
