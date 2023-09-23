import { Component } from "react";

import "./number-input.css";

class RegisterPage extends Component {
  state = {
    value: 0,
    error: false
  };

  changeValue = (value) => {
    this.setState({ value, error: false });
  };

  onMinus = () => this.changeValue(this.state.value - 1)
  onPlus = () => this.changeValue(this.state.value + 1)

  onInputChange = (event) => {
    const value = Number(event.target.value.trim())

    if(isNaN(value)) {
    return this.setState({error: true})
    }

    this.setState({value, error: false})
  }

  render() {
    const { value, error } = this.state

    return (
      <div className="container">
        <h1>Input number</h1>
        <div className="input">
          <button onClick={this.onMinus} className="reduce-btn">-</button>
          <input
            type="text"
            name="number"
            id="username"
            value={value}
            onChange={this.onInputChange}
          />
          <button onClick={this.onPlus} className="add-btn">+</button>

          { error ? <div>Input only number</div> : null}
        </div>
      </div>
    );
  }
}

export default RegisterPage;
