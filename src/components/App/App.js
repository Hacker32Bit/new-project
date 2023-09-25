import { useState } from "react";
import LocalStorageService from "../../services/LocalStorageService";
import RegisterPage from "../RegisterPage";
import UserPage from "../UserPage";
import NumberInput from "../NumberInput/NumberInput";
import FNumberInput from "../NumberInput/FNumberInput";

import "./app.css";

function App() {
  const storedData = LocalStorageService.getUserData()
  const [logged, setLogged] = useState(!!storedData);
  const [data, setData] = useState(storedData);
  const [isDarkTheme, setDarkTheme] = useState(false)

  const register = (data) => {
    LocalStorageService.saveUserData(data)

    setLogged(true);
    setData(data);
  };

  const onLogout = () => {
    setLogged(false);
  };

  const onTheme = () => {
    setDarkTheme(!isDarkTheme)
  }

  const style = {}

  if (isDarkTheme){
    style.backgroundColor = "#f5f6fa"
    style.color = "black"
  }

  return (
    <div className="app" style={style}>
      <button onClick={onTheme}>Change theme</button>
      {logged ? (
        <UserPage userData={data} onLogout={onLogout} theme={isDarkTheme}/>
      ) : (
        <RegisterPage register={register} theme={isDarkTheme}/>
      )}
      {/* <FNumberInput /> */}
    </div>
  );
}

export default App;
