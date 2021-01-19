const Discord = require("discord.js");
const { client } = require('../index');
const ayarlar = require('../ayarlar.json');

client.on("message", message => {
  if (message.channel.type === "dm") {
    if (message.author.bot) return;
    const dmlog = new Discord.MessageEmbed()
      .setTitle(`${client.user.username}'a Özelden Mesaj Gönderildi!`)
      .setColor("RANDOM")
      .addField("Mesajı Gönderen", ` \`\`\` ${message.author.tag} \`\`\` `)
      .addField("Mesajı Gönderenin ID", ` \`\`\`${message.author.id}\`\`\` `)
      .addField(`Gönderilen Mesaj`, message.content)
      .setThumbnail(message.author.avatarURL);
    client.channels.cache.get(ayarlar.dmlog).send(dmlog);
  }
});

module.exports = {
    name: "dmlog",
    description: "",
    enabled: true
}