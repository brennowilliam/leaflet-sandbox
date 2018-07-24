import React from "react";
import { NavLink } from "react-router-dom";

const examples = [
  { name: "Basic", url: "/" },
  { name: "Shapes", url: "/shapes" },
  { name: "Simple", url: "/simple" },
  { name: "Event Handling", url: "/event-handling" }
];

const Header = () => (
  <div>
    {examples.map(example => (
      <NavLink key={example.name} to={example.url}>
        {example.name}
      </NavLink>
    ))}
  </div>
);

export default Header;
