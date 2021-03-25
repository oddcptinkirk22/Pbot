const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    console.log("running UserInfo Command!");

    let target = message.author;
    let channel = message.channel;
    let embedUserInfo = new discord.MessageEmbed()
    .setAuthor(target.username)
    .setDescription(`this is **${target.username}**'s User Info`)
    .setColor("#0000ff")
    .addField("full username", `${target.username}#${target.discriminator}`)
    .addField("Mention", target)
    .addField("ID", target.id)
    .addField("Created At", target.createdAt);

    channel.send(embedUserInfo);

    console.log(`UserInfo Command Completed!\n`);

}


module.exports.config = {
    name: "userinfo",
    usage: ",userinfo"
}