import React, { useEffect, useRef, useState } from "react";
export function TranslateMove({ children }) {
  const elRef = useRef();

  const [rotateY, setRotateY] = useState("0deg");
  const [rotateX, setRotateX] = useState("0deg");

  const handleOnMouseEnter = (e) => {
    const event = e || window.event;
    const target = event.target || event.srcElement;
    const rect = target.getBoundingClientRect();
    const cardWidth = 200;
    const degIncrement = 0.2;

    const getRotateDeg = (input) => {
      if (input < cardWidth * 0.33) {
        return `${degIncrement * 2}deg`;
      } else if (input >= cardWidth * 0.33 && input < cardWidth * 0.66) {
        return `${degIncrement}deg`;
      } else if (input >= cardWidth * 0.66 && input < cardWidth * 0.5) {
        return "0deg";
      } else if (input >= cardWidth * 0.5 && input < cardWidth * 0.33) {
        return `-${degIncrement}deg`;
      } else {
        return `-${degIncrement * 2}deg`;
      }
    };

    setRotateX(getRotateDeg(window.event.clientY - rect.top));
    setRotateY(getRotateDeg(window.event.clientX - rect.left));
  };

  const handleOnMouseLeave = () => {
    setRotateY("0deg");
    setRotateX("0deg");
  };

  useEffect(() => {
    if (elRef && elRef.current) {
      elRef.current.addEventListener("mousemove", (event) =>
        handleOnMouseEnter(event)
      );

      return () =>
        // eslint-disable-next-line react-hooks/exhaustive-deps
        elRef.current.removeEventListener("mousemove", (event) =>
          handleOnMouseEnter(event)
        );
    }
  }, [elRef]);

  useEffect(() => {
    if (elRef && elRef.current) {
      elRef.current.addEventListener("mouseleave", handleOnMouseLeave);
      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        elRef.current.RemoveEventListener("mouseleave", handleOnMouseLeave);
      };
    }
  }, [elRef]);

  const style = {
    width: "100%",
    transitionDuration: "0.5s",
    transitionProperty: "transform",
    transform: `rotateY(${rotateX ?? 0}) rotateX(${rotateY ?? 0})`,
  };

  return (
    <div ref={elRef} style={style}>
      {children}
    </div>
  );
}
