import twilio from 'twilio';
import Twilio  from 'twilio';

const accountSid = 'ACc0ea52d8442b4163049dc47590b3e119';
const authToken = 'a219f01f01cd23c0ce9c1cb225f639a0';

const client = new Twilio(accountSid, authToken);

client.messages
  .create({
    body: 'Hello from twilio-node',
    to: '+917018085058', // Text your number
    from: '+13202702058', // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));