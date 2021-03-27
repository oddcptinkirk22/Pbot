const discord = require("discord.js"); 

module.exports.run = async (Client, message, args) => {
  
    message.channel.send("Pinging...").then(m => {
      let ping = m.createdTimestamp - message.createdTimestamp
      let choices = ["Pong"]
      let response = choices[Math.floor(Math.random() * choices.length)]
  
      m.edit(`${response}: Bot Latency: ${ping}, API Latency ${Math.round(Client.ping)}`)
    })
  }

 
  module.exports.config = {
      name: "ping",
      description: "PONG! Displays the api & bot latency",
      usage: ",uptime",
      accessableby: "Members",
      aliases: ["latency"]
  };

  module.exports.config = {
    name: "ping",
    usage: ",ping"
}