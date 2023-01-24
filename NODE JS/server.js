const http = require("http");
const { readFileSync } = require("fs")
const { join } = require("path")

const app = http.createServer((req, res) => {
    console.log(req.url, req.method);
    const { url, method } = req
    if (url === "/" && method == "GET") {
        let data = readFileSync(join(__dirname, "html", "index.html"), "utf-8")
        res.end(data)
    }
    if (url === "/home" && method == "GET") {
        let data = readFileSync(join(__dirname, "html", "home.html"), "utf-8")
        res.end(data)
    }
    if (url === "/contact" && method == "GET") {
        let data = readFileSync(join(__dirname, "html", "contact.html"), "utf-8")
        res.end(data)
    }
    if (url === "/about" && method == "GET") {
        let data = readFileSync(join(__dirname, "html", "about.html"), "utf-8")
        res.write(data)
        res.end()
    }
});
const PORT = 4000;
// app.on("request", (req, res) => {
//     console.log("HELLO WORLD")
// });

app.listen(PORT, () => {
    console.log(`SERVER STARTED WITH PORT : ${PORT}`);

})