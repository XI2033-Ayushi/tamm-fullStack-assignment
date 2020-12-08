import React from "react";
import Mouse from "./MouseTrack";

const withMouse=(Component) =>{
    return class extends React.Component {
      render() {
        return (
          <Mouse render={mouse => (
            <Component {...this.props} mouse={mouse} />
          )}/>
        );
      }
    }
  }

export default withMouse;
