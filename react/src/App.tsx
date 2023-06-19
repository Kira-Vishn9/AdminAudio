import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthContext from "../src/context/Context";
import { LayoutDefault } from "./component/Layout/LayoutDefault";
import Main from "./page/Main";
import "./App.css";
import LogIn from "./component/LogIn/LogIn";
import { LayoutAuth } from "./component/Layout/LautAuth";
import { useState } from "react";

function App() {
  const [auth, setAuth] = useState(AuthContext);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<LayoutDefault children={Main} />} />
          {auth ? (
            <Route path="/LOGIN" element={<LayoutAuth children={LogIn} />} />
          ) : (
            <Route path="/LOGIN" element={<LayoutDefault children={LogIn} />} />
          )}
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
