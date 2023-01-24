const fs = require("fs")

const { join } = require("path")

function ReadData(cond) {

    var key = Object.keys(cond).toString()
    // console.log(key)
    let arr = JSON.parse(fs.readFileSync(join(__dirname, "..", "db", "data.json"), "utf-8"))
    // console.log(arr)

    let newArr = arr.filter((item) => {
        // console.log(cond[key])
        // console.log(item[key]);
        if (item[key] == cond[key]) return item
    })
    console.log(newArr)
}
ReadData({ desig: "tester" })
// ReadData({ name: "d" })
