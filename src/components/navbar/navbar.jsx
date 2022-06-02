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

      <Routes>
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
      </Routes>
    </Router>
  );
};
