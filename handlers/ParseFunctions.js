const axios = require("axios")
const $ = require("cheerio")
const { get, set } = require("../storage/Redis")

const parse = async (link, depth = 3) => {
    try {
        let isExist = await get(link)
        // If the url exist - it means that all of his successors were already scanned (in the case the depth wasn't limited)
        if (isExist) {
            return
        }
        res = await axios.get(link)
        let html = res.data
        let html_links = $("a", res.data)

        //Take all links in the page that are inside a tag and starts with http
        let links = html_links
            .map((index, htmlLink) => {
                return htmlLink.attribs.href
            })
            .filter((index, collectedLink) => {
                return collectedLink.startsWith("http")
            })

        //Save the root link in the db
        await set(link, html)

        // Continue search only if we are not in the leaf level
        if (depth < 1) {
            return
        }

        for (const collected_link of links) {
            parse(collected_link, depth - 1)
        }
    } catch (err) {
        console.log(err.message)
    }
}

module.exports.parse = parse
