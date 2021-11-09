import React from "react";
import "./YearButton.css";

interface YearButtonProps {
  year: string;
}

const YearButton = ({ year }: YearButtonProps) => {
  return <div className="year-btn">{year}</div>;
};

export default YearButton;
