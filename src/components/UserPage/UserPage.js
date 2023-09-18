import { Component } from "react";

import "./user-page.css";

class UserPage extends Component {

  render() {

    const { username, email, image } = this.props.userData

    return (
      <div className="container">
        <h1>Welcome back, {username}!</h1>
        <img className="profile-photo" alt="profile" src={image ? image : require("../../img/guest-photo.png")}></img>
        <h3>Your email: {email}</h3>
        <button onClick={this.props.onLogout}>LogOut</button>
      </div>
    );
  }
}

export default UserPage;
