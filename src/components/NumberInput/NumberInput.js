import { Component } from "react";

import "./number-input.css";

class RegisterPage extends Component {
  state = {
    number: 0,
  };

  handleChange = (event) => {
    this.setState({
      number: event.target.value,
    });
  };

  onButton = (event) => {
    switch (event.target.className){
        case "reduce-btn":
            this.setState({
                number: +this.state.number - 1
            });
            break;
        case "add-btn":
            this.setState({
                number: +this.state.number + 1
            });
            break;
        default:
            break
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Input number</h1>
        <div className="input">
          <button onClick={this.onButton} className="reduce-btn">-</button>
          <input
            type="text"
            name="number"
            id="username"
            value={this.state.number}
            onChange={this.handleChange}
          />
          <button onClick={this.onButton} className="add-btn">+</button>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
