const fs = require("fs")

const { join } = require("path")



let arr = [
    {
        name: "a",
        desig: "developer"

    },
    {
        name: "b",
        desig: "developer"

    },

    {
        name: "c",
        desig: "developer"

    },

    {
        name: "d",
        desig: "developer"

    },

    {
        name: "e",
        desig: "developer"

    },

    {
        name: "f",
        desig: "tester"

    },

    {
        name: "g",
        desig: "tester"

    },

    {
        name: "h",
        desig: "tester"

    },

    {
        name: "i",
        desig: "developer"

    },

    {
        name: "j",
        desig: "developer"

    },

    {
        name: "k",
        desig: "developer"

    },

    {
        name: "l",
        desig: "tester"

    },


]

function insertmany(arr) {

    fs.readFile(join(), "utf-8", (err, data) => {
        if (err) {
            fs.writeFile(join(__dirname, "..", "db", "data.json"), JSON.stringify(arr), "utf-8", (err) => {
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
            allEmp = [...allEmp, ...arr]

            fs.writeFile(join(__dirname, "..", "db", "data.json"), JSON.stringify(allEmp), "utf-8", (err) => {
                if (err) {
                    fs.writeFile((join(__dirname, "..", "db", "data.json"), JSON.stringify(arr)))
                }
            })
        }
    })

}
insertmany(arr)



