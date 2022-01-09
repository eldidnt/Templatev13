const { Client } = require("discord.js");
const fs = require("fs")
/**
 * @param {Client} client
 */

module.exports = async (client) => {
    //message commands
    fs.readdir("commands/", (err, files) => {
        if (err) console.error(err)
        files.forEach(catefile => {
            fs.readdir("commands/", (err, files) => {
                if (err) console.error(err)
                files = files.filter(file => file.endsWith('.js'))
                files.forEach(file => {
                    let prob = require('../commands/' + file)
                    client.commands.set(prob.conf.name, prob)
                    prob.conf.aliases.forEach(alias => {
                        client.aliases.set(alias, prob.conf.name)
                    })

                })
            })
        })

    })
}
