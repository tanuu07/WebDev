 const fs = require("fs");
// //fs.writeFile(filename,data(what to add in file),callback(handles errors))
// fs.writeFile("message.txt","Hello from Nodejs",(err) =>{
//     if (err) throw err;
//     console.log("the file has been saved");
// });
fs.readFile("./message.txt", "utf8",(err,data) =>{
    if (err) throw err;
    console.log(data);
}
);