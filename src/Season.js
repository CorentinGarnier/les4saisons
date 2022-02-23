import React from "react";
import { formatDistanceToNowStrict } from "date-fns";

import "./css/Season.css";
import data from "./data.json";

function Season({ name }) {
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
  return (
    <div className="season-div">
      <span className="season-title">Current season</span>
      <span role="img" aria-label={name} className="season-icon">
        {season.icon}
      </span>
      <h1 className="season-title">{season.name}</h1>
      <p className="season-content">{distance}</p>
    </div>
  );
}

export default Season;
