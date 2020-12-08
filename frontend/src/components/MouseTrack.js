import React from "react";

class MouseTrack extends React.Component {
    state = { mousePosition: "OutSide", /*x: 0, y: 0*/ }
    handleMouseOver = (event)=>{
        this.setState({
            mousePosition: "Inside",
            // x: event.clientX,
            // y: event.clientY
        });
    } 
    handleMouseOut = (event)=>{
        this.setState({ mousePosition: "Outside" });
    }
    render() {
      return (
        <div className="DisplayComp" onMouseOut={this.handleMouseOut} onMouseOver={this.handleMouseOver}>
          {/*
            Instead of providing a static representation of what <Mouse> renders,
            use the `render` prop to dynamically determine what to render.
          */}
          {this.props.render(this.state)}
        </div>
      );
    }
  }

export default MouseTrack;