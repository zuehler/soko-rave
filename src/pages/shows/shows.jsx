import "../../styles/page-shows/shows.scss";
import { Upcoming } from "../../components/shows/upcoming";
import { Recently } from "../../components/shows/recently";

export const Shows = () => {
  return (
    <>
      <h1>SOKO_RAVE | on stage</h1>
      <div className="showsContainer">
        <Upcoming />
        <Recently />
      </div>
    </>
  );
};
