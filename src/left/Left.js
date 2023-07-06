import "./left.css";
import Leftbar from "./leftBar/Leftbar";
import Topbar from "./topBar/Topbar";

export const Left = () => {
  return (
    <div className="left-side">
      <Topbar />
      <Leftbar />
    </div>
  );
};

export default Left;
