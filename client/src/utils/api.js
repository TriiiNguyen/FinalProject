export const getProfile = () => {
  const profileData = localStorage.getItem('Profile')
    ? JSON.parse(localStorage.getItem('Profile'))
    : [];

  return profileData;
};

export const saveBookIds = (bookIdArr) => {
  if (bookIdArr.length) {
    localStorage.setItem('saved_books', JSON.stringify(bookIdArr));
  } else {
    localStorage.removeItem('saved_books');
  }
};

export const removeBookId = (bookId) => {
  const savedBookIds = localStorage.getItem('saved_books')
    ? JSON.parse(localStorage.getItem('saved_books'))
    : null;

  if (!savedBookIds) {
    return false;
  }

  const updatedSavedBookIds = savedBookIds?.filter((savedBookId) => savedBookId !== bookId);
  localStorage.setItem('saved_books', JSON.stringify(updatedSavedBookIds));

  return true;
};


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