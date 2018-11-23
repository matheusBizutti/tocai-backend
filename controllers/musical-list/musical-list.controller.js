const AuthenticateSignupPartnersSchema = require('../../models/auth/auth.model');
const nodemailer = require('nodemailer');

exports.musical_list_all = (req, res) => {

  getMusicalListByType(req, res);

};

exports.musical_list_email = (req, res) => {

  getMusicalListByEmail(req, res);

};

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tocaiproject@gmail.com',
    pass: 'tocai2018'
  }
 });


exports.musical_list_sendmail = (req, res) => {

  var mailOptions = {
    from: req.body.from,
    to: req.body.to,
    subject: req.body.subject,
    html: `<p>` + `${req.body.html}` + `</p>`
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if(err) {
      res.status(500).send({ 
        success: false, 
        message: err
      });
    }
    else {
      res.status(200).send({ 
        success: true, 
        message: info
      })
    }
  });

};

function getMusicalListByType(req, res) {
  
  const query  = AuthenticateSignupPartnersSchema.where({ typeuser: req.params.typeuser }); 

  query.find((err, list) => {
    if (err) return res.send(err)
    res.json(list);
  });
};

function getMusicalListByEmail(req, res) {
  
  const query  = AuthenticateSignupPartnersSchema.where({ email: req.params.email }); 

  query.find((err, list) => {
    if (err) return res.send(err)
    res.json(list);
  });
};