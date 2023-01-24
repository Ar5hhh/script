const { Console } = require('console');
const fs = require('fs');

// sync
// let data = fs.readFileSync("./html/index.html", "utf-8")

// console.log(data)

// async
// fs.readFile('./html/index.html', (err, data) => {
//     if (err) {
//         console.log("FILE NOT FOUND");
//     }
//     else {
//         console.log(data.toString());
//     }
// });

//SYNC

// console.log("START")
// try {
//     fs.writeFileSync("./html/index.html", "<div></h1> HELLLLLLLO WOOOOORLDDDD </h1></div>", "utf-8")
// } catch (err) {
//     console.log("FILE NOT FOUND");
// }
// console.log("END");
//ASYNC
// fs.writeFile("./html/index.html", "<h1> HELLO WORLD </h1>", (err, data) => {
//     if (err) console.log("file not found")
//     else console.log("SUCCESS")
// })

//TO CREATE FOLDER

//sync
// console.log("start")
// // fs.mkdirSync("./css") // to create folder
// fs.rmdirSync("./css") // to delete folder
// console.log("end")


// async
// console.log("start")
// fs.mkdir("./css", (err) => {
//     if (err) console.log("NOT ABLE TO CREATE FOLDER")
//     else console.log("folder created")
// })
// fs.rmdir("./css", (err) => {
//     if (err) console.log("NOT ABLE TO DELETE FOLDER")
//     else console.log("folder DELETED")
// })
// console.log("end")


//copy file // duplicate
// fs.copyFileSync("./html/index.html", "./css/index.html")

// fs.copyFile("./html/index.html", "./css/index.html", (err) => {
//     if (err) console.log("file or folder ")
//     else console.log("copied file")
// })

// fs.linkSync("./html/index.html", "./css/index.html")



