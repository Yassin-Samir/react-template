import "../css/section5.css";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
function section6() {
  const arr = [
    { name: "Years of Experience", num: 100 },
    { name: "Complete Projects", num: 70 },
    { name: "Employees", num: 90 },
    { name: "5 Star Rating", num: 80 },
  ];
  return (
    <div className="section5">
      {arr.map((i, ind) => (
        <Section key={ind} num={i.num} name={i.name} />
      ))}
    </div>
  );
}
function Section({ num, name }) {
  const [ref, inView] = useInView({ triggerOnce: true });
  let [number, setNumber] = useState(0);
  useEffect(() => {
    if (inView) {
      const inter = setInterval(() => {
        if (number != num + 1) setNumber(number++);
        else clearInterval(inter);
      }, 10);
    }
  }, [inView]);
  return (
    <div>
      <h1 ref={ref}>{number}+</h1>
      <p>{name}</p>
    </div>
  );
}
export default section5;
