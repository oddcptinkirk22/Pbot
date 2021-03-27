const Discord = require("discord.js");
const Client = new Discord.Client({disableEveryone: true});
const randomPuppy = require(`random-puppy`)
const Scraper = require(`images-scraper`)
const {RichEmbed} = require(`discord.js`);
const config = require('./config.json');
const fs = require("fs");
const prefix = `,`



console.log('online!');



Client.commands = new Discord.Collection();



Client.on(`guildMemberAdd`, member =>{

  const channel = member.guild.channels.find(channel => channel.name === "welcome");
  if(!channel) return;

  channel.send(`welcome to CaveCreaft, ${member}, Read rules or do ,serverinfo for a list of rules and the server IP`)
});



("commands")
fs.readdir("./commands/", (err, files) =>{
if(err) console.log(err);
let jsfile = files.filter(f => f.split(".").pop() === "js");
if(jsfile.length <= 0){
  console.log("could not find command.");
  return;
}



jsfile.forEach((f, i) =>{
  let props = require(`./commands/${f}`);
  console.log(`${f} loaded!`);

  Client.commands.set(props.config.name, props);

});




("turning on and stuff")
Client.on("ready", async () => {
    console.log(`${Client.user.username} is online! Its on ${Client.guilds.size} severs!`);
    Client.user.setActivity("working on it", {type: "working on it"});
});



Client.on("guildMemberAdd", async member => {
  let welcomchannel = member.guild.channels.find('name', "sup");
  if(!welcomchannel) return;
  welcomchannel.send('welcome ${member} to the sever!');
  member.send("test").catch(O_o=>{ welcomchannel.send("dis kid dont got dms")});
});



Client.on("guildMemberremove", async member => {
  let welcomchannel = member.guild.channels.find('name', "sup");
  if(!welcomchannel) return;
  welcomchannel.send('welcome ${member} to the sever!');
  member.send("test").catch(O_o=>{ welcomchannel.send("dis kid dont got dms")});
});




("sever info/user/bot")
Client.on("message", async message =>{
  if(message.author.Client) return;
  if(message.channel.type === "dm") return;
let prefix = config.prefix;
let msgarray = message.content.split(" "); //>test hi
let command = msgarray[0];
if(command.slice(0, prefix.length) !== prefix) return;
let args = msgarray.slice(1);
let commandfile = Client.commands.get(command.slice(prefix.length))
if(commandfile) commandfile.run(Client, message, args);
if(command === `${prefix}botinfo`){

  let bicon = Client.user.displayAvatarURL;
  let Clientembed = new Discord.MessageEmbed()
  .setDescription("Bot Information")
  .setColor("#15f153")
  .setThumbnail(bicon)
  .addField("Bot name", Client.user.username)
  .addField("Made on", Client.user.createdAt);

  return message.channel.send(Clientembed);
};


if(command === `${prefix}help`){
  const bitch = new Discord.MessageEmbed()
  .setColor(`#000066`)
  .setTitle("Help Commands")
  .addField("!server", "sends server invite/shows some server info ")
  .addField("!Ping", "Pong")
  .addField("!uptime", "shows how long the bot has been online")
  .addField("!userinfo", "shows when your account was made, shows your account ID, and your full username")
  .addField("!meme", "Sends random meme")
  .addField("!hot", "Sends random gif from r/randomsexygifs")
  .addField("!gif", "sends random gif ")
  .addField("!random", "Sends random things from all of reddit")
  .addField("!sucks", "Sends random gif or pic from r/wellthatsucks")
  message.channel.send(bitch)
}

 if(command ===`${prefix}server`){
   const embed = new Discord.MessageEmbed()
   .setColor(`#000066`)
   .setTitle("Discord invite")
   .setURL(`https://discord.gg/7YZFgvTV3R`)
   message.channel.send(embed)
 }
})






Client.login(process.env.TOKEN)});