import { useState } from "react";
import RegisterPage from "../RegisterPage";
import UserPage from "../UserPage";
import NumberInput from "../NumberInput/NumberInput";
import FNumberInput from "../NumberInput/FNumberInput";

import "./app.css";

function App() {
  const [logged, setLogged] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    photo: "",
  });

  const register = (data) => {
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
