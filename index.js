const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello WELCOME TO JENKINS WORLD !!!!!!!!!!!!!!! THIS IS CI/CD CONFIGURE WITH NODEJS PROJCET IN JENKINS WITH AUTO DEPLOYMENT ON SERVER '))

var server = app.listen(13000, () => {
    console.log("Listening on port " + server.address().port + "...");
});
