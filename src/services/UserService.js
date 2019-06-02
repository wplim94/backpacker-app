export const getUser = () => {
    return new Promise((resolve)=>{
      setTimeout(() => {
        const userData = {
          name: 'Ping',
          imgUrl: 'https://images.pexels.com/photos/1619690/pexels-photo-1619690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200'
        };
        resolve(userData)
      }, 750);
    })
  }