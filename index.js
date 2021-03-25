const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const {Client, Richembed} = require(`discord.js`);
const config = require('./config.json');
const fs = require("fs");
const prefix = `,`

console.log('online!');

bot.commands = new Discord.Collection();

bot.on(`guildMemberAdd`, member =>{

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




bot.login(process.env.TOKEN)});