import sokoData from "../../data/soko.json";
import memberData from "../../data/members.json";
import { useState } from "react";
import { camelizeWords } from "../../tools/camelizeWords.jsx";
import { ContactSoko } from "../../components/contact/contactSoko/contactSoko.jsx";

export const Contact = () => {
  const [activeMember, setActiveMember] = useState("gucci");

  return (
    <div className="contact">
      <h1>contact</h1>
      <ContactSoko />

      <div className="btnContainer">
        {memberData.map((member, index) => {
          return (
            <button
              key={index}
              className={camelizeWords(member.name)}
              value={activeMember}
              style={{
                width: 200 / (memberData.length + 1) + "%",
                color:
                  activeMember === camelizeWords(member.name)
                    ? "#f67a29"
                    : "whitesmoke",
                textShadow:
                  activeMember === camelizeWords(member.name)
                    ? "0px 0px 5px #f67a29"
                    : "0px 0px 5px whitesmoke",
                border:
                  activeMember === camelizeWords(member.name)
                    ? "1px solid #f67a29"
                    : "",
                boxShadow:
                  activeMember === camelizeWords(member.name)
                    ? "0px 0px 1px 1px #f67a29"
                    : "",
              }}
              onClick={(e) => {
                setActiveMember(camelizeWords(member.name));
              }}
            >
              {member.name}
            </button>
          );
        })}
      </div>
      <span className={`contactMember ${activeMember}`}>
        <img
          src={`./public/mugshot_${activeMember}.jpg`}
          alt={activeMember}
          className={activeMember}
        />
        <ul>
          <li>GUCCI</li>
          <li>
            email: <a href={`mailto: ${sokoData.email}`}>{sokoData.email}</a>
          </li>
          <li>
            instagram:{" "}
            <a href={sokoData.instagram.link}>{sokoData.instagram.username}</a>
          </li>
          <li>
            soundcloud:{" "}
            <a href={sokoData.soundcloud.link}>
              {sokoData.soundcloud.username}
            </a>
          </li>
        </ul>
      </span>
    </div>
  );
};
