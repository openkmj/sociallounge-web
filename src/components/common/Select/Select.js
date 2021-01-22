import React from "react";
import "./Select.css";

function Select(props) {
    return (
        <div className="">
            <select
                value={props.currentOption}
                onChange={(e) => {
                    props.setOption(e.target.value);
                }}
            >
                {props.options.map((item, index) => (
                    <option value={item.value} key={index}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;
