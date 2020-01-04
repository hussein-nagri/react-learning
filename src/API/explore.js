const Twilio = require("twilio");

const client = new Twilio("ACa1f69ad0fd23e71b84c4946453a14209",
  "3ae12b1694d6c480c074bebacbaab039");

client.messages
  .list()
  .then((messages) =>
    console.log(`The most recent message is ${messages[0].body}`)
  )
  .catch(err => console.error(err));

console.log("Gathering your message");