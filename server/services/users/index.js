const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
const jwt = require('express-jwt');

const app = express();
const usersRoutes = require('./router');


app.use(express.json());
app.use(cors());

// app.use(jwt({ 
//     secret: 'secret_key', 
//     // secret: config.get('auth').jwt_key, 
//     algorithms: ['HS256'] 
//   }).unless({
//     path: [
//       '/api/v1/auth/register',
//       '/api/v1/auth/login'
//     ]
//   }));
  
// app.use((err, req, res, next) => {
//     if (err.name === 'UnauthorizedError') {
//       res.status(401).send({
//         error: true,
//         message: 'You need to log in in order to perform this action'
//       });
//     }
// });

//localhost:8000/users
app.use('/', usersRoutes);

const CONNECTION_URL = 'mongodb+srv://KaterinaH:KaterinaH123@cluster0.yyofs.mongodb.net/bfp?retryWrites=true&w=majority';

const PORT = process.env.PORT || 8002;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((error)=> console.log(error.message))

mongoose.set('useFindAndModify', false);