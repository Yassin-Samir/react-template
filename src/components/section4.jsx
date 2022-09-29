import "../css/section3.css";
import Haze from "../assets/choose-2.png";
function section4() {
  return (
    <div className="section3">
      <div className="img">
        <img src={Haze} />
      </div>
      <div className="main">
        <h1>Offline Services</h1>
        <p className="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="grid">
          <span className="first">
            <span>Photography</span>
          </span>
          <span className="first">
            <span>DJ</span>
          </span>
          <span className="first">
            <span>Catering</span>
          </span>
          <span className="first">
            <span>Photography</span>
          </span>
          <span className="first">
            <span>DJ</span>
          </span>
          <span className="first">
            <span>Catering</span>
          </span>
        </div>
      </div>
    </div>
  );
}
export default section4;
