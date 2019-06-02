import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

const PrettyButton = ({ children }) => (
  <button className={styles["menu-button"]}>{children}</button>
);

const MyNavLink = ({ children, ...props }) => (
  <NavLink {...props} activeClassName={styles["is-active"]}>
    <PrettyButton>{children}</PrettyButton>
  </NavLink>
);

const Sidebar = props => {
  console.log({ styles });
  return (
    <div className={styles.menu}>
      {props.img && <img src={props.img} title="Profile Picture" />}
      <h1>{props.name}</h1>

      <MyNavLink exact to="/">
        Home
      </MyNavLink>
      <MyNavLink to="/create/">Create</MyNavLink>
      <MyNavLink to="/schedule/">Schedule</MyNavLink>
      <MyNavLink to="/connect/">Connect</MyNavLink>
      <PrettyButton>Log Out</PrettyButton>
    </div>
  );
};

export default Sidebar;
