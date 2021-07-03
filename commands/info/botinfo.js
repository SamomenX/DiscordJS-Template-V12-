const Discord = require("discord.js");
const config = require("../../config.json");

module.exports = {
    name: "info",
    aliases: ["botinfo", "clientinfo", "stats"],
    description: "Shows informations for developers",
    category: "General",
    usage: "info",
 
    run: async (client, message, args) => {

        const embed = new Discord.MessageEmbed()
            .setTitle(`📄 Bot info`)
            .setColor("#2ebc0f")
            .setDescription(`My prefix is: \`${config.prefix}\`\n`)
            .addField("Developer", `${config.author} `)
            .addField("Guild Count", `${client.guilds.cache.size}`, true)
            .addField("User Count", `${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`, true)
            .addField("Ping", Math.round(client.ws.ping) + "ms", true)
            .addField("Useful Links", `[Support server](${config.server}) | [Invite me](${botinvite})`)
        message.channel.send(embed);
  }
};