
const Discord = require('discord.js'); //versión 12
const intents = new Discord.Intents([Discord.Intents.NON_PRIVILEGED]);
const client = new Discord.Client({ ws: { intents } });
client.commands = new Discord.Collection();
client.config = require('./config.json')
const fs = require('fs')


const commandFiles = fs
  .readdirSync("./commands/")
  .filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

fs.readdir('./events/', (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
    if (!file.endsWith('.js')) return;
    const evt = require(`./events/${file}`);
    let evtName = file.split('.')[0];
    client.on(evtName, evt.bind(null, client));
  });
});

client.login(client.config.token);