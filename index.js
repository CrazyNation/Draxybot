const Discord = require('discord.js');
const got = require('got');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

//WELCOME MESSAGE: 

client.on('guildMemberAdd', guildMember => {
    const embed = new Discord.MessageEmbed()
    .setColor('#388d22')
    .setDescription(`Hey, welcome to Crzykidabjr Gaming! Go to <#741735804291776597> to read rules and verify to access the server. Thank YOU for joining`)
    .setFooter(`Member # ${guildMember.guild.memberCount}`)
    guildMember.guild.channels.cache.get('741745924052615178').send(`<@${guildMember.user.id}>`, embed)
})

//COMMAND HANDLER

client.commands = new Discord.Collection();
client.event = new Discord.Collection();
['command_handler', 'event_handler'].forEach(handler => (
    require(`./handlers/${handler}`)(client, Discord)
))

client.login(process.env.TOKEN);