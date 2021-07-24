const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');

const app = express();
const recipeRoutes = require('./router');


app.use(express.json());
app.use(cors());

//localhost:8001/recipes
app.use('/recipes', recipeRoutes);

const CONNECTION_URL = 'mongodb+srv://KaterinaH:KaterinaH123@cluster0.yyofs.mongodb.net/bfp?retryWrites=true&w=majority';

const PORT = process.env.PORT || 8001;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((error)=> console.log(error.message))

mongoose.set('useFindAndModify', false);