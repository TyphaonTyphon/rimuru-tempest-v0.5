const Discord = require("discord.js");
const osu = require("node-osu");
//PUT YOUR OSU API KEY INSIDE THE QUOTATION MARKS
const api = new osu.Api("10f4f428a2d78505b91a7c9de4272cce4344dc19", {
  // END OF OSU API KEY
  notFoundAsError: true,
  completeScores: false
});

module.exports = {
  name: "osu",
  description: "Gets info about a user from Osu!",
  usage: "[command | username]",
  async run(bot, message, args) {
    //command

    let username = args[0];

    if (!args[0])
      return message.channel.send(
        "Lütfen geçerli bir kullanıcı adı girin! (osu!)"
      );

    api.getUser({ u: username }).then(user => {
      const osu = new Discord.MessageEmbed()
        .setTitle("Kullanıcı Osu Arama Sistemi")
        .setThumbnail(`http://s.ppy.sh/a/${user.id}}`)
        .setColor("#D0436A")
        .addField("Takma ad", user.name)
        .addField("PP", Math.round(user.pp.raw))
        .addField("Sıra", user.pp.rank)
        .addField("Seviye", Math.round(user.level))
        .addField("Ülke", user.country)
        .addField("Ülke Sıra", user.pp.countryRank)
        .addField("Oyun Sayımı", user.counts.plays)
        .addField("Doğruluk", `${user.accuracyFormatted}`)
        .setFooter("İsteyen " + message.author.tag, message.author.avatarURL);
      message.channel.send(osu);
    });
  }
};
