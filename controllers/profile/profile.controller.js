const AuthenticateSignupPartnersSchema = require('../../models/auth/auth.model');
const AuthenticateSignupCustomersSchema = require('../../models/auth/auth.model');


exports.profile_customers_change_personal_data = (req, res) => {
  
  changeCustomersPersonalData(req,res);

};

exports.profile_partners_change_personal_data = (req, res) => {
  
  changePartnersPersonalData(req,res);

};

function changeCustomersPersonalData(req, res) {
  
  const query  = AuthenticateSignupCustomersSchema.where({ email: req.params.email }); 

  query.find((err, user) => {
    if (err) return res.status(500).send(err)

    AuthenticateSignupCustomersSchema.findByIdAndUpdate(user[0]._id, {$set: req.body}, {new: true}, (err, user) => {
      if (err) return res.send(err);
      return res.json({
        success: true,
        message: 'Register udpated with success.',
      });
    });

  });

};

function changePartnersPersonalData(req, res) {
  
  const query  = AuthenticateSignupPartnersSchema.where({ email: req.params.email }); 

  query.find((err, user) => {
    if (err) return res.status(500).send(err)

    AuthenticateSignupPartnersSchema.findByIdAndUpdate(user[0]._id, {$set: req.body}, {new: true}, (err, user) => {
      if (err) return res.send(err);
      return res.json({
        success: true,
        message: 'Register udpated with success.',
      });
    });

  });

};