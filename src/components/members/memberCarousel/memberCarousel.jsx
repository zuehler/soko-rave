import members from "../../../data/members.json";
import { camelizeWords } from "../../../tools/camelizeWords.jsx";

export const MemberCarousel = () => {
  return (
    <div className="memberCarousel">
      {members.map((member, index) => {
        return (
          <div
            key={index}
            className={/*`${member.name.toLowerCase()}`*/ "memberCard"}
            style={{ width: 100 / (members.length + 1) + "%" }}
          >
            <img
              src={`../public/${camelizeWords(member.name)}.jpg`}
              alt={member.name}
            />
            <h2>{member.name}</h2>

            <ul>
              <li>style:</li>
              {member.style.map((style, index) => {
                return <li key={index}>{style}</li>;
              })}
            </ul>

            <ul>
              <li>last seen:</li>
              {Object.values(member.lastSeen).map((value) => {
                return <li key={value}>{value}</li>;
              })}
              {/* key-value-pairs listed <li>last seen:</li>
              {Object.entries(member.lastSeen).map((pairs, index) => {
                return <li key={index}>{pairs.join(": ")}</li>;
              })} */}
            </ul>

            <ul>
              <li>wanted for:</li>
              <li>{member.wantedFor}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};
