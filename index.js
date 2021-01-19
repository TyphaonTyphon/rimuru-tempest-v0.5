const Discord = require("discord.js");
const client = new Discord.Client();
const Constants = require("discord.js/src/util/Constants.js");
Constants.DefaultOptions.ws.properties.$browser = `Discord Android`;
const { join } = require("path");
const { readdirSync } = require("fs");
const ayarlar = require("./ayarlar.json");

require("./duzen.js")(client);

client.commands = new Discord.Collection();

//anime komutlar//
const animeFiles = readdirSync(join(__dirname, "anime")).filter(file =>
  file.endsWith(".js")
);

for (const file of animeFiles) {
  const anime = require(join(__dirname, "anime", `${file}`));
  client.commands.set(anime.name, anime);
}
// meme komutlar//
const memeFiles = readdirSync(join(__dirname, "meme")).filter(file =>
  file.endsWith(".js")
);

for (const file of memeFiles) {
  const meme = require(join(__dirname, "meme", `${file}`));
  client.commands.set(meme.name, meme);
}
//nsfw komutlar//
const nsfwFiles = readdirSync(join(__dirname, "nsfw")).filter(file =>
  file.endsWith(".js")
);

for (const file of nsfwFiles) {
  const nsfw = require(join(__dirname, "nsfw", `${file}`));
  client.commands.set(nsfw.name, nsfw);
}
//nsfweylem komutlar//
const nsfweylemFiles = readdirSync(join(__dirname, "nsfweylem")).filter(file =>
  file.endsWith(".js")
);

for (const file of nsfweylemFiles) {
  const nsfweylem = require(join(__dirname, "nsfweylem", `${file}`));
  client.commands.set(nsfweylem.name, nsfweylem);
}
//nsfwr komutlar//
const nsfwrFiles = readdirSync(join(__dirname, "nsfwr")).filter(file =>
  file.endsWith(".js")
);

for (const file of nsfwrFiles) {
  const nsfwr = require(join(__dirname, "nsfwr", `${file}`));
  client.commands.set(nsfwr.name, nsfwr);
}
//sfweylem komutlar//
const sfweylemFiles = readdirSync(join(__dirname, "sfweylem")).filter(file =>
  file.endsWith(".js")
);

for (const file of sfweylemFiles) {
  const sfweylem = require(join(__dirname, "sfweylem", `${file}`));
  client.commands.set(sfweylem.name, sfweylem);
}
//yararlı komutlar//
const yararlıFiles = readdirSync(join(__dirname, "yararlı")).filter(file =>
  file.endsWith(".js")
);

for (const file of yararlıFiles) {
  const yararlı = require(join(__dirname, "yararlı", `${file}`));
  client.commands.set(yararlı.name, yararlı);
}
//yardım komutlar//
const yardımFiles = readdirSync(join(__dirname, "yardım")).filter(file =>
  file.endsWith(".js")
);

for (const file of yardımFiles) {
  const yardım = require(join(__dirname, "yardım", `${file}`));
  client.commands.set(yardım.name, yardım);
}
//yonetim komutlar//
const yonetimFiles = readdirSync(join(__dirname, "yonetim")).filter(file =>
  file.endsWith(".js")
);

for (const file of yonetimFiles) {
  const yonetim = require(join(__dirname, "yonetim", `${file}`));
  client.commands.set(yonetim.name, yonetim);
}

module.exports = {
  client: client
};

client.login(process.env.TOKEN);
