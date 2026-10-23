import React from "react";
export const HeaderInfo = ({title, count})=>{
    return (
        <div className="header-info">
            <h2>{title}</h2>
            <span className="count-badge">{count}</span>
        </div>

    );
};