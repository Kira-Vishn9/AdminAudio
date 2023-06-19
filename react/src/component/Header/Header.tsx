import { Button } from "../index";
import { Outlet, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useContext } from "react";
import AuthContext from "../../context/Context";
import "./style.css";

export function Header() {
  const location = useLocation();
  const [auth, setAuth] = useContext(AuthContext);
  return (
    <div className="header">
      <Link to="/main">
        <span>Logo</span>
      </Link>
      <Link to="/LOGIN">
        <Button color="primary" size="medium" variant="outlined">
          {location.pathname === "/LOGIN" ? "Sign in" : "Sign up"}
        </Button>
      </Link>
    </div>
  );
}
