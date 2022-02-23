import React, { useState } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import { useEffect } from "react";
import "./css/Season.css";
import data from "./data.json";

function Season({ name, theme }) {
  const [textColor, setTextColor] = useState("");
  const season = data.seasons[name];
  const currentYear = new Date().getFullYear();
  const distance = formatDistanceToNowStrict(
    new Date(
      currentYear + (name === "winter" ? -1 : 0),
      season.beginAt.month - 1,
      season.beginAt.day
    ),
    { unit: "day", addSuffix: true }
  );

  useEffect(() => {
    if (theme === "light") {
      setTextColor("text-black");
    } else {
      setTextColor("text-white");
    }
  }, [textColor, theme]);

  return (
    <div className="season-div">
      <span className={"season-title " + textColor}>Current season</span>
      <span role="img" aria-label={name} className="season-icon">
        {season.icon}
      </span>
      <h1 className={"season-title " + textColor}>{season.name}</h1>
      <p className={"season-content " + textColor}>{distance}</p>
    </div>
  );
}

export default Season;
