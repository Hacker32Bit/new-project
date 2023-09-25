import { useState } from "react";
import LocalStorageService from "../../services/LocalStorageService";
import RegisterPage from "../RegisterPage";
import UserPage from "../UserPage";
import DarkThemeToggle from "../DarkThemeToggle";
import Test1 from "../Test1/Test1";
import NumberInput from "../NumberInput/NumberInput";
import FNumberInput from "../NumberInput/FNumberInput";

import "./app.css";

function App() {
  const storedData = LocalStorageService.getUserData();
  const [logged, setLogged] = useState(!!storedData);
  const [data, setData] = useState(storedData);

  const register = (data) => {
    LocalStorageService.saveUserData(data);

    setLogged(true);
    setData(data);
  };

  const onLogout = () => {
    setLogged(false);
  };

  return (
    <DarkThemeToggle>
        {logged ? (
          <UserPage userData={data} onLogout={onLogout} />
        ) : (
          <RegisterPage register={register} />
        )}
        {/* <FNumberInput /> */}
    </DarkThemeToggle>
  );
}

export default App;
