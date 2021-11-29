require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
console.log(process.env.TWILIO_ACCOUNT_SID);
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'This is a TEST for the Danger App!!',
    from: '+16108970733',
    to: '+17147370501'
  })
  .then(message => {
    console.log(message.sid);
    return message;
  });