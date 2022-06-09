import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Outlet,
  Routes,
  Route,
} from "react-router-dom";
import { Start } from "../main/subpages/start/start.jsx";
import { Members } from "../main/subpages/members/members.jsx";
import { Media } from "../main/subpages/media/media.jsx";
import { Shows } from "../main/subpages/shows/shows.jsx";
import { Contact } from "../main/subpages/contact/contact.jsx";
import { Merch } from "../main/subpages/merch/merch.jsx";

export const StaticNavbar = () => {
  const navlinks = ["start", "members", "media", "shows", "contact", "merch"];

  return (
    <>
      <nav className="staticNavbar">
        <Router>
          <span>
            <NavLink to="start">Start</NavLink>{" "}
          </span>
          <span>
            <NavLink to="members">Members</NavLink>{" "}
          </span>
          <span>
            <NavLink to="media">Media</NavLink>{" "}
          </span>
          <span>
            <NavLink to="shows">shows</NavLink>{" "}
          </span>
          <span>
            <NavLink to="contact">contact</NavLink>{" "}
          </span>
          <span>
            <NavLink to="merch">Merch</NavLink>{" "}
          </span>
          <Outlet />

          <Routes>
            <Route path="start" element={<Start />} />
            <Route path="members" element={<Members />} />
            <Route path="media" element={<Media />} />
            <Route path="shows" element={<Shows />} />
            <Route path="contact" element={<Contact />} />
            <Route path="merch" element={<Merch />} />
          </Routes>
        </Router>
      </nav>
    </>
  );
};
