import "./css/Season.css";
import data from "./data.json";
import { formatDistanceStrict, formatDistanceToNowStrict } from "date-fns";

function NextSeason({ name }) {
  const season = data.seasons[name];
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

  return (
    <div className="season-div">
      <hr />
      <span className="season-title">Next season</span>
      <span role="img" aria-label={name} className="season-icon">
        {season.icon}
      </span>
      <h1 className="season-title">{season.name}</h1>
      <h4>{duration}</h4>
      <p className="season-content">{distance}</p>
    </div>
  );
}

export default NextSeason;
