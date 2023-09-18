import { Component } from "react";

import "./register-page.css";

class RegisterPage extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    image: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      this.setState({image: URL.createObjectURL(event.target.files[0])});
    }
   }

  handleRegister = () => {
    const { username, email, password, image } = this.state;
    console.log(username, email, password, " --- data");
    this.setState({
      username: "",
      email: "",
      password: "",
      image: "",
    });

    this.props.register({ username, email, password, image });
  };

  render() {
    const { username, email, password, image } = this.state;

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
            type="file"
            name="file"
            id="file-input"
            className="photoInput"
            onChange={this.onImageChange}
            accept="image/*"
          />
          <label id="file-input-label" htmlFor="file-input">
            <div className="figure">
              <img className="file-upload" alt="userPhoto" src={ image ? image : require('../../img/guest.jpg')}></img>
              <img className="file-upload image-hover" alt="addPhoto" src={require('../../img/add-photo.png')}></img>
            </div>
            <span>Upload your profile photo</span>
          </label>
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
