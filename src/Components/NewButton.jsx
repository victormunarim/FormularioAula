import React from "react";

const NewButton = (props) => {
    return (
            <button className="new-button"> {props.children} </button>
    )
}

export default NewButton;