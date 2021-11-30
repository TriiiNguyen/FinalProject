
export const sendMessage = (query) => {
  //var sendMessageAPI_URL = "https://sqs.us-east-2amazonaws.com/123456789012/MyQueue/? Action = SendMessage & MessageBody=This+is + a + test + message& DelaySeconds=45& Expires=2020 - 12 - 18T22 % 3A52 % 3A43PST& Version=2012 - 11 - 05& AUTHPARAMS"

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
    console.log("dai;ly news fetched", data);
    return data;
  }).catch(error => console.log(error));
}