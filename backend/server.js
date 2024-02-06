const express = require("express")
const app = express()


const PORT = 8800;

app.listen(PORT, console.log("********* servier start **********"))
app.get('/', async(req, res)=> {

  try {
    res.status(200).json({
      status: "success",
      data: "api for getting all the  list"
    })
  } catch (error) {
  }
})