import members from "../../../data/members.json";
import { camelizeWords } from "../../../tools/camelizeWords.jsx";

import gucci from "../../../../public/images/g0000.jpg";
import hermyla from "../../../../public/images/h0000.jpg";
import jakobKrakel from "../../../../public/images/j0000.jpg";
import lomo from "../../../../public/images/l0000.jpg";
import mokohuiu from "../../../../public/images/m0000.jpg";
import resaresa from "../../../../public/images/r0000.jpg";

const images = [gucci, hermyla, jakobKrakel, lomo, mokohuiu, resaresa];

export const MemberCarousel = () => {
  return (
    <div className="memberCarousel">
      {members.map((member, index) => {
        return (
          <div
            key={index}
            className={`memberCard ${index}`}
            style={{ width: 100 / (members.length + 1) + "%" }}
          >
            <img src={images[index]} alt={member.name} />
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
