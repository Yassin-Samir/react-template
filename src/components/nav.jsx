import "../css/nav.css";
import Logo from "../assets/logo-black.png";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
function nav() {
  const ref = useRef(null);
  const first = useRef(null);
  const ref2 = useRef(null);
  const [bool, setbool] = useState(false);
  return (
    <nav>
      <div className="nav" id="nav">
        <Link to="/">
          <img src={Logo} loading="lazy" />
        </Link>
        <div className="center">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/">
              <li>About Us</li>
            </Link>
            <Link to="/">
              <li>Services</li>
            </Link>
            <Link to="/">
              <li>Pages</li>
            </Link>
            <Link to="/">
              <li>Blog</li>
            </Link>
            <Link to="/">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="end">
          <button>Login</button>
          <button>Get quotes</button>
        </div>
      </div>
      <div className="mobile-nav" ref={ref}>
        <ul>
          <li>
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/"> About Us</Link>
          </li>
          <li>
            <Link to="/"> Services</Link>
          </li>
          <li>
            <Link to="/"> Pages</Link>
          </li>
          <li>
            <Link to="/"> Blog</Link>
          </li>
          <li>
            <Link to="/"> Contact</Link>
          </li>
          <li>
            <button>Login</button>
            <button>Get quotes</button>
          </li>
        </ul>
      </div>
      <span
        className="nav-btn"
        ref={first}
        onClick={(e) => {
          if (!bool) {
            setbool(true);
            e.currentTarget.style.height = "5px";
            e.currentTarget.style.transform = "rotate(80deg)";
            ref.current.style.transform = "translate(-50%,70px)";
            e.currentTarget.children[0].style.transform =
              "translate(-3px) rotate(235deg)";
            e.currentTarget.children[1].style.display = "none";
            e.currentTarget.children[2].style.transform =
              "translate(-3px,-5px) rotate(146deg)";
          } else {
            setbool(false);
            e.currentTarget.style.height = "25px";
            e.currentTarget.style.transform = "rotate(0) translateY(-50%)";
            ref.current.style.transform = "";
            e.currentTarget.children[1].style.display = "";
            e.currentTarget.children[2].style.transform = "";
            e.currentTarget.children[0].style.transform = "";
          }
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </span>
    </nav>
  );
}
export default nav;
