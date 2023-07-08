const express = require("express");
const { saveFile, responseFileBlob } = require("../controller/fileController");
const upload = require("../module/fileModule");

const fileRotuer = express.Router();
const maxFileCount = process.env.MAXFILECOUNT ? process.env.MAXFILECOUNT: 10;

// router("uri", "middleware", "callback(controller)")

fileRotuer.get("/", responseFileBlob);

fileRotuer.post("/enroll", upload.array('files', maxFileCount), saveFile);


module.exports = fileRotuer;