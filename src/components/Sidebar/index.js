import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import UserContext from '../../userContext'

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
  const user = useContext(UserContext)
  console.log("USER!",{ user })
  return (
    <div className={styles.menu}>
      <div className={styles.crop}>
        {user && user.imgUrl && <img src={user.imgUrl} className={styles.img} title="Profile Picture" />}
      </div>
      <h1>{user && user.name}</h1>

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
