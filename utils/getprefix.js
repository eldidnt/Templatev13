const { Message } = require("discord.js");
const settings = require('../settings')
/**
 * @param {Message} message
 */
function getPrefix() {
    let prefix = settings.prefix
    return prefix
}
module.exports = {
    getPrefix
}