const settings = require('./settings')
const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.commands = new Collection();
client.aliases = new Collection();
client.slash = new Collection();

client.on('ready', () => {
  console.log(`[${client.user.tag}] Logged in`);
  client.user.setActivity({
    type: "PLAYING",
    name: "",
  })
  require('./utils/handler')(client)
  require('./utils/event')(client)
});

client.login(settings.token);