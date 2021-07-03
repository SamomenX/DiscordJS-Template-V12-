const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
 name: "redpanda",
 aliases: [`redpanda`,`rp`],
 description: "Sends a random Red Panda photo",
 category: "animals",
 usage: "redpanda",
 run: async (client, message, args) => {
  (async () => {
   try {
    const response = await fetch("https://redpanda.pics/random");
    const body = await response.json();
    const embed = new Discord.MessageEmbed() // Prettier()
     .setTitle(
      "RED PANDA :>",
      message.guild.iconURL({
       dynamic: true,
       format: "png",
      })
     )
     .setImage(body.url)
     .setColor("RANDOM")
     .setFooter(
      " • (Aww cute =＾´• ⋏ •`＾=)"
     )
     .setURL(body.url);
    message.channel.send(embed);
   } catch (err) {
    message.channel.send({
     embed: {
      color: 16734039,
      description: "Something went wrong... :cry:",
     },
    });
   }
  })();
 },
};