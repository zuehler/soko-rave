import { React } from "react";
import sokoData from "../../../data/soko.json";
import sokologo from "../../../../public/images/sokorave.jpg";

export const ContactSoko = () => {
  return (
    <span className="contactSoko">
      <div>
        <img src={sokologo} alt="sokoLogo" className="sokoLogo" />
      </div>
      <div>
        <p>{sokoData.name}</p>
      </div>
      <div>
        <ul>
          <li>
            email:{" "}
            <a target="_blank" href={`mailto: ${sokoData.email}`}>
              {sokoData.email}
            </a>
          </li>
          <li>
            instagram:{" "}
            <a target="_blank" href={sokoData.instagram.link}>
              {sokoData.instagram.username}
            </a>
          </li>
          <li>
            soundcloud:{" "}
            <a target="_blank" href={sokoData.soundcloud.link}>
              {sokoData.soundcloud.username}
            </a>
          </li>
        </ul>
      </div>
    </span>
  );
};
