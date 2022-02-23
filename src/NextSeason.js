import "./css/Season.css";
import data from "./data.json";
import { useEffect, useState } from "react";
import { formatDistanceStrict, formatDistanceToNowStrict } from "date-fns";

function NextSeason({ name, theme }) {
  const season = data.seasons[name];
  const [textColor, setTextColor] = useState("");
  const currentYear = new Date().getFullYear();
  const beginAt = new Date(
    currentYear + (name === "winter" ? -1 : 0),
    season.beginAt.month - 1,
    season.beginAt.day
  );
  const distance = formatDistanceToNowStrict(beginAt, {
    unit: "day",
    addSuffix: true,
  });
  const endAt = new Date(currentYear, season.endAt.month, season.endAt.day);
  const duration = formatDistanceStrict(beginAt, endAt, {
    unit: "day",
  });

  useEffect(() => {
    if (theme === "light") {
      setTextColor("text-black");
    } else {
      setTextColor("text-white");
    }
  }, [textColor, theme]);

  return (
    <div className="season-div">
      <hr />
      <span className={"season-title " + textColor}>Next season</span>
      <span role="img" aria-label={name} className="season-icon">
        {season.icon}
      </span>
      <h1 className={"season-title " + textColor}>{season.name}</h1>
      <h4 className={"season-duration " + textColor}>{duration}</h4>
      <p className={"season-content " + textColor}>{distance}</p>
    </div>
  );
}

export default NextSeason;
