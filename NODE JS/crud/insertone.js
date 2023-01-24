const fs = require("fs")

// fs.writeFile("./data.json", '[ { "name" : "Arsh"} ]', (err, data) => {
//     if (err) console.log("file not found")
//     else console.log("SUCCESS")
// })



// //sync
// function insertOneEmp(obj) {

//     try {
//         let data = fs.readFileSync("./data1.json")
//         // console.log(data.toString())
//         arr = JSON.parse(data.toString())

//         arr.push(obj)
//         // arr[arr.length] = obj
//         // arr = [...arr,obj]
//         // console.log(arr)
//         newArr = JSON.stringify(arr)
//         fs.writeFile("./data1.json", newArr, (err) => {
//             if (err) console.log("file not found")
//             else console.log("SUCCESS")

//         }
//         )
//     } catch {
//         fs.writeFileSync("./data1.json", JSON.stringify([obj]))
//     }
//     console.log("INSERTED");

// }
// insertOneEmp({ name1: "tejas" })


//Async
function insertOneEmp(obj) {

    fs.readFile("../db/data.json", "utf-8", (err, data) => {
        if (err) {
            fs.writeFile("../db/data.json", JSON.stringify([obj]), "utf-8", (err) => {
                if (err) {
                    console.log("FOLDER NOT FOUND");
                }
                else {
                    console.log("INSERTED")
                }
            })
        }
        else {
            let allEmp = JSON.parse(data)
            allEmp.push(obj)

            fs.writeFile("../db/data.json", JSON.stringify(allEmp), "utf-8", (err) => {
                if (err) {
                    fs.writeFile(("../db/data.json", JSON.stringify([obj])))
                }
            })
        }
    })

}
insertOneEmp({ name1: "tejas" })








// fs.writeFile("./data.json", JSON.stringify([...JSON.parse(fs.readFileSync("./data.json").toString()), { name1: "tejas" }]), (err) => {
//     if (err) console.log("file not found")
//     else console.log("SUCCESS")

// }
// )