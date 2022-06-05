import sokoData from "../../data/soko.json";
import memberData from "../../data/members.json";
import { useState } from "react";
import { camelizeWords } from "../../tools/camelizeWords.jsx";
import { ContactSoko } from "../../components/contact/contactSoko/contactSoko.jsx";

export const Contact = () => {
  const [activeMember, setActiveMember] = useState("Gucci");

  return (
    <div className="contact">
      <h1>SOKO_RAVE | bitte folgen! </h1>

      <ContactSoko />

      <div className="btnContainer">
        {memberData.map((member, index) => {
          return (
            <button
              key={index}
              className={camelizeWords(member.name)}
              value={`${activeMember}`}
              style={{
                width: 200 / (memberData.length + 1) + "%",
                color:
                  activeMember === `${member.name}` ? "#f67a29" : "whitesmoke",
                textShadow:
                  activeMember === `${member.name}`
                    ? "0px 0px 5px #f67a29"
                    : "0px 0px 5px whitesmoke",
                border:
                  activeMember === `${member.name}` ? "1px solid #f67a29" : "",
                boxShadow:
                  activeMember === `${member.name}`
                    ? "0px 0px 1px 1px #f67a29"
                    : "",
              }}
              onClick={(e) => {
                setActiveMember(`${member.name}`);
              }}
            >
              {member.name}
            </button>
          );
        })}
      </div>
      <span className={`contactMember ${activeMember}`}>
        <img
          src={`./public/mugshot_${camelizeWords(activeMember)}.jpg`}
          alt={activeMember}
          className={activeMember}
        />
        <ul>
          <li>{activeMember}</li>
          <li>
            email:{" "}
            <a
              target="_blank"
              href={`mailto: ${memberData
                .map((member) => {
                  return activeMember === member.name ? member.email : "";
                })
                .join("")}`}
            >
              {memberData
                .map((member) => {
                  return activeMember === member.name ? member.email : "";
                })
                .join("")}
            </a>
          </li>
          <li>
            instagram:{" "}
            <a
              target="_blank"
              href={memberData
                .map((member) => {
                  return activeMember === member.name
                    ? member.instagram.link
                    : "";
                })
                .join("")}
            >
              {memberData
                .map((member) => {
                  return activeMember === member.name
                    ? member.instagram.username
                    : "";
                })
                .join("")}
            </a>
          </li>
          <li>
            soundcloud:{" "}
            <a
              target="_blank"
              href={memberData
                .map((member) => {
                  return activeMember === member.name
                    ? member.soundcloud.link
                    : "";
                })
                .join("")}
            >
              {memberData
                .map((member) => {
                  return activeMember === member.name
                    ? member.soundcloud.username
                    : "";
                })
                .join("")}
            </a>
          </li>
        </ul>
      </span>
    </div>
  );
};
