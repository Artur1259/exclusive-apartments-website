import { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({ value, duration = 0.5 }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Բաժանել թիվը և տառը (օրինակ՝ "20k" -> "20" և "k")
          const numericPart = value.match(/\d+/g)?.[0] || "0";
          const letterPart = value.match(/[a-zA-Z]+/g)?.[0] || "";
          
          let start = 0;
          const end = parseInt(numericPart);
          const intervalTime = Math.floor((duration * 1000) / end);

          const interval = setInterval(() => {
            start += 1;
            setDisplayValue(start + letterPart);
            if (start >= end) {
              clearInterval(interval);
            }
          }, intervalTime);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [value, duration]);

  return <div ref={ref}>{displayValue}</div>;
};

export default AnimatedCounter;