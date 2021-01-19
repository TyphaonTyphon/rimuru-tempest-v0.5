const Discord = require("discord.js");
const malScraper = require("mal-scraper");

module.exports = {
  name: "animebilgi",
  description: "Get info about an anime",
  usage: "[command | Anime]",
  run: async (client, message, args) => {
    //command
    const search = `${args}`;
    if (!search)
      return message.reply(
        "Please add a search query if invalid command will not work."
      );

    malScraper.getInfoFromName(search).then(data => {
      const malEmbed = new Discord.MessageEmbed()
        .setAuthor(
          `My Anime List search result for ${args}`.split(",").join(" ")
        )
        .setThumbnail(data.picture)
        .setColor("#ffc1cc") //I personally use bubblegum pink!
        .addField("İngilizce Başlık", data.englishTitle, true)
        .addField("Japonca Başlık", data.japaneseTitle, true)
        .addField("Tip", data.type, true)
        .addField("Bölümler", data.episodes, true)
        .addField("Değerlendirme", data.rating, true)
        .addField("Yayınlandı", data.aired, true)
        .addField("Puan", data.score, true)
        .addField("Puan İstatistikleri", data.scoreStats, true)
        .addField("Bağlantı", data.url);

      message.channel.send(malEmbed);
    });
  }
};
