const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
const jwt = require('express-jwt');
const upload = require('express-fileupload');

const app = express();
const storageRoutes = require('./router');

app.use(express.json());
app.use(cors());

// app.use(jwt({ secret: 'secret_key', algorithms: ['HS256'] }));

// app.use((err, req, res, next) => {
//   if (err.name === 'UnauthorizedError') {
//     res.status(401).send({
//       error: true,
//       message: 'You need to log in in order to perform this action'
//     });
//   }
// });

app.use(upload());

//localhost:8004/storage
app.use('/storage', storageRoutes);

const CONNECTION_URL = 'mongodb+srv://KaterinaH:KaterinaH123@cluster0.yyofs.mongodb.net/bfp?retryWrites=true&w=majority';

const PORT = process.env.PORT || 8004;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((error)=> console.log(error.message))

mongoose.set('useFindAndModify', false);