const RichEmbed = require('discord.js');
const bot = new  Discord.Client();

const PREFIX = 'p%'

var version = '1.0.1';

bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('With DankDaGamer in VSCode', {type: 'PLAYING'}).catch(console.error);
})

bot.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.find(channel =>  channel.name === "『⭐』ᴡᴇʟᴄᴏᴍᴇ");
    if(!channel) return;

    channel.send(`Welcome to Poké Altair, ${member}, please read <#582746406725615626> and hope you enjoy your stay here!`);
})
bot.on('message', message => {
	if(message.content.startsWith('p%kick')) {
		if(!message.member.hasPermission(['ADMINISTRATOR'])) return message.reply('You do not have permission to use this command!')
		const user = message.mentions.users.first();
		if(user) {
			const member = message.guild.member(user);
			if(member) {
				member.kick('The user was kicked').then(() => {
					message.reply(`Successfully kicked ${user.tag}`);
				  }).catch(err => {
					  message.reply('The user was not kicked! I cant kick a member with Mods or Admins permissions');
					  console.error(err);
			});
		    } else {
				message.reply('the user is not in this server');
			}
	} else {
		message.reply('Please mention a user to kick');
	}
}
});

bot.on('message', message => {
	
	let args = message.content.substring(PREFIX.length).split(" ");
	
switch(args[0]){	
		case 'userinfo':
		const USER = new RichEmbed()
			.setTitle('User Info')
			.addField('User name', message.author.username)
			.addField('Current Server', message.guild.name)
			.addField('Last message', message.member.lastMessage)
			.addField('Joined discord at', message.author.createdAt)
			.addField('Joined server', message.member.joinedAt)
			.addField('User ID', message.member.id)
		        .setFooter('BOT CREATED BY RONAK (still in development)')
			.setThumbnail(message.author.avatarURL)
			.setColor(0x00FF00)
			message.channel.sendEmbed(USER);
		break;



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
            message.channel.sendMessage('Invalid Arguments, please do p%info version to acquire bot version');
        }
        break;
    case 'clear':
        if(!message.member.roles.find(r => r.name === "Staff"))return message.channel.send('You do not have permissions to use this command')
        .then(msg =>msg.delete(5000));
        if(!args[1]) return message.reply('Error, please define second argument')
        message.channel.bulkDelete(args[1]);
        break;
     case 'help':
	message.channel.sendMessage('List Of Commands : 1. ping 2. youtube 3. donate 4. info (Prefix is p%) ')
                
    }
}
)
bot.login(process.env.token);

