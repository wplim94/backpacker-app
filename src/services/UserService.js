export const getUser = () => {
    return new Promise((resolve)=>{
      setTimeout(() => {
        const userData = {
          name: 'Ping',
          imgUrl: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png'
        };
        resolve(userData)
      }, 750);
    })
  }