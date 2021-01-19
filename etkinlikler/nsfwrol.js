const Discord = require("discord.js");
const { client } = require('../index');
const ayarlar = require('../ayarlar.json');

client.on("message", message => {
  const guild = client.guilds.cache.get("755210448953147493");
  var dmUser = message.author.id;
  var isMember = guild.members.cache.get(dmUser);
  if (!message.channel.type === "dm") {
    return;
  } else if (message.content === "nsfw" && message.channel.type === "dm") {
    message.reply(
      "Sunucu kurallarını okuduğunu ve kabul ettiğini teyit etmem ve bir sonraki aşama için evet demelisin."
    );
  }
  if (!message.channel.type === "dm") {
    return;
  } else if (message.content === "evet" && message.channel.type === "dm") {
    message.reply("Artık NSFW kanallarını görüntüleyebilirsin!");
    if (isMember) {
      isMember.roles.add("800909435631435786");
    }
  }
  if (!message.channel.type === "dm") {
    return;
  } else if (message.content === "hayır" && message.channel.type === "dm") {
    message.reply(
      "Eğer başka bir gün istersen yine aynı mesajı atabilirsin. :D"
    );
  }
});

module.exports = {
    name: "nsfwrol",
    description: "",
    enabled: true
}
