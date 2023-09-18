import { Component } from "react";
import RegisterPage from "../RegisterPage";
import UserPage from "../UserPage";

import "./app.css";

class App extends Component {
  state = {
    logged: false,
    data: { username: "", email: "", password: "" },
  };

  register = (data) => {
    this.setState({
      logged: true,
      data: data,
    })
  };

  render() {
    return (
      <div className="app">
        {this.state.logged ? (
          <UserPage userData={this.state.data} />
        ) : (
          <RegisterPage register={this.register} />
        )}
      </div>
    );
  }
}

export default App;
