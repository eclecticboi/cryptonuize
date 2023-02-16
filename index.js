require("dotenv").config();
const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
  ActionRowBuilder,
  StringSelectMenuBuilder
} = require("discord.js");
const { TOKEN } = require("./settings/config");

const crypto = require("text-cryptography");

const express = require("express")
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Yo boi!!'))

app.listen(port, () => {
  console.log("App listening on port 3000!")
})

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
  ],
});

// global variables
client.scommands = new Collection();
client.mcommands = new Collection();

module.exports = client;

// handlers
["event_handler","slash_handler","cmd_handler"].forEach((file) => {
  require(`./handlers/${file}`)(client);
});

// login bot
client.login('WHAT YA LOOKING AT');
