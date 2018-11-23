const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();

// mongoose definitions
let dev_db_url = 'mongodb://tocai:tocai2018@ds115154.mlab.com:15154/tocai'; 
let mongoDB = process.env.MONGODB_URI || dev_db_url;

// - mongoose connect
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

let port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

const apiRoutes = express.Router(); 

apiRoutes.use((req, res, next) => {

  const token = req.headers['authorization'] ? req.headers['authorization'].replace(/^Bearer\s/, '') : '';

  if (token) {

    jwt.verify(token, 'tocai2018', (err, decoded) => {
      if (err) {
        return res.status(401).send({ 
          success: false, 
          message: 'Failed to authenticate token.' 
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });

  } else {

    return res.status(403).send({ 
      success: false, 
      message: 'No token provided.' 
    });

  }

});

app.use('/api', apiRoutes);

const auth = require('./routes/auth/auth.route');
const musicalList = require('./routes/musical-list/musical-list.route');
const profile = require('./routes/profile/profile.route');

app.use('/api/profile', profile);
app.use('/api/musical-list', musicalList);
app.use('/auth', auth);

app.listen(port, () => {
  console.log('Server is up and running on port number ' + port);
});
