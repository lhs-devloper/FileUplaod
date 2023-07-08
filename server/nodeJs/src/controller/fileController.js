const fs = require("fs");

exports.responseFileBlob = (req, res) => {
    const { name } = req.query;
    fs.readFile(`/upload/${name}`, (err, data)=>{
        console.log(data);
    })
}

exports.saveFile = (req, res)=>{
    
}