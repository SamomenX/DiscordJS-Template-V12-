const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "slap",
    aliases: [`slap`],
    description: "slap slap ehehe",
    category: "social",
    usage: "slap <user>",
 
    run: async (client, message, args) => {
        const user = (await message.mentions.members.first()) || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find((r) => r.user.username.toLowerCase().includes() === args.join(" ").toLocaleLowerCase()) || message.guild.members.cache.find((r) => r.displayName.toLowerCase().includes() === args.join(" ").toLocaleLowerCase());
        if (!user) {
            return message.channel.send({
                embed: {
                color: 16734039,
                description: " You must mention user ",
            },
            });
        }
  
        if (message.author === user || message.member == user) {
            return await message.channel.send({
                embed: {
                color: 16734039,
                description: " WHYYYYYY??? PLEASE MENTION A USER",
            },
            });
        }
  
        (async () => {
            try {
                const response = await fetch("https://nekos.life/api/v2/img/slap");
                const body = await response.json();
                const embed = new Discord.MessageEmbed()
                    .setAuthor(user.displayName + " got a SLAP from " + message.author.username, message.author.displayAvatarURL({ dynamic: true, format: "png", size: 2048 }))
                    .setImage(body.url)
                    .setColor("RANDOM")
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