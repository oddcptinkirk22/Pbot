const Discord = require(`discord.js`);
const randomPuppy = require(`random-puppy`)




module.exports.run = async (bot, message, args) => {
    const subReddits = ["randomsexygifs","Pornhub"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setColor(`#000066`)
    .setImage(img)
    .setTitle(`from /r/${random}`)
    .setURL(`https://reddit.com/${random}`)

    message.channel.send(embed);
}







module.exports.config = {
    name: "hot",
    usage: ",hot"
}