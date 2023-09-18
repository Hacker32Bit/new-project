import { Component } from "react";
import RegisterPage from "../RegisterPage";
import UserPage from "../UserPage";

import "./app.css";

class App extends Component {
  state = {
    logged: false,
    data: { username: "", email: "", password: "", photo: "" },
  };

  register = (data) => {
    this.setState({
      logged: true,
      data: data,
    })
  };

  onLogout = () => {
    this.setState({
      logged: false
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.logged ? (
          <UserPage userData={this.state.data} onLogout={this.onLogout}/>
        ) : (
          <RegisterPage register={this.register} />
        )}
      </div>
    );
  }
}

export default App;
