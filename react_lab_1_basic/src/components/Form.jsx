import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  };
  render() {
    return (
      <div>
        <form>
          <h1>Title</h1>
          <label>
            Name
            <input type="name" name="name"></input>
          </label>
          <br></br>
          <label>
            Email
            <input type="email" name="email"></input>
          </label>
          <br></br>
          <label>
            phone
            <input type="phone" name="phone"></input>
          </label>
          <br></br>
          <label>
            address
            <input type="address" name="address"></input>
          </label>
          <br></br>
          <label>
            message
            <input type="message" name="message"></input>
          </label>
          <br></br>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
