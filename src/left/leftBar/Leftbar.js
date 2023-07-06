import "./leftbar.css";
import dashboard from "./dashboard.svg";
import report from "./report.svg";
import order from "./order.svg";
import user from "./user.svg";
import logout from "./logout.svg";

export const LeftBar = () => {
  return (
    <div className="leftbar">
      <a className="active" href="">
        <span>
          <img src={dashboard} />
        </span>
        <h3>Dashboard</h3>
      </a>
      <a href="">
        <span>
          <img src={report} />
        </span>
        <h3>Report</h3>
      </a>
      <a href="">
        <span>
          <img src={order} />
        </span>
        <h3>Order</h3>
      </a>
      <a href="">
        <span>
          <img src={user} />
        </span>
        <h3>User</h3>
      </a>
      <a href="">
        <span>
          <img src={logout} />
        </span>
        <h3>Logout</h3>
      </a>
    </div>
  );
};

export default LeftBar;
