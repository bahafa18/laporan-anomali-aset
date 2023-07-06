import "./topbar.css";
import logo from "./logo.svg";
import close from "./close.svg";

export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="logo">
        <img src={logo} alt="" />
        <h2>
          BAHA<span className="danger">FA</span>
        </h2>
      </div>
      <div className="hide-sidebar">
        <span>
          <img src={close} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Topbar;
