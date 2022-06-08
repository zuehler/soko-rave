import shows from "../../data/shows.json";

export const Upcoming = () => {
  return (
    <div className="shows">
      <h2>upcoming</h2>
      <ul className="upcoming">
        {shows.upcoming.map((show) => {
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
