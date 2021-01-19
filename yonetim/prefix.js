const db = require("quick.db");

module.exports = {
  name: "prefix",
  description: "Set a server's prefix",

  async run(client, message, args) {
    if (!message.member.hasPermission("MANAGE_SERVER"))
      return message.channel.send("Bu komutu kullanamazsın.");

    if (!args[0]) return message.channel.send("Yeni prefixi yazmadın");

    if (args[1]) return message.channel.send("Prefixte iki boşluk olamaz");

    db.set(`prefix_${message.guild.id}`, args[0]);

    message.channel.send(`Prefix başarıyla **${args[0]}** olarak ayarlandı.`);
  }
};
