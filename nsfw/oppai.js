const client = require("nekos.life");
const Discord = require("discord.js");
const neko = new client();

module.exports = {
  name: "oppai",
  category: "NSFW",
  usage: "[command]",
  run: async (client, message, args) => {
    //command

    //Checks channel for nsfw
    var errMessage = "NSFW KANAL DEĞİL BURASI";
    if (!message.channel.nsfw) {
      message.react("💢");

      return message.reply(errMessage).then(msg => {
        msg.delete({ timeout: 3000 });
      });
    }

    async function work() {
      let owo = await neko.nsfw.boobs();

      const boobs = new Discord.MessageEmbed()
        .setTitle("Oppai")
        .setImage(owo.url)
        .setColor(`#FF0000`)
        .setURL(owo.url);
      message.channel.send(boobs);
    }

    work();
  }
};
