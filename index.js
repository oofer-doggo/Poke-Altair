const Discord = require('discord.js');
const bot = new  Discord.Client();

const token = 'NjAwODI4NjA2NTk5Mzk3Mzc2.XS8Pxg.gLTv0W14-Uro_pRgNqtwZTxESqc';

const PREFIX = 'p%'

var version = '1.0.1';

bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('With DankDaGamer in VSCode', {type: 'PLAYING'}).catch(console.error);
})
bot.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.find(channel =>  channel.name === "『⭐』ᴡᴇʟᴄᴏᴍᴇ");
    if(!channel) return;

    channel.send("Welcome to Poké Altair, ${member} , please read <#582746406725615626> and hope you enjoy your stay here!");
})


switch(args[0]){
    case 'ping':
        
        return message.reply('pong!');
        
        break;
    case 'youtube':
        message.channel.sendMessage('https://www.youtube.com/channel/UCVLf1KlqokGsZHAG5pR_kaQ')
        break;
    case 'donate':
        message.channel.sendMessage('https://www.PayPal.Me/OoferDoggo feel free to donate to help the server out!')
        break;
    case 'info':
        if(args[1] === 'version'){
            message.channel.sendMessage('Version ' + version);
        }else{
            message.channel.sendMessage('Invalid Arguments');
        }
        break;
    case 'clear':
        if(!message.member.roles.find(r => r.name === "Staff"))return message.channel.send('You do not have permissions to use this command')
        .then(msg =>msg.delete(5000));
        if(!args[1]) return message.reply('Error, please define second argument')
        message.channel.bulkDelete(args[1]);
        break;

    switch(args[0]){
    case 'help':
            message.channel.sendMessage('The Prefix is p%');
            break;
    
    }
}


bot.login(process.env.token);
