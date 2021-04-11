import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Task Progress Tracker
          </a>
        </nav>

        <h4 className=" flex  ">
          {`Total number of Tasks in Progress ${this.props.totalCounters}`}
        </h4>
      </>
    );
  }
}

export default NavBar;
