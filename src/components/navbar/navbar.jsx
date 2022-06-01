import React from "react";

export const Navbar = () => {
  const navlinks = ["members", "media", "shows", "contact", "merch"];

  return (
    <div className="navbar">
      {navlinks.map((navlink) => {
        return (
          <div
            key={navlink}
            style={{ width: 100 / (navlinks.length + 1) + "%" }}
          >
            {navlink}
          </div>
        );
      })}
    </div>
  );
};
