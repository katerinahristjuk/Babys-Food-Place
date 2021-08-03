const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
const jwt = require('express-jwt');
const config = require ('../../config/index');

const api = express();
const usersRoutes = require('./router');

api.use(express.json());
api.use(cors());

app.use(jwt({ 
    secret: config.get('auth').jwt_key, 
    algorithms: ['HS256'] 
  }).unless({
    path: [
      '/api/v1/register',
      '/api/v1/login',
    ]
  }));
  
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send({
        error: true,
        message: 'You need to log in in order to perform this action'
      });
    }
});

api.use('/bfp/api/v1', usersRoutes);

const CONNECTION_URL = `mongodb+srv://${config.get('db').username}:${config.get('db').password}@cluster0.yyofs.mongodb.net/bfp?retryWrites=true&w=majority`;

const PORT = process.env.PORT || config.get('ports').users;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => api.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((error)=> console.log(error.message))

mongoose.set('useFindAndModify', false);