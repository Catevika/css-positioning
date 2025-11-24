import { NavLink } from "react-router";

export default function Nav() {
  return <nav>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? "active" : ""
      }
    >
      Static
    </NavLink>
    <NavLink
      to="/relative"
      className={({ isActive }) => isActive ? "active" : ""}
    >
      Relative
    </NavLink>
    <NavLink
      to="/fixed"
      className={({ isActive }) => isActive ? "active" : ""}
    >
      Fixed
    </NavLink>
    <NavLink
      to="/absolute"
      className={({ isActive }) => isActive ? "active" : ""}
    >
      Absolute
    </NavLink>
    <NavLink
      to="/sticky"
      className={({ isActive }) => isActive ? "active" : ""}
    >
      Sticky
    </NavLink>
  </nav>;
}
