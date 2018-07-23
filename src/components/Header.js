import React from "react";
import { NavLink } from "react-router-dom";

const examples = [
  { name: "Basic", url: "/" },
  { name: "Shapes", url: "/shapes" }
];

const Header = () => (
  <div>
    {examples.map(example => (
      <NavLink to={example.url}>{example.name}</NavLink>
    ))}
  </div>
);

export default Header;
