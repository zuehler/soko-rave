import "../../styles/navbar/navbar.scss";
import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  NavLink,
  Outlet,
  Routes,
  Route,
} from "react-router-dom";
import { Start } from "../../pages/start/start.jsx";
import { Members } from "../../pages/members/members.jsx";
import { Media } from "../../pages/media/media.jsx";
import { Shows } from "../../pages/shows/shows.jsx";
import { Contact } from "../../pages/contact/contact.jsx";
import { Merch } from "../../pages/merch/merch.jsx";

export const Navbar = () => {
  const navlinks = ["start", "members", "media", "shows", "contact", "merch"];
  // const [activeBtn, setActiveBtn] = useState("start");
  // const toggleBtnColor = (e) => {
  //   e.target;
  // };

  return (
    <Router>
      <nav className="navbar">
        {navlinks.map((navlink) => {
          return (
            <span
              key={navlink}
              style={
                { width: 100 / (navlinks.length + 1) + "%" }
                // +  { color: { navlink } === activeBtn ? "orange" : "white" }
                // }
                // onClick={toggleBtnColor(navlink)
              }
            >
              <NavLink to={`/${navlink}`}>{navlink}</NavLink>
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
        <Route path="/" element={<Navigate to="start" replace />} />
        <Route path="/start" element={<Start />} />
        <Route path="/members" element={<Members />} />
        <Route path="/media" element={<Media />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/merch" element={<Merch />} />
      </Routes>
    </Router>
  );
};
