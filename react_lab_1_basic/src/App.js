import { Component } from "react";
import "./App.css";
import EmployeeInfo from "./components/EmployeeInfo";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <EmployeeInfo />
        <Form />
      </div>
    );
  }
}

export default App;
