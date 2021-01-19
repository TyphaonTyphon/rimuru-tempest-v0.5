const client = require("nekos.life");
const Discord = require("discord.js");
const neko = new client();

module.exports = {
  name: "sarıl",
  async run(client, message, args) {
    //command

    const user = message.mentions.users.first();
    if (!user) return message.reply("Sarılacak birinden bahset");

    async function work() {
      let owo = await neko.sfw.hug();

      const hugembed = new Discord.MessageEmbed()
        .setTitle(user.username + " Sarıldın! ")
        .setDescription(
           message.author.toString() + " ve " + user.toString() + " sarıldılar!"
        )
        .setImage(owo.url)
        .setColor(`#000000`)
        .setURL(owo.url);
      message.channel.send(hugembed);
    }

    work();
  }
};
