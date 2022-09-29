import "../css/section.css";
import pic from "../assets/home-font.png";
function Section() {
  return (
    <div className="section">
      <div>
        <p>
          Encourage innovation with trusted <span>Technology Solutions</span>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua, magna
          aliqua. ipsum is simply dummy text of the printing.
        </p>
        <button>Learn More</button>
        <button>Contact us</button>
      </div>
      <div className="blank">
        <img src={pic} loading="lazy" />
      </div>
    </div>
  );
}

export default Section;
