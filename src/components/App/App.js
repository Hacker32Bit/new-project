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

  const register = (data) => {
    LocalStorageService.saveUserData(data)

    setLogged(true);
    setData(data);
  };

  const onLogout = () => {
    setLogged(false);
  };

  return (
    <div className="app">
      {logged ? (
        <UserPage userData={data} onLogout={onLogout} />
      ) : (
        <RegisterPage register={register} />
      )}
      {/* <FNumberInput /> */}
    </div>
  );
}

export default App;
