const express = require('express');
const proxy = require('express-http-proxy');
const config = require ('../../config/index');

const app = express();

// 1 RECIPES:
app.use('/bfp/api/v1/recipes', proxy(
    `http://localhost:8001/bfp/api/v1/recipes`,
    { proxyReqPathResolver: (req) => {
        return `http://localhost:8001/bfp/api/v1/recipes${req.url}`
    }}
));

//2 USERS:
app.use('/bfp/api/v1', proxy(
    `http://localhost:8002/bfp/api/v1`,
    { proxyReqPathResolver: (req) => {
        return `http://localhost:8002/bfp/api/v1${req.url}`
    }}
));

const PORT = process.env.PORT || config.get('ports').proxy;

app.listen(PORT, error => {
    if(error){
        return console.log(`Could not start proxy: ${err} :(`)
    }
    console.log(`Proxy service successfully started :) at: ${PORT}`);
})