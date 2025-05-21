"use client";

import React from "react";

// Basic motion component implementation
export const motion = {
  div: ({
    children,
    initial,
    animate,
    transition,
    className,
    ...props
  }: any) => {
    const [style, setStyle] = React.useState(initial);

    React.useEffect(() => {
      const timer = setTimeout(() => {
        setStyle(animate);
      }, 10);

      return () => clearTimeout(timer);
    }, [animate]);

    const transformValue = [];
    if (style?.y !== undefined) transformValue.push(`translateY(${style.y}px)`);
    if (style?.x !== undefined) transformValue.push(`translateX(${style.x}px)`);
    if (style?.scale !== undefined)
      transformValue.push(`scale(${style.scale})`);
    if (style?.rotate !== undefined)
      transformValue.push(`rotate(${style.rotate}deg)`);

    const transitionStyle = transition
      ? {
          transitionProperty: "all",
          transitionDuration: `${transition.duration || 0.3}s`,
          transitionTimingFunction:
            transition.ease || "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDelay: transition.delay ? `${transition.delay}s` : "0s",
        }
      : {};

    const combinedStyle = {
      opacity: style?.opacity,
      transform: transformValue.length ? transformValue.join(" ") : undefined,
      ...transitionStyle,
    };

    return (
      <div className={className} style={combinedStyle} {...props}>
        {children}
      </div>
    );
  },
};
