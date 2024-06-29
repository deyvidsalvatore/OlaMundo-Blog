import { NavLink } from "react-router-dom";
import styles from "./MenuLink.module.css";
import PropTypes from "prop-types";

export const MenuLink = ({ children, to }) => {
  return (
    <NavLink
      className={({ isActive }) => `
        ${styles.link}
        ${isActive ? styles.linkDestacado : ""}
    `}
      to={to}
    >
      {children}
    </NavLink>
  );
};

MenuLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default MenuLink;
