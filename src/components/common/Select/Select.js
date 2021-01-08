import React from "react";
import "./Select.css";

function Select(props) {
    return (
        <div className="">
            <select>
                {props.options.map((item) => (
                    <option value={item.value}>{item.name}</option>
                ))}
            </select>
        </div>
    );
}

export default Select;
