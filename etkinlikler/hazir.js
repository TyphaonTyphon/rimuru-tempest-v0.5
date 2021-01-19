const { client } = require('../index');
const ayarlar = require('../ayarlar.json');

var oynuyor = [
  "Rimuru Tempest Bot",
  "Düzenleniyor"
]

client.on("error", console.error);

client.on("ready", async () => {
    const dat = new Date();
    const date = dat.getDate() + "/" + dat.getMonth() + "/" + dat.getFullYear() + " " + dat.getHours() + "." + dat.getMinutes()
    console.log('Rimuru Tempest Göreve Hazır');
    client.user.setStatus(`online`)
    client.channels.cache.get(ayarlar.yazı).startTyping();
    client.channels.cache.get(ayarlar.sesli).join();
    setInterval(function() {
        var random = Math.floor(Math.random()*(oynuyor.length-0+1)+0);
       client.user.setActivity(oynuyor[random], { type: 'PLAYING' });
        }, 2 * 3000)});

module.exports = {
    name: "hazır",
    description: "",
    enabled: true
}