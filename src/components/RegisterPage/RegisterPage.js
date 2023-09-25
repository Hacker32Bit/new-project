import { useState } from "react";

import "./register-page.css";

function RegisterPage(props) {
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [password, setPassword] = useState(localStorage.getItem("password"));
  const [image, setImage] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  const validateEmail = (email) => {
    return true;
  };

  const validatePassword = (password) => {
    return true;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    localStorage.setItem(name, value);

    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleRegister = () => {
    const validationErrors = {};
    if (!email.trim() && validateEmail(email)) {
      validationErrors.email = "Please enter a valid email.";
    }

    if (!password.trim() && validatePassword(password)) {
      validationErrors.password =
        "Password must contain letters, numbers and bet at least 6 characters long.";
    }

    if (username.trim().length < 3) {
      validationErrors.username = "Username is required.";
    }

    if (Object.keys(validationErrors).length === 0) {
      props.register({ username, email, password, image });
      setUsername("");
      setEmail("");
      setPassword("");
      setImage(null);
      setValidationErrors({});
    } else {
      setValidationErrors(validationErrors);
    }
  };

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
          onChange={handleChange}
        />
      </div>
      <div className="register-input">
        <input
          type="file"
          name="file"
          id="file-input"
          className="photoInput"
          onChange={onImageChange}
          accept="image/*"
        />
        <label id="file-input-label" htmlFor="file-input">
          <div className="figure">
            <img
              className="file-upload"
              alt="userPhoto"
              src={image ? image : require("../../img/guest.jpg")}
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
          onChange={handleChange}
        />
      </div>
      <div className="register-input">
        <input
          type="password"
          name="password"
          placeholder="Password"
          id="password"
          value={localStorage.getItem("password")}
          onChange={handleChange}
        />
      </div>

      {Object.keys(validationErrors).length ? (
        <div className="error-alert">
          <span>{validationErrors.email}</span>
          <span>{validationErrors.password}</span>
          <span>{validationErrors.username}</span>
        </div>
      ) : null}

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default RegisterPage;
