const AuthenticateSignupPartnersSchema = require('../../models/auth/auth.model');

exports.musical_list_all = (req, res) => {

  getMusicalListByType(req, res);

};

function getMusicalListByType(req, res) {
  
  const query  = AuthenticateSignupPartnersSchema.where({ typeuser: req.params.typeuser }); 

  query.find((err, list) => {
    if (err) return res.send(err)
    res.json(list);
  });
};