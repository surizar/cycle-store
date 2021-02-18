import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li>
      <NavLink to={props.link}>{props.linktext}</NavLink>
    </li>
  );
};

export default NavItem;
