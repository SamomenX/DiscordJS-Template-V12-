const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "hug",
    aliases: [`hug`],
    description: "Give a hug to mention user",
    category: "social",
    usage: "hug <user>",
 
 
    run: async (client, message, args) => {
     (async () => {
        try {
            const user = message.mentions.users.first();
            if (!user) {
                return message.channel.send({
                    embed: {
                    color: 16734039,
                    description: "You must mention someone to hug :)",
                },
            });
            }
    
            if (user == message.author) {
                return message.channel.send({
                embed: {
                color: 5294200,
                description: ` :pleading_face: | You can't hug yourself but... Ok, get the hug from me ＼( ^o^ )／ !`,
            },
        });
    }
     
            if (user == client.user) {
                return message.channel.send({
                    embed: {
                    color: 5294200,
                    description: ` :pleading_face: Oh, you tried to hug me but u can't... Im not real... But I can hug you ＼( ^o^ )／`,
                },
            });
        }
    
        const response = await fetch("https://nekos.life/api/v2/img/cuddle");
        const body = await response.json();
        const embed = new Discord.MessageEmbed()
            .setImage(body.url)
            .setURL(body.url)
            .setColor("RANDOM")
            .setDescription(user.toString() + " got a hug from " + message.author.toString())
            .setFooter("this is so cute (｡･ω･｡)ﾉ♡")
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
