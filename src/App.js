import React, { Component } from "react";
import Avatar from "./Avatar";


class App extends Component {
  render() {
    return (
      <div className= "cards">
        <div className="small">
          <Avatar />
          <Avatar />
          <Avatar />
        </div>
        <div className="medium">
          <Avatar />
          <Avatar />
          <Avatar />
          
        </div>
        <div className="large" style={{size: "large"}}>
          <Avatar />
          <Avatar />
          <Avatar />
          
        </div>
        <div style={{size:"xl", backgroundColor: "pink"}} className="xlarge" >
          <Avatar />
          <Avatar />
          <Avatar />
          
        </div>
      </div>
    );
  }
}

export default App;
