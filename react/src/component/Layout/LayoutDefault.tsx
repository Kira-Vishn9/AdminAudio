import { Header } from "../Header/Header";
import { Aside } from "../Aside/Aside";
import "./style.css";

export function LayoutDefault({ children: Children, isAuth = false }) {
  return (
    <div className="layout">
      <div className="wrap-header">
        <Header></Header>
      </div>
      <div className={isAuth ? "right-template" : "flex-template"}>
        <main className="main">{<Children />}</main>
      </div>
    </div>
  );
}
