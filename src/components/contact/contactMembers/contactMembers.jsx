import { React } from "react";
import { useState } from "react";
import memberData from "../../../data/members.json";
import { camelizeWords } from "../../../tools/camelizeWords.jsx";

import gucci from "../../../../public/images/g0000.jpg";
import hermyla from "../../../../public/images/h0000.jpg";
import jakobKrakel from "../../../../public/images/j0000.jpg";
import lomo from "../../../../public/images/l0000.jpg";
import mokohuiu from "../../../../public/images/m0000.jpg";
import resaresa from "../../../../public/images/r0000.jpg";

const images = [gucci, hermyla, jakobKrakel, lomo, mokohuiu, resaresa];

export const ContactMembers = () => {
  const [activeMember, setActiveMember] = useState(0);
  return (
    <>
      <div className="btnContainer">
        {memberData.map((member, index) => {
          return (
            <button
              key={index}
              className={camelizeWords(member.name)}
              value={activeMember}
              style={{
                width: 100 / (memberData.length + 1) + "%",
              }}
              onClick={(e) => {
                setActiveMember(index);
              }}
            >
              {member.name}
            </button>
          );
        })}
      </div>
      <span className={`contactMember ${activeMember}`}>
        <div>
          <img
            src={images[activeMember]}
            alt={memberData[activeMember].name}
            className={`img${activeMember}`}
          />
        </div>
        <div>
          <p>{memberData[activeMember].name}</p>
        </div>
        <div>
          <ul>
            <li>
              email:{" "}
              <a
                target="_blank"
                href={`mailto: ${memberData[activeMember].email}`}
              >
                {memberData[activeMember].email}
              </a>
            </li>
            <li>
              instagram:{" "}
              <a target="_blank" href={memberData[activeMember].instagram.link}>
                {memberData[activeMember].instagram.username}
              </a>
            </li>
            <li>
              soundcloud:{" "}
              <a
                target="_blank"
                href={memberData[activeMember].soundcloud.link}
              >
                {memberData[activeMember].soundcloud.username}
              </a>
            </li>
          </ul>
        </div>
      </span>
    </>
  );
};
