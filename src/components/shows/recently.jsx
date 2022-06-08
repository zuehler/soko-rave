import shows from "../../data/shows.json";

export const Recently = () => {
  return (
    <div className="shows">
      <h2>recently</h2>
      <ul className="recently">
        {shows.recent.map((show) => {
          return (
            <ul>
              <li>
                {show.date} / {show.party}
              </li>
              <li>{show.info}</li>{" "}
              <li>
                {show.location} / {show.city}
              </li>
              <li>on stage: {show.members.join(" / ")}</li>
            </ul>
          );
        })}
      </ul>
    </div>
  );
};
