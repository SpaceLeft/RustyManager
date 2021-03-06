module.exports = {
	/* The token of your Discord Bot // توكن البوت الخاص فيك */
	token: "",
	/* for the support server // رابط سيرفر الدعم الخاص فيك */
	auth: {
		support: "https://discord.gg/vNzJYm3v96", // URL for support server
		logs: "835818192068804668", // id of the logs channel on your server if the bot join new server
	},
	mongoDB: "mongodb://localhost:27017/RustyManager", // The URl of the mongodb database
	prefix: "g", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embeds: {
		color: "#8b2f2f", // Embed color | لون الامبد
		footers: "🎁 RustyManager" // Embed footer | الكتابة لي تكون اخر الامبد
	},
	/* Bot's owner informations */
	owner: {
		id: "442793591501357056", // The ID of the bot's owner
		name: "" // The ID of the bot's owner
	},
	/* The Bot status */
	status: [
		{
			name: "ghelp | Rusty Manager on {server} servers!",
			type: "LISTENING"
		},
	],
	/* Default lang | اللغة الاساسية */
	basiclang: "english",
	/* Giveaway settings */
	giveaway: {
		hostedBy: true, // Why hosted gift | لماذا استضافت الهدية
		reaction: "🎉", // Reaction to the giveaways if you in the console you see 'unknown emoji' that's what this emoji is not recognized by Discord | الايموجي الي بس تضغط عليها يصير القيف اوي اذا طلع لك ايرور بالكونسول يعني الايموجي ما تعرف بالديسكورد
		grole: "Rusty Manger", // If the member doesn't have permission to handle messages he can still use the giveaways commands if he has the role configured right here | اذا سويت الرتبة واعطيتها لحد يصير يقدر يسوي قيف اوي ويستخدم جميع اوامر البوت بدون صلاحيات
		lastchanceenabled: true,
	},
	//logs for cmd bot
	logs: {
		command: "" //log To see who uses bot commands
	}
};