const { Client, Message } = require("discord.js");
/**
 * @param {Client} client
 * @param {Message} message
 */
module.exports.run = (client, message, args) => {
    let d1 = new Date().getTime()

    message.reply('Pong!').then(msg =>{
        let d2 = message.createdTimestamp
        msg.edit(d2-d1+" ms  \n`API`  "+Math.round(client.ws.ping)+" ms")
    })
}
module.exports.conf = {
    "name": "ping",
    "description": "Display bot's ping.",
    "aliases": [],
    "usage": ["ping"]
}
