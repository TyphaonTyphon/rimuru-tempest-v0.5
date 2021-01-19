const pagination = require("discord.js-pagination");
const Discord = require("discord.js");

module.exports = {
  name: "nsfwyardım",
  description: "yardım komutu",

  async run(client, message, args) {
    //Sort your commands into categories, and make seperate embeds for each category

    const moderation = new Discord.MessageEmbed()
      .setTitle("Hentai Komutları")
      .addField("ranal", "biliyosun söyletme")
      .addField("rashi", "ayak O_O")
      .addField("rashigif", "üsttekinin giflisi")
      .addField("reroyuri", "yuri 2 kızlı ilişki demek")
      .addField("rhentai", "bulunma sebebin")
      .addField("rhentaigif", "bunu daha çok sevebilirsin")
      .addField("rneko", "kedy")
      .addField("rnekogif", "kedy ama video")
      .addField("rnekoapi", "bir classic apinin diplerinden resim ve gifler")
      .addField("rnhentai", "doujinshi okuyabilirsin üstelik vpnsiz")
      .addField("roppai", "meme")
      .addField("rr34", "internet kuralı 34 bilmiyorsan araştır")
      .addField("rtits", "göğüs")
      .addField("ryuri", "erotik değil direkt ***")
      .setTimestamp();

    const fun = new Discord.MessageEmbed()
      .setTitle("3D Dünyası")
      .addField("rboobs", "memeler")
      .addField("rdanboobs", "memeler ama farklı tür kaynak")
      .setTimestamp();

    const utility = new Discord.MessageEmbed()
      .setTitle("NSFW Eylemler")
      .addField("rşaplak", "milleti şaplakla ama nsfw kanalda")
      .setTimestamp();

    const pages = [moderation, fun, utility];

    const emojiList = ["⏪", "⏩"];

    const timeout = "120000";

    pagination(message, pages, emojiList, timeout);
  }
};
