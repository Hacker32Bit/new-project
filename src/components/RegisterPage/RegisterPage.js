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

  submit = () => {
    const result = { username: this.state.username, email: this.state.email, password: this.state.password }

    this.setState({
      username: "",
      email: "",
      password: ""
    })

    console.log(result)
  }

  render() {
    return (
        <div className="container">
            <h1>Register now!</h1>
            <input type="text" value={this.state.username} onChange={this.onUsername} placeholder="Username"></input>
            <input type="email" value={this.state.email} onChange={this.onEmail} placeholder="Email"></input>
            <input type="password" value={this.state.password} onChange={this.onPassword} placeholder="Password"></input>
            <button onClick={this.submit}>Let's GO!</button>
        </div>
    );
  }
}

export default RegisterPage;