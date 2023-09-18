import { Component } from "react";

import "./register-page.css";

class RegisterPage extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  
  handleRegister = () => {
    const { username, email, password } = this.state;
    console.log(username, email, password, " --- data");
    this.setState({
      username: "",
      email: "",
      password: "",
    });

    
    this.props.register({username, email, password});
  };

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
        <button onClick={this.handleRegister}>Register</button>
      </div>
    );
  }
}

export default RegisterPage;
