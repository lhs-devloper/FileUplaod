const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT ? process.env.PORT : 8000;

const makeFolder = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}


const severListening = () => {
    console.log("server_Listening...")
    console.log(`http://localhost:${port}`)
}

makeFolder("../../uploads");

app.listen(port, severListening);
