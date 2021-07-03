const Discord = require("discord.js");

//hey dude i made this template by collecting it from my old bot and i made the help command like shit please change here
module.exports = {
 name: "help",
 aliases: ["h", "command",`help`],
 category: "info",
 description: "Displays all the Command available",
 usage: "help",
 run: async (client, message, args) => {

   const help = new Discord.MessageEmbed()
	    .setColor('RANDOM')
	    .setTitle('Commands')
        .setThumbnail('https://samo.loves-ani.me/kq4d64wqs9a')
        .addFields(
		    { name: '**:hugging:Social**', value: '**`c!hug` `c!feed` `c!kiss` `c!pat` `c!slap`**', inline: false },
		                
            { name: '**:game_die:Gambling**', value: '**`c!roulette` `c!slots`**', inline: false },

            { name: '**:performing_arts:Fun**', value: '**`c!animesearch` `c!avatar` `c!gay` `c!hitler` `c!meme` `c!trigerred` `c!wanted` `c!wasted`**', inline: false },
        
            { name: '**:cat:Animal**', value: '**`c!redpanda` `c!cat` `c!dog` `c!fox` `c!koala`**', inline: false },

            { name: '**:wrench:BotInfo**', value: '**`c!help` `c!botinfo` `c!ping` `c!invite` `c!support`**', inline: false },    
        )
        .setFooter('Dev:Samomen#0002');
    message.channel.send(help);
}
}    
