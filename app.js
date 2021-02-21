const express = require("express")
const bodyParser = require("body-parser")
const Parser = require("./routers/Parser")
const port = process.env.PORT || 3000
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// A router for this purpose only. A router can be added for each functionality  
app.use("/parse", Parser)

app.get("/", (req, res) => {
    res.send("Alive")
})

app.listen(port, function () {
    console.log("Listening on port " + port)
})
