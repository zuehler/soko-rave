import sets from "../../data/sets.json";
import "../../styles/subpage-media/media.scss";
import ReactPlayer from "react-player";
import { useState } from "react";

export const Media = () => {
  return (
    <div className="media">
      <h1>SOKO_RAVE | records</h1>
      <div className="searchBar">
        <label>filter</label>
        <input
          type="text"
          placeholder="e.g. Lomo, objekt klein a, Techno, Braunschweig ..."
        />
      </div>
      <div className="sets">
        <ul>
          {sets
            .sort((a, b) => {
              return new Date(a.date).getTime() - new Date(b.date).getTime();
            })
            .reverse()
            .map((set, index) => {
              return (
                <ul key={index}>
                  <li>{set.artists.join(" b2b ")}</li>
                  <li>{set.title}</li>
                  <li>
                    {set.date} - {set.location}
                  </li>
                  <li>{set.genre.join(" / ")}</li>
                  <li>
                    <ReactPlayer height="150px" url={set.link} />
                  </li>
                </ul>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
