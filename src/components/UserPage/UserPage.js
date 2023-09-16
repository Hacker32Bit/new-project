import { Component } from "react";

import "./user-page.css";

class UserPage extends Component {
  render() {

    const { username, email } = this.props

    return (
      <div className="container">
        <h1>Welcome back, {username}!</h1>
        <h3>Your email: {email}</h3>
        <button>LogOut</button>
      </div>
    );
  }
}

export default UserPage;
