export const createSchedule = (scheduleData) => {
    return new Promise((resolve)=>{
      setTimeout(() => {
        resolve(scheduleData)
      }, 300);
    })
  }