const Discord = require("discord.js");
const { client } = require('../index');
const ayarlar = require('../ayarlar.json');

const moment = require("moment");
require("moment-duration-format");
setInterval(() => {
  const calismasure = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  let botdurum = client.channels.cache.find(c => c.id === "800956360602026035"); //Botun sürekli mesaj atacağı kanal.
  const botistatistik = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("= Bot İstatistikleri =")
    .addField(
      `RAM`,
      `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/512mb`
    )
    .addField(`Çalışma Süresi`, `${calismasure}`)
    .addField(`Ping`, `${`${Date.now() - client.createdTimestamp}ms`}`)
    .addField(`discord.js`, `v${Discord.version}`)
    .addField(
      `Bilgi`,
      `${client.guilds.cache.size.toLocaleString()} sunucu ve ${
        client.users.cache.array().length
      } kullanıcıya hizmet veriyor.`
    )
    .setTimestamp()
    .setFooter(
      "Rimuru Tempest",
      "https://cdn.discordapp.com/avatars/759139656780218389/0019afbcad2e649e7a989538e297c389.webp?size=1024"
    );
  botdurum.send(botistatistik);
}, 3600000);

module.exports = {
    name: "istatistik",
    description: "",
    enabled: true
}
