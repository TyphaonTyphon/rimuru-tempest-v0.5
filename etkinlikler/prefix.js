const Discord = require("discord.js");
const { client } = require('../index');
const db = require("quick.db");
const ayarlar = require('../ayarlar.json');

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = await db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = ayarlar.default_prefix;
  if (message.content.startsWith(prefix)) {
    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/);
    const command = args.shift().toLowerCase();
    if (!client.commands.has(command)) return;
    try {
      client.commands.get(command).run(client, message, args);
    } catch (error) {
      console.error(error);
    }
  }
});

module.exports = {
    name: "prefix",
    description: "",
    enabled: true
}