export const getAllMatchups = () => {
  return fetch('/api/matchup', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

// export const createMatchup = (matchupData) => {
//   return fetch('/api/matchup', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(matchupData),
//   });
// };

// export const getMatchup = (matchupId) => {
//   return fetch(`/api/matchup/${matchupId}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// };

// export const createVote = (voteData) => {
//   return fetch(`/api/matchup/${voteData}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(voteData),
//   });
// };

// export const getAllTech = () => {
//   return fetch('/api/tech', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// };
export const sendMessage = (query) => {
  //var sendMessageAPI_URL = "https://sqs.us-east-2amazonaws.com/123456789012/MyQueue/? Action = SendMessage & MessageBody=This+is + a + test + message& DelaySeconds=45& Expires=2020 - 12 - 18T22 % 3A52 % 3A43PST& Version=2012 - 11 - 05& AUTHPARAMS"
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};
