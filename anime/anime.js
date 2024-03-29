const Discord = require("discord.js");
var aq = require("animequote");
const Kitsu = require("kitsu.js");
const kitsu = new Kitsu();

module.exports = {
  name: "anime",
  description: "Anime bilgisi",

  async run(client, message, args) {
    var search = args[1];

    if (!search) {
      kitsu.searchAnime(aq().quoteanime).then(result => {
        var anime = result[0];

        var embed = new Discord.MessageEmbed()
          .setColor("#FF9D6E")
          .setAuthor(
            `${anime.titles.english} | ${anime.showType}`,
            anime.posterImage.original
          )
          .setDescription(anime.synopsis.replace(/<[^>]*>/g, "").split("\n")[0])
          .addField(
            "❯\u2000Bilgi",
            `•\u2000\**Japonca ismi:** ${
              anime.titles.romaji
            }\n\•\u2000\**Yaş oylaması:** ${
              anime.ageRating
            }\n\•\u2000\**NSFW mi?:** ${anime.nsfw ? "Evet" : "Hayır"}`,
            true
          )
          .addField(
            "❯\u2000İstatistik",
            `•\u2000\**Ortalama puanı:** ${anime.averageRating}\n\•\u2000\**Derecelendirme Sıralaması:** ${anime.ratingRank}\n\•\u2000\**Popülerlik Sıralaması:** ${anime.popularityRank}`,
            true
          )
          .addField(
            "❯\u2000Durum",
            `•\u2000\**Bölüm sayı:** ${
              anime.episodeCount ? anime.episodeCount : "N/A"
            }\n\•\u2000\**Başlama tarihi:** ${
              anime.startDate
            }\n\•\u2000\**Bitme tarihi:** ${
              anime.endDate ? anime.endDate : "Hala devam ediyor"
            }`,
            true
          )
          .setImage(anime.posterImage.original);
        return message.channel.send(embed);
      });
    } else {
      var search = args[1];

      kitsu
        .searchAnime(search)
        .then(result => {
          if (result.length === 0) {
            return message.channel.send(`**${search}** için sonuç bulunamadı!`);
          }

          var anime = result[0];

          var embed = new Discord.RichEmbed()
            .setColor("#FF9D6E")
            .setAuthor(
              `${anime.titles.english ? anime.titles.english : search} | ${
                anime.showType
              }`,
              anime.posterImage.original
            )
            .setDescription(
              anime.synopsis.replace(/<[^>]*>/g, "").split("\n")[0]
            )
            .addField(
              "❯\u2000Bilgi",
              `•\u2000\**Japonca ismi:** ${
                anime.titles.romaji
              }\n\•\u2000\**Yaş oylaması:** ${
                anime.ageRating
              }\n\•\u2000\**NSFW mi?:** ${anime.nsfw ? "Evet" : "Hayır"}`,
              true
            )
            .addField(
              "❯\u2000İstatistik",
              `•\u2000\**Ortalama puanı:** ${anime.averageRating}\n\•\u2000\**Derecelendirme Sıralaması:** ${anime.ratingRank}\n\•\u2000\**Popülerlik Sıralaması:** ${anime.popularityRank}`,
              true
            )
            .addField(
              "❯\u2000Status",
              `•\u2000\**Bölüm sayı:** ${
                anime.episodeCount ? anime.episodeCount : "N/A"
              }\n\•\u2000\**Başlama tarihi:** ${
                anime.startDate
              }\n\•\u2000\**Bitme tarihi:** ${
                anime.endDate ? anime.endDate : "Hala devam ediyor"
              }`,
              true
            )
            .setImage(anime.posterImage.original);
          return message.channel.send(embed);
        })
        .catch(err => {
          console.log(err);
          return message.channel.send(`**${search}** için sonuç bulunamadı!`);
        });
    }
  }
};
