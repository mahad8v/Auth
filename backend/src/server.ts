import dotenv from "dotenv";
import http from "http";
import "colors";
import app from "./app/app";
import { dbConnect } from "./config/dbConnect";
dotenv.config();
dbConnect();

const PORT = process.env.PORT || 5008;
// Create and start the server
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`***** server running on port ${PORT} *****`.yellow);
});
