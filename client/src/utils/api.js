export const sendMessage = (query) => {
  

  //connect the front-end with the express route that sends message using twiliio 
  
   fetch('/api/messages', {
    method: "POST",
    headers: {
      'Content - Type': 'application / json'
    },
  }).then(res => { res.json() }).then(data => {
    console.log("Api sent a message", data);
    return data; 
  }).catch(error =>  console.log(error) );  
};

export const dailyNews =() =>{
  let query="hello"; 

  fetch(query).then(res => { res.json() }).then(data => {
    console.log("daily news fetched", data);
    return data;
  }).catch(error => console.log(error));
}