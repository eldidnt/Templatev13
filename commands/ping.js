const { Client, Message } = require("discord.js");
/**
 * @param {Client} client
 * @param {Message} message
 */
module.exports.run = (client, message, args) => {
    let p1 = new Date().getTime()

    message.reply('Pong!').then(msg =>{
        let p2 = message.createdTimestamp
        msg.edit(p2-p1+" ms  \n`API`  "+Math.round(client.ws.ping)+" ms")
    })
}
module.exports.conf = {
    "name": "ping",
    "description": "Display bot's ping.",
    "aliases": [],
    "usage": ["ping"]
}
