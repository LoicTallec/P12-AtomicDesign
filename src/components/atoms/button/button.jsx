import React from "react";
import "./button.css"
const Button = ({ onClick, className, content, type }) => {
    return (
        <button className={className} onClick={onClick} type={type}>
            {content}
        </button>
    );
};

export default Button;