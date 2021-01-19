const Discord = require("discord.js");
const { client } = require('../index');
const ayarlar = require('../ayarlar.json');

let stats = {
  serverID: "755210448953147493",
  total: "800926022177914912",
  member: "800926050036219965",
  bots: "800926098539937853"
};

client.on("guildMemberAdd", member => {
  if (member.guild.id !== stats.serverID) return;
  client.channels.cache
    .get(stats.total)
    .setName(`Toplam: ${member.guild.memberCount}`);
  client.channels.cache
    .get(stats.member)
    .setName(
      `Üyeler: ${member.guild.members.cache.filter(m => !m.user.bot).size}`
    );
  client.channels.cache
    .get(stats.bots)
    .setName(
      `Botlar: ${member.guild.members.cache.filter(m => m.user.bot).size}`
    );

  //kayıt-öncesi//
  member.send(
    `Otaku Platform Sunucusuna Hoşgeldin! Eğer NSFW içerik görmek istiyorsan bana mesaj olarak "nsfw" yazmalısın!`
  );
  member.roles.add("800899953677434891");
});

module.exports = {
    name: "katılma",
    description: "",
    enabled: true
}