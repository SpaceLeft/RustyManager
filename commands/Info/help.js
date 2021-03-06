const { MessageEmbed } = require("discord.js");
exports.run = async (client, message, args, guildData, lang) => {
	const version = require("../../package.json").version;
	const supportURL = client.config.auth.support;
	const invite = "https://discordapp.com/oauth2/authorize?client_id=598564396691750933&scope=bot&permissions=8";
	message.channel.send(new MessageEmbed()
		.setTitle(lang.help.title)
		.setAuthor(`RustyManager | Version ${version}`)
		.setDescription(lang.help.disc)
		.addField(lang.help.giveawaycmd,"`create`, `start`, `end`, `edit`, `reroll`, `delete`")
		.addField(lang.help.featuredcmd,"`setlang`, `setmention`, `setprefix`, `setrole`")
		.addField(lang.help.infocmd,"`stats`, `ping`, `invite`, `help`")
		.addField(lang.help.ownerbot, "`eval`, `blacklist`")
		.addField(lang.help.link, `[Support server](${supportURL}) ● [Invite](${invite})`)
		.setColor(client.config.embeds.color)
		.setFooter(client.config.embeds.footers));
};
