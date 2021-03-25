const Discord = require(`discord.js`);
const randomPuppy = require(`random-puppy`)




module.exports.run = async (bot, message, args) => {
    const subReddits = ["gifs"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`from /r/${random}`)
    .setURL(`https://reddit.com/${random}`)

    message.channel.send(embed);
}







module.exports.config = {
    name: "gif",
    usage: ",gif"
}