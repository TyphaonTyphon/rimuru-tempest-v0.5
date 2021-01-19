const { MessageFlags } = require("discord.js");

module.exports = {
  name: "yaz",
  desciption: "yaz komudu",

  async run(client, message, args) {
    if (!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) {
      return message.channel.send({
        embed: { color: "RED", description: "Bu komutu kullanamazsın!" }
      });
    }
    let msg;
    message.delete();
    msg = args.join(" ");
    message.channel.send(msg);
  }
};
