import "../../styles/subpage-shows/shows.scss";

export const Shows = () => {
  return (
    <div className="shows">
      <h1>Shows</h1>

      <div className="upcomingShows">
        <h2>upcoming</h2>
        <ul className="upcoming"></ul>
      </div>

      <div className="recentShows">
        <h2>recently</h2>
        <ul className="recently"></ul>
      </div>
    </div>
  );
};
