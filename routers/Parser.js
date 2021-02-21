const express = require("express")
const router = express.Router()
const { parse } = require("../handlers/ParseFunctions")

router.post("/", async (req, res) => {
    let url = req.body.url
    response = await parse(url)
    res.status(200)
})

module.exports = router
