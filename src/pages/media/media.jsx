import sets from "../../data/sets.json";

export const Media = () => {
  return (
    <div className="media">
      <h1>SOKO_RAVE | records</h1>
      <div className="sets">
        <ul>
          {sets.map((set, index) => {
            return <li key={index}>{set.members.join(" / ")}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
