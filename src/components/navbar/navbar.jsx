import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Outlet,
  Routes,
  Route,
} from "react-router-dom";
import { Start } from "../subpages/start/start.jsx";
import { Members } from "../subpages/members/members.jsx";
import { Media } from "../subpages/media/media.jsx";
import { Shows } from "../subpages/shows/shows.jsx";
import { Contact } from "../subpages/contact/contact.jsx";
import { Merch } from "../subpages/merch/merch.jsx";

export const Navbar = () => {
  const navlinks = ["start", "members", "media", "shows", "contact", "merch"];

  return (
    <Router>
      <nav className="navbar">
        {navlinks.map((navlink) => {
          return (
            <span
              key={navlink}
              style={{ width: 100 / (navlinks.length + 1) + "%" }}
            >
              <NavLink to={navlink}>{navlink}</NavLink>
            </span>
          );
        })}
      </nav>
      <Outlet />

      {/* dynamic routing / dynamic component */}
      {/* <Routes>
        {navlinks.map((navlink) => {
          //  console.log(`<${navlink[0].toUpperCase()}${navlink.slice(1)} />`);
          return (
            <Route
              key={navlink}
              path={navlink}
              element={`<${navlink[0].toUpperCase()}${navlink.slice(1)} />`}
            />
            // Vorlage: <Route path="start" element={<Start />} />
          );
        })}
      </Routes> */}

      <Routes>
        <Route path="start" element={<Start />} />
        <Route path="members" element={<Members />} />
        <Route path="media" element={<Media />} />
        <Route path="shows" element={<Shows />} />
        <Route path="contact" element={<Contact />} />
        <Route path="merch" element={<Merch />} />
      </Routes>
    </Router>
  );
};
