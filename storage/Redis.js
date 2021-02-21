const redis = require("redis")
const client = redis.createClient({
    host: process.env.REDIS_HOST || "localhost",
    port: process.env.REDIS_PORT || 6379,
})
const { promisify } = require("util")

client.on("connect", () => {
    console.log("Redis client connected")
})

client.on("error", (error) => {
    console.error(error)
})

const get = promisify(client.get).bind(client)
const set = promisify(client.set).bind(client)

module.exports = {
    get,
    set
}
