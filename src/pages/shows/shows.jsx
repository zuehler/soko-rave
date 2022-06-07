import "../../styles/subpage-shows/shows.scss";
import shows from "../../data/shows.json";

export const Shows = () => {
  return (
    <>
      <h1>SOKO_RAVE | on stage</h1>
      <div className="showsContainer">
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
      </div>
    </>
  );
};
