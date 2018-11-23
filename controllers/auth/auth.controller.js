const AuthenticateSignupPartnersSchema = require('../../models/auth/auth.model');
const AuthenticateSignupCustomersSchema = require('../../models/auth/auth.model');
const AuthenticateSigninSchema = require('../../models/auth/auth.model');

const jwt = require('jsonwebtoken');

exports.auth_signup_partners = (req, res) => {
  const userdata = new AuthenticateSignupPartnersSchema(
    {
      password: req.body.password,
      name: req.body.name,
      lastname: req.body.lastname,
      confirmpassword: req.body.confirmpassword,
      email: req.body.email,
      linkyoutube: req.body.linkyoutube,
      linkspotify: req.body.linkspotify,
      travel: req.body.travel,
      type: req.body.type,
      musicalstyle: req.body.musicalstyle,
      city: req.body.city,
      telefone: req.body.telefone,
      image: req.body.image,
      typeuser: req.body.typeuser
    }
  );

  AuthenticateSignupPartnersSchema.find({email : userdata.email, password: userdata.password}, (err, user) => {
    
    if (user.length){
      return res.status(409).send({ 
        success: false, 
        message: 'User exists already' 
      });
    } else if (userdata.password === userdata.confirmpassword) {
      userdata.save((err) => {
        res.json({
          status: 200,
          success: true,
          message: 'User: ' + userdata.name + ' registered succesfully',
        });
      });
    } else {
      res.status(500).send({
        success: false,
        message: err
      });
    }

  });
  
};

exports.auth_signup_customers = (req, res) => {
  const userdata = new AuthenticateSignupCustomersSchema(
    {
      password: req.body.password,
      name: req.body.name,
      confirmpassword: req.body.confirmpassword,
      email: req.body.email,
      postalcode: req.body.postalcode,
      city: req.body.city,
      telefone: req.body.telefone,
      lastname: req.body.lastname,
      typeuser: req.body.typeuser,
    }
  );

  AuthenticateSignupCustomersSchema.find({email : userdata.email, password: userdata.password}, (err, user) => {
    
    if (user.length){
      return res.status(409).send({ 
        success: false, 
        message: 'User exists already' 
      });
    } else if (userdata.password === userdata.confirmpassword) {
      userdata.save((err) => {
        res.json({
          status: 200,
          success: true,
          message: 'User: ' + userdata.name + ' registered succesfully',
        });
      });
    } else {
      res.status(500).send({
        success: false,
        message: err
      });
    }

  });
  
};

exports.auth_signin = (req, res) => {
  const userdata = new AuthenticateSigninSchema(
    {
      email: req.body.email,
      password: req.body.password
    }
  );

  AuthenticateSigninSchema.findOne({email : userdata.email, password: userdata.password}, (err, user) => {
  
    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      if (userdata.password !== req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        const token = jwt.sign({ username: userdata.email }, 'tocai2018', {
          expiresIn: 60 * 60 
        });

        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      } 

    }

  });

}

exports.auth_change_password_partners = (req, res) => {
  
  changePasswordPartners(req,res);

};

exports.auth_change_password_customers = (req, res) => {
  
  changePasswordCustomers(req,res);

};


function changePasswordPartners(req, res) {
  
  const query  = AuthenticateSignupPartnersSchema.where({ email: req.params.email }); 

  query.find((err, user) => {
    if (err) return res.status(500).send(err)

    AuthenticateSignupPartnersSchema.findByIdAndUpdate(user[0]._id, {$set: req.body}, {new: true}, (err, user) => {
      if (err) return res.send(err);
      return res.json({
        success: true,
        message: 'Change password request udpated.',
      });
    });

  });

};

function changePasswordCustomers(req, res) {
  
  const query  = AuthenticateSignupCustomersSchema.where({ email: req.params.email }); 

  query.find((err, user) => {
    if (err) return res.status(500).send(err)

    AuthenticateSignupCustomersSchema.findByIdAndUpdate(user[0]._id, {$set: req.body}, {new: true}, (err, user) => {
      if (err) return res.send(err);
      return res.json({
        success: true,
        message: 'Change password request udpated.',
      });
    });

  });

};
