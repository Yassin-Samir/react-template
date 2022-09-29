import "../css/section3.css";
import pic from "../assets/choose-1.png";
function section3() {
  return (
    <div className="section3">
      <div className="main">
        <h1>Online Services</h1>
        <p className="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="grid">
          <span className="first firs">
            <span>Development</span>
          </span>
          <span className="first">
            <span>Branding</span>
          </span>
          <span className="first">
            <span>Graphic Design</span>
          </span>
          <span className="first firs">
            <span>Development</span>
          </span>
          <span className="first">
            <span>Branding</span>
          </span>
          <span className="first">
            <span>Graphic Design</span>
          </span>
        </div>
      </div>
      <div className="img">
        <img src={pic} />
      </div>
    </div>
  );
}
export default section3;
