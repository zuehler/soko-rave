import sokoData from "../../data/soko.json";
import memberData from "../../data/members.json";
import { useState } from "react";
import { camelizeWords } from "../../tools/camelizeWords.jsx";

export const Contact = () => {
  const [activeMember, setActiveMember] = useState("none");

  return (
    <div className="contact">
      <h1>contact</h1>

      <span className="contactSoko">
        <img src="./public/soko_rave_logo.jpg" alt="" className="sokoLogo" />
        <ul>
          <li>{sokoData.name}</li>
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
      <div className="btnContainer">
        {memberData.map((member, index) => {
          return (
            <button
              key={index}
              className={camelizeWords(member.name)}
              value={activeMember}
              style={{
                width: 100 / (memberData.length + 1) + "%",
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
          src="./public/mugshot_jakobKrakel.jpg"
          alt=""
          className="sokoFoto"
        />
        <ul>
          <li>{memberData[0].name}</li>
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
