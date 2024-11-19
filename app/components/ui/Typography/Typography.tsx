import React from "react";
import clsx from "clsx";

type TypographyProps = {
  as?: React.ElementType;
  fontWeight?:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  fontSize?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl";
  color?: string;
  lineHeight?: "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";
  textAlign?: "left" | "center" | "right" | "justify";
  className?: string;
  children: React.ReactNode;
};

const Typography: React.FC<TypographyProps> = ({
  as: Component = "p",
  fontWeight = "normal",
  fontSize = "base",
  color = "text-gray-900",
  lineHeight = "normal",
  textAlign = "left",
  className = "",
  children,
  ...props
}) => {
  const classes = clsx(
    fontWeight && `font-${fontWeight}`,
    fontSize && `text-${fontSize}`,
    color,
    lineHeight && `leading-${lineHeight}`,
    textAlign && `text-${textAlign}`,
    className
  );

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
