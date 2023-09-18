import { Component } from "react";

import "./register-page.css";

class RegisterPage extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    image: null,
    validationErrors: {},
  };

  validateEmail = (email) => {
    return false;
  };
  validatePassword = (password) => {
    return false;
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    localStorage.setItem(name, value);
    this.setState({ [name]: localStorage.getItem(name) });
  };

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      this.setState({ image: URL.createObjectURL(event.target.files[0]) });
    }

    //localStorage.setItem("image", URL.createObjectURL(event.target.files[0]));
  };

  handleRegister = () => {
    const { username, email, password, image } = this.state;

    const validationErrors = {};
    if (!email.trim() && !this.validateEmail(email)) {
      validationErrors.email = "Please enter a valid email.";
    }

    if (!password.trim() && !this.validatePassword(password)) {
      validationErrors.password =
        "Password must contain letters, numbers and bet at least 6 characters long.";
    }

    if (username.trim().length < 3) {
      validationErrors.username = "Username is required.";
    }

    if (Object.keys(validationErrors).length === 0) {
      this.props.register({ username, email, password, image });

      this.setState({
        username: "",
        email: "",
        password: "",
        image: null,
        validationErrors: {},
      });
    } else {
      this.setState({ validationErrors });
    }
  };

  render() {
    const { image, validationErrors } = this.state;
    console.log(localStorage.getItem("image"))
    return (
      <div className="container">
        <h1>Register now!</h1>
        <div className="register-input">
          <input
            type="text"
            name="username"
            placeholder="Username"
            id="username"
            value={localStorage.getItem("username")}
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
              <img
                className="file-upload"
                alt="userPhoto"
                src={localStorage.getItem("image") ? image : require("../../img/guest.jpg")}
              ></img>
              <img
                className="file-upload image-hover"
                alt="addPhoto"
                src={require("../../img/add-photo.png")}
              ></img>
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
            value={localStorage.getItem("email")}
            onChange={this.handleChange}
          />
        </div>
        <div className="register-input">
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            value={localStorage.getItem("password")}
            onChange={this.handleChange}
          />
        </div>

        {Object.keys(validationErrors).length ? (
          <div className="error-alert">
            <span>{validationErrors.email}</span>
            <span>{validationErrors.password}</span>
            <span>{validationErrors.username}</span>
          </div>
        ) : null}

        <button onClick={this.handleRegister}>Register</button>
      </div>
    );
  }
}

export default RegisterPage;
