const pagination = require("discord.js-pagination");
const Discord = require("discord.js");

module.exports = {
  name: "yardım",
  description: "yardım komutu",

  async run(client, message, args) {
    //Sort your commands into categories, and make seperate embeds for each category

    const moderation = new Discord.MessageEmbed()
      .setTitle("Anime Komutları")
      .addField("ranime", "adını yazarsan animeyi bulur yazmazsan rastgele anime verir")
      .addField("ranimebilgi", "my anime listten anime bilgisi gelir")
      .addField("rosu", "osu hesabının verisini herkese göster hava at")
      .setTimestamp();

    const fun = new Discord.MessageEmbed()
      .setTitle("Eğlence Komutları")
      .addField("rmeme", "redditteki seçili subredditlerden meme getirir")
      .addField("rchangemymind", "changemymind memesini template olarak kullanabilirsin")
      .addField("rtrigger", "bir şeye tetiklenirsen kullan")
      .addField("rbaka", "aptala aptal de")
      .addField("rsarıl", "daimi dostlarına sarıl")
      .setTimestamp();

    const utility = new Discord.MessageEmbed()
      .setTitle("Faydalı Komutlar")
      .addField("rascii", "yazdığın yazıyı ascii olarak tekrar yazar")
      .addField("ravatar", "birinin profil resmini çalabilirsin")
      .addField("rcovid", "söylediğin bölgedeki korona verisini gönderir")
      .addField("rhava", "söylediğin bölgenin hava durumunu söyler")
      .addField("rhesap", "2 ve 2'yi toplamana veya çarpmana yarar")
      .addField("rrenk", "seçtiğin rengi gönderir")
      .setTimestamp();

    const pages = [moderation, fun, utility];

    const emojiList = ["⏪", "⏩"];

    const timeout = "120000";

    pagination(message, pages, emojiList, timeout);
  }
};
