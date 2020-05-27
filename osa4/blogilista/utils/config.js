require('dotenv').config()

let PORT = process.env.PORT
let MONGODB_BLOGLIST_URL = process.env.MONGODB_BLOGLIST_URL

module.exports = {
  MONGODB_BLOGLIST_URL,
  PORT
}