const app = require("./app/app");
const dotenv = require("dotenv").config()
const http = require("http")

const PORT = process.env.PORT || 5000;
const server = http.createServer(app)
server.listen(PORT, console.log(`********* server running on ${PORT} **********`))