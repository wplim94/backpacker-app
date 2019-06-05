import React from 'react';
import styles from './SchedulePage.module.css';

const ScheduleCard = (props) => (
    <div className={styles["schedule-card"]}>
        <h1>{props.destination}</h1>
        <h1>{props.startDate} - {props.endDate}</h1>
    </div>
);

function SchedulePage(props) {
    const username = localStorage.getItem('username');
    const schedules = JSON.parse(localStorage.getItem(`${username}_schedules`) || '[]');
    return (
        <div className={styles.page}>
        <h1>{props.title}</h1>
        <div className={styles["schedule-card-container"]}>
            {schedules.map((schedule)=>{
                return <ScheduleCard {...schedule}></ScheduleCard>;
            })
            }
        </div>
        </div>
    );
}

export default SchedulePage