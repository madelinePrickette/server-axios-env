const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const axios = require('axios'); // we added this to make axios requests to GIPHY through the server.
require('dotenv').config(); // make a .env file at top level of repo
// you have to make that file, then put .env in oyur gitignore! VERY IMPORTANT

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.get('/trending', (req, res)=> { // this is the get that is listening for a request from client
    axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}`) 
    // this is a get request to the GIPHY server
    .then( (response) => {
        //console.log(response.data)
        res.send(response.data);
    })
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});