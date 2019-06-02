import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const PrettyButton = ({ children }) => <button className={styles['menu-button']} >
    {children}
</button>

const Sidebar = (props) => {
    console.log({ styles })
    return <div className={styles.menu}>
            <img src={props.img} title="Profile Picture"/>
            <h1>{props.name}</h1>

            <PrettyButton><Link to="/">Home</Link></PrettyButton>
            <PrettyButton><Link to="/create/">Create</Link></PrettyButton>
            <PrettyButton><Link to="/schedule/">Schedule</Link></PrettyButton>
            <PrettyButton><Link to="/connect/">Connect</Link></PrettyButton>
            <PrettyButton>Log Out</PrettyButton>
        </div>;
}

export default Sidebar