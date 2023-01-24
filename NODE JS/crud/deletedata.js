const fs = require("fs")

const { join } = require("path")

function deleteData(cond) {

    var key = Object.keys(cond).toString()

    let arr = JSON.parse(fs.readFileSync(join(__dirname, "..", "db", "data1.json"), "utf-8"))


    let newArr = arr.filter((item) => {

        // arr.splice(index , 1)
        if (item[key] != cond[key]) return item
    })
    // console.log(newArr)

    fs.writeFile(join(__dirname, "..", "db", "data1.json"), JSON.stringify(newArr), "utf-8", (err) => {
        if (err) console.log("FILE NOT FOUND ")
        else console.log("SUCCESSFULLY DELETED");
    })
}
deleteData({ desig: "tester" })
// deleteData({ name: "d" })

