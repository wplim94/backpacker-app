import React from 'react';
import { createSchedule } from '../../services/ScheduleService';

function CreatePage(props) {
    console.log('Props',props);

    const addPlan = (e) => {
        e.preventDefault(); //prevent refreshing
        console.log('form', e.target.destination.value);
        const { destination, endDate, startDate } = e.target 
        const scheduleData = { destination: destination.value, startDate: startDate.value, endDate: endDate.value };
        scheduleData['createDate'] = new Date();
        scheduleData['user'] = localStorage.getItem('username')

        createSchedule(scheduleData).then((res)=>{
            const user = localStorage.getItem('username');
            const userScheduleKey = `${user}_schedules`;
            const arr = JSON.parse(localStorage.getItem(userScheduleKey) || '[]');
            arr.push(res)
            localStorage.setItem(userScheduleKey, JSON.stringify(arr));

            //push Schedule Page
            props.history.push('/schedule/');
        })
    }

    return (
        <>
        <h1>{props.title}</h1>

        <form onSubmit={addPlan}>
        <h1>You are going...</h1>
        <input type="text" name="destination" placeholder="Destination"></input>

        <h1>From</h1>
        <input type="date" name="startDate" placeholder="Start Date"></input>

        <h1>To</h1>
        <input type="date" name="endDate" placeholder="End Date"></input>

        <br/>
        <button type="submit">Add Plan</button>
        </form>
        </>
    )
}

export default CreatePage