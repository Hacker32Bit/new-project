import { Component } from "react";

import "./register-page.css";

class RegisterPage extends Component {

  state = {
    username: "",
    email: "",
    password: "",
  }

  onUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  } 
  
  onEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  } 
  
  onPassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }
  handleRegister = () => {
    const { username, email, password } = this.state;
    console.log(username, email, password, ' --- data');
    this.setState({
      username: '',
      email: '',
      password: ''
    })
  }

  render() {
    const { username, email, password } = this.state;

    return (
        <div className="container">
            <h1>Register now!</h1>
            <div className="register-input">
            <input
              type="text"
              name="username"
              placeholder="Username"
              id="username"
              value={username}
              onChange={this.handleChange}
            />
          </div>
          <div className="register-input">
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="register-input">
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <button
            className="register-btn"
            onClick={ this.handleRegister }
          >
            Register
          </button>
        </div>
    );
  }
}

export default RegisterPage;