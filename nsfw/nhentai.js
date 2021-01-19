const nhentai = require("nhentai-js");
const Discord = require("discord.js");

module.exports = {
  name: "nhentai",
  async run(client, message, args) {
    var errMessage = "NSFW KANAL DEĞİL BURASI";
    if (!message.channel.nsfw) {
      message.react("💢");
      return message.reply(errMessage).then(msg => {
        msg.delete({ timeout: 3000 });
      });
    }
    if (nhentai.exists(args.join(" "))) {
      // checks if doujin exists

      var page = 0;
      const dojin = await nhentai.getDoujin(args.join(" "));
      console.log(dojin);
      let embed = new Discord.MessageEmbed()
        .setColor("#a972da")
        .setTitle("[ Doujinshi:revolving_hearts:Linki ]")
        .addField("[-Başlığı-]", dojin.title)
        .setURL(dojin.link)
        .setImage(dojin.thumbnails[page]);

      message.channel.send(embed).then(msg2 => {
        msg2.react("⏩").then(() => {
          msg2.react("⏪");
        });

        const collector = msg2.createReactionCollector(
          (r, u) =>
            (r.emoji.name === "⏩" || r.emoji.id === "⏪") &&
            (u.id !== client.user.id && u.id === message.author.id)
        );
        collector.on("collect", (r, u) => {
          switch (r.emoji.name) {
            case "⏩": {
              ++page;
              let embed2 = new Discord.MessageEmbed()
                .setColor("#a972da")
                .setTitle("[ Doujinshi:revolving_hearts:Linki ]")
                .addField("[-Başlığı-]", dojin.title)
                .setURL(dojin.link)
                .setImage(dojin.thumbnails[page]);
              msg2.edit(embed2);
              break;
            }
            case "⏪": {
              page--;
              let embed2 = new Discord.MessageEmbed()
                .setColor("#a972da")
                .setTitle("[ Doujinshi:revolving_hearts:Linki ]")
                .addField("[-Başlığı-]", dojin.title)
                .setURL(dojin.link)
                .setImage(dojin.thumbnails[page]);
              msg2.edit(embed2);
              break;
            }
          }
        });
      });
    }
  }
};
