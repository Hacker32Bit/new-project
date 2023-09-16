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
    this.setState((prevState) => {
      let newObj = Object.assign({}, prevState.data);

      newObj.username = data.username;
      newObj.email = data.email;
      newObj.password = data.password;

      return { newObj };
    });

    this.setState({
      logged: true
    })


    console.log(this.state.data);
  };

  render() {
    return (
      <div className="app">
        {this.state.logged ? (
          <UserPage data={this.state.data} />
        ) : (
          <RegisterPage register={this.register} />
        )}
      </div>
    );
  }
}

export default App;
