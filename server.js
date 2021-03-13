const express = require('express')
const cors = require('cors')
const powerOff = require('power-off');

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("./public"))

app.post("/shutdown", (req, res, next) => {

    powerOff(function (err, stderr, stdout) {
        if (!err && !stderr) {
            return console.log(stdout);
        }
        res.send("shutting down...")
    });
})
const PORT = 8888
app.listen(8888, () => { console.log(`Server is running on port ${PORT}`) })