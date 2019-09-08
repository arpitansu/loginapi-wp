
const accountSid = 'AC9793e1395fc410f66946e27d9e442a3a'; // please do not misuse it,  it's just for interview
const authToken = '1fa38de1a247bc48a00207098107e19b'; // please do not misuse it, it's just for interview
const client = require('twilio')(accountSid, authToken);

export default class Sms{


    send(number = "7705874751", text = "Hello from twillio"){
        // client.messages
        // .create({body: text, from: '+12055499684', to: `+91${number}`})
        // .then(message => console.log(message));
    }
}