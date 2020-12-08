import React from "react";
import MouseTrackHoc from "./MouseTrackHoc";

const displayCom = (props) =>{
    // console.log("props>>>",JSON.stringify(props));
    let textColor = props.mouse && props.mouse.mousePosition && props.mouse.mousePosition === "Inside" ? "Green": "Red"
    return (
    <div style={{ color: textColor, paddingTop: 60 }}>
        <h1>Welcome to the Portal</h1>
        <h3>Mouse is {props.mouse.mousePosition} the Component</h3>
    </div>
    )
}
export default MouseTrackHoc(displayCom);
