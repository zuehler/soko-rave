import "../../styles/mainScreen/mainScreen.scss";
import "../../styles/mainScreen/mainScreen-small.scss";

import React from "react";
import { useState } from "react";

import { Start } from "../../pages/start/start.jsx";
import { Members } from "../../pages/members/members.jsx";
import { Media } from "../../pages/media/media.jsx";
import { Shows } from "../../pages/shows/shows.jsx";
import { Contact } from "../../pages/contact/contact.jsx";
import { Merch } from "../../pages/merch/merch.jsx";

export const MainScreen = () => {
  const navLinks = ["start", "members", "media", "shows", "contact", "merch"];
  const pages = [
    <Start />,
    <Members />,
    <Media />,
    <Shows />,
    <Contact />,
    <Merch />,
  ];
  const [pageIndex, setNavIndex] = useState(0);

  return (
    <>
      <nav className="navBar">
        {navLinks.map((navLink, index) => {
          return (
            <a
              href="#"
              key={navLink}
              onClick={(e) => setNavIndex(index)}
              style={{
                width: 100 / (navLinks.length + 1) + "%",
                color: index === pageIndex ? "orange" : "whitesmoke",
                textShadow:
                  index === pageIndex
                    ? "0px 0px 3px orange"
                    : "0px 0px 3px whitesmoke",
              }}
            >
              {navLink}
            </a>
          );
        })}
      </nav>
      <div className="mainScreen">{pages[pageIndex]}</div>
    </>
  );
};
