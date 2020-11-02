import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

class LoginForm extends Component {
  state = { user: { email: "", password: "" }, errors: {} };

  isValid = () => {
    const errors = {};
    if (this.state.user.email.trim() === "") {
      errors.email = "Invalid";
    }
    if (this.state.user.password.trim() === "") {
      errors.password = "Invalid";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  changeHandler = (event) => {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };

  submitHandler = (event) => {
    event.preventDefault();
    const errors = this.isValid();
    console.log(errors);
    this.setState({ errors });
    if (errors) return;
    console.log("Call the Server");
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={this.state.user.email}
              onChange={this.changeHandler}
              name="email"
              type="email"
              placeholder="Enter email"
            />
            {this.state.errors.email && (
              <Alert variant="danger">{this.state.errors.email}</Alert>
            )}
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={this.state.user.password}
              onChange={this.changeHandler}
              name="password"
              type="password"
              placeholder="Password"
            />
            {this.state.errors.password && (
              <Alert variant="danger">{this.state.errors.password}</Alert>
            )}
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default LoginForm;
