import React, { useEffect, useRef, useState } from "react";

const VISIBLE = "VISIBLE";
const HIDDEN = "HIDDEN";
const ENTERING = "ENTERING";
const LEAVING = "LEAVING";

/**
 * @param {boolean} visible
 * @param {React.ReactNode} children
 * @param {number} duration en ms
 * @param {boolean} animateEnter Anime l'arrivée de l'élément
 * @param {{opacity?: number, x?: number, y?: number, z?: number}} from
 * @param {string} effect 'scale translate rotete'
 **/
export function Fade({
  visible,
  children,
  duration = 300,
  animateEnter = false,
  from = { opacity: 0 },
  transformType = "scale",
}) {
  const childRef = useRef(children);
  const [state, setState] = useState(
    visible ? (animateEnter ? ENTERING : VISIBLE) : HIDDEN
  );

  if (visible) {
    childRef.current = children;
  }

  useEffect(() => {
    if (!visible) {
      setState(LEAVING);
    } else {
      setState((s) => (s === HIDDEN ? ENTERING : VISIBLE));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  useEffect(() => {
    if (state === LEAVING) {
      const timer = setTimeout(() => {
        setState(HIDDEN);
      }, duration);
      return () => {
        clearTimeout(timer);
      };
    } else if (state === ENTERING) {
      // eslint-disable-next-line no-unused-expressions
      document.body.offsetHeight;
      setState(VISIBLE);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  if (state === HIDDEN) {
    return null;
  }

  let style = {
    transitionDuration: `${duration}ms`,
    transitionProperty: "opacity transform",
  };
  if (state !== VISIBLE) {
    if (from.opacity !== undefined) {
      style.opacity = from.opacity;
    }

    if (transformType === "translate") {
      style.transform = `translate3d(${from.x ?? 0}px, ${from.y ?? 0}px, ${
        from.z ?? 0
      }px)`;
    } else if (transformType === "rotate") {
      style.transform = `rotate3d(${from.x ?? 0}deg, ${from.y ?? 0}deg, ${
        from.z ?? 0
      }deg)`;
    } else {
      style.transform = `scale3d(${from.x ?? 0}, ${from.y ?? 0}, ${
        from.z ?? 0
      })`;
    }
  }

  return <div style={style}>{childRef.current}</div>;
}
