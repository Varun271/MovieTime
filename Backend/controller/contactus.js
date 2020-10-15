//Author: Varun Chauhan
const userContact = require('../model/contactus');
const nodemailer = require('nodemailer');

const contactus = async(req,res) => {
    try{
        console.log("inside contactus", req.session.email)
    const contactUs = new userContact({
        name: req.body.name,
        email: req.body.email,
        comments: req.body.comments
    });

    const output = `
    <p>Your message has been sent</p>
    <h3>Message Details</h3>
    <h3>Message</h3>
    <p>${contactUs.comments}</p>
    `;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
            auth: {
                user: 'noreplymovietime@gmail.com',
                pass: 'Group26@123'
            },
 
      });
    
      // setup email data with unicode symbols
      let mailOptions = {
          from: '"Support/Help" noreplymovietime@gmail.com', // sender address
          to: `${contactUs.email},noreplymovietime@gmail.com`, // list of receivers
          subject: 'Comments', // Subject line
          text: 'Hello world?', // plain text body
          html: output// html body
      };
    
      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);   
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
          res.render('contact', {msg:'Confirmation Mail'});
      });

      res.json({message : true});
    }
    catch(err){
        res.json({message : false});
    }
    
}

module.exports.contactus = contactus;