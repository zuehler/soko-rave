import { React } from "react";
import sokoData from "../../../data/soko.json";

export const ContactSoko = () => {
  return (
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
          <a href={sokoData.soundcloud.link}>{sokoData.soundcloud.username}</a>
        </li>
      </ul>
    </span>
  );
};
