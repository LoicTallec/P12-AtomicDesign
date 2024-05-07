import React from "react";
import "./button.css";
const Button = ({ onClick, className, content }) => {
    return (
        <button className={className} onClick={onClick}>
            {content}
        </button>
    );
};

export default Button;