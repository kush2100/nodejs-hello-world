const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello WelCome to Jenkins World! We have created CI/CD in Nodejs with jenkins with auto delivery and deployment '))

var server = app.listen(13000, () => {
    console.log("Listening on port " + server.address().port + "...");
});
