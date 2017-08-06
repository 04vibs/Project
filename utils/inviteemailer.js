const nodemailer = require('nodemailer');

const sendmail = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'nagarroevman@gmail.com',
        pass: 'bootcamp'
    }
});

function createInvite(inviteeEmail,token, message) {
    return {
        from: 'a@cb.lk',
        to: (typeof inviteeEmail == 'string') ? inviteeEmail : inviteeEmail.join(','),
        subject: 'You are invited to an event created by bootcamp prashantpuri open the link',
      //  html: "<h3> Please come there's free lunch </h3>"

    //  html:"<a href='http://localhost:3456/rsvp/'"+token+"?rsvp=true>yes</a>"

    html:"<a href =http://192.168.43.180:3456/rsvp/"+token+"?rsvp=true>yes</a>"
  }
}

function sendInvite(inviteeEmail, tokens, done) {//tokens for rsvp
   for(var i = 0; i < inviteeEmail.length; i++) {
       sendmail.sendMail(createInvite(inviteeEmail[i], tokens[i]), (err, info) => {
         if(err)  throw err;
         if(done)  done(info);
       });
   }  // End of loop.

}  // End of send.
module.exports = {
    sendInvite
};
