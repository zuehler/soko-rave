import sets from "../../data/sets.json";
import "../../styles/page-media/media.scss";

import ReactPlayer from "react-player";
import { useState } from "react";

export const Media = () => {
  const [keywords, setKeywords] = useState([
    "2022",
    // , "2022"
  ]);
  const filteredSets = sets.filter((set) => {
    return Object.values(set).join().includes(keywords);
  });

  return (
    <div className="media">
      <h1>SOKO_RAVE | records</h1>
      {/* <div>
        {keywords.join(" || ")}
        {console.log(keywords)}
      </div> */}
      <form>
        <label>filter</label>
        <input
          type="text"
          placeholder="2022"
          onChange={(e) =>
            setKeywords(
              e.target.value
              // .split(" ")
            )
          }
        />
      </form>
      <div className="sets">
        <ul>
          {filteredSets
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
