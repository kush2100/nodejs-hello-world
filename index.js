const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello Jenkins World!'))

var server = app.listen(13000, () => {
    console.log("Listening on port " + server.address().port + "...");
});
