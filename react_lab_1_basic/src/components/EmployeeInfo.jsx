import React, { Component } from "react";

class EmployeeInfo extends Component {
  state = {
    name: "Tabarek",
    job: "Dev",
  };
  render() {
    return <div>{this.state.name + " " + this.state.job}</div>;
  }
}

export default EmployeeInfo;
