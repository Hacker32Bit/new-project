import { useState } from "react";

import "./number-input.css";

function FNumberInput() {
    const [value, setValue] = useState(0)
    const [error, setError] = useState(false)

    const changeValue = (value) => {
        setValue(value)
        setError(false)
    }

    const onMinus = () => changeValue(value - 1)
    const onPlus = () => changeValue(value + 1)

    const onInputChange = (event) => {
        const value = Number(event.target.value.trim())

        if (isNaN(value)){
            return setError(true)
        }

        setError(false)
        setValue(value)
    }

    return (
      <div className="container">
        <h1>Input number</h1>
        <div className="input">
          <button onClick={onMinus} className="reduce-btn">-</button>
          <input
            type="text"
            name="number"
            id="username"
            value={value}
            onChange={onInputChange}
          />
          <button onClick={onPlus} className="add-btn">+</button>

          { error ? <div>Input only number</div> : null}
        </div>
      </div>
    );
    
}

export default FNumberInput;