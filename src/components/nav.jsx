import "../css/nav.css";
import Logo from "../assets/logo-black.png";
import { useRef, useState } from "react";
function nav() {
  const ref = useRef(null);
  const first = useRef(null);
  const ref2 = useRef(null);
  const [bool, setbool] = useState(false);
  return (
    <nav>
      <div className="nav" id="nav">
        <a href="/">
          <img src={Logo} loading="lazy" />
        </a>
        <div className="center">
          <ul>
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About Us</li>
            </a>
            <a href="#">
              <li>Services</li>
            </a>
            <a href="#">
              <li>Pages</li>
            </a>
            <a href="#">
              <li>Blog</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
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
            <a href="/">
              <img src={Logo} alt="" />
            </a>
          </li>
          <li>
            <a href="/"> Home</a>
          </li>
          <li>
            <a href="/"> About Us</a>
          </li>
          <li>
            <a href="/"> Services</a>
          </li>
          <li>
            <a href="/"> Pages</a>
          </li>
          <li>
            <a href="/"> Blog</a>
          </li>
          <li>
            <a href="/"> Contact</a>
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
