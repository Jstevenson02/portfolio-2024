import React from "react";

interface GradientTextProps {
  text: string;
  colors: string[];
}

const GradientText: React.FC<GradientTextProps> = ({ text, colors }) => {
  const gradientStyle: React.CSSProperties = {
    background: `linear-gradient(to right, ${colors.join(",")})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <h1 className='text-4xl font-bold' style={gradientStyle}>
      {text}
    </h1>
  );
};

export default GradientText;
