/* eslint-disable no-unused-vars */
//tur
const { prefix, owner } = require("../config.js"),
	emojis = require("../emojis.json"),
	e = emojis;

module.exports = {
	start: {
		perms: `${e.error} Izniniz yok \`MANAGE_MESSAGES\`, adlı uygulama için bir derece oluşturabilirsiniz \`Giveaway Manger\` ve bir kullanıcıya ekle \`start & create & edit ...\` eşantiyonlar veya setler loncanızdaki rolü belirtin Aşağıdaki komutu kullanarak \`${prefix}setrole [on / off] {your role}\`!.`,
		duration: `${e.error} Geçerli bir yazın \`zaman\` Lütfen!\n> Ex: \`1d (1 gün)\`, \`1h (1 saat)\`, \`1m (1 dakika)\`, \`1s (1 saniye)\`!`,
		argswinners: `${e.error} Yaz \`kazananların sayısı!\`\n> Ex: \`${prefix}start 1h 4(4: kazananların sayısı) Nitro\``,
		prize: `${e.error} Ekle \`ödül\` Lütfen!\n> Ex: ${prefix}start 1h 1 \`Nitro(Nitro: ödül)\``
	},

	create: {
		perms: `${e.error} Izniniz yok \`MANAGE_MESSAGES\`, adlı uygulama için bir derece oluşturabilirsiniz \`Giveaway Manger\` ve bir kullanıcıya ekle \`start & create & edit ...\` eşantiyonlar veya setler loncanızdaki rolü belirtin Aşağıdaki komutu kullanarak \`${prefix}setrole [on / off] {your role}\`!.`,
		channel: `${e.error} Bahsetmelisin \`geçerli kanal!\`\n> Ex: ${prefix}create \`#hediye kanalı (hediye: bu kanal)\` 1h 1 Nitro!`,
		otherServer: `${e.error} Oluşturamazsınız \`vermek\` başka bir sunucuda!.`,
		duration: `${e.error} Type a valid \`zaman\` Lütfen!\n> Ex: \`1d (1 gün)\`, \`1h (1 saat)\`, \`1m (1 dakika)\`, \`1s (1 saniye)\`!`,
		argswinners: `${e.error} Yaz \`kazananların sayısı!\`\n> Ex: \`${prefix}create #hediye kanalı 1h 4(4: kazananların sayısı) Nitro\``,
		prize: `${e.error} Ekle \`ödül\` Lütfen!\n> Ex: ${prefix}create #hediye kanalı 1h 1 \`Nitro(Nitro: ödül)\``,
		good: `${e.success} **Başlattım \` vermek \` in the living room:**`,

		giveaway: `${e.gift} **GIVEAWAY BAŞLANGICI** ${e.gift}`,
		giveawayEnded: `${e.end} **GEÇİŞ BİTTİ** ${e.end}`,

		timeRemaining: `${e.time} **Kalan zaman:** **{duration}**!`,
		inviteToParticipate: (message) => "İLETİŞİM 🎉 GİRMEK!",
		winMessage: (message) => "🎉 | Tebrikler, {winners}! Kazandın: **{prize}**!",
		embedFooter: "Rusty Manager",
		noWinner: "❌ Hediye iptal edildi, yeterli katılımcı yok:(",
		hostedBy: `${e.hoste} **Tarafından barındırılan:** {user}`,
		winners: "kazanan(s) 🎉",
		endedAt: "Tarihinde sona erdi",
	},

	units: {
		seconds: "ikinci(s)",
		minutes: "dakika(s)",
		hours: "saat(s)",
		days: "gün(s)",
	},

	lastchance: { content: `${e.warning} **GİRMEK İÇİN SON ŞANS !** ${e.warning}` },

	end: {
		perms: `${e.error} Izniniz yok \`MANAGE_MESSAGES\`, adlı uygulama için bir derece oluşturabilirsiniz \`Giveaway Manger\` and addd to a user for \`start & create & edit ...\` eşantiyonlar veya setler loncanızdaki rolü belirtin Aşağıdaki komutu kullanarak \`${prefix}setrole [on / off] {your role}\`!.`,
		msg: `${e.error} Geçerli bir mesaj kimliği belirtmelisiniz!`,
		err: `${e.error} Bu kimlik eşantiyonu tanınamıyor:`,
		errmod: `${e.error} Bu hediye zaten sona erdi veya silindi!`,
		good: `${e.success} Eşantiyon daha kısa sürede bitecek:`
	},

	reroll: {
		perms: `${e.error} Izniniz yok \`MANAGE_MESSAGES\`, adlı uygulama için bir derece oluşturabilirsiniz \`Giveaway Manger\` and addd to a user for \`start & create & edit ...\` eşantiyonlar veya setler loncanızdaki rolü belirtin Aşağıdaki komutu kullanarak \`${prefix}setrole [on / off] {your role}\`!.`,
		msg: `${e.error} Geçerli bir mesaj kimliği belirtmelisiniz!`,
		err: `${e.error} Bu kimlik eşantiyonu tanınamıyor:`,
		good: ":tada: Yeni kazanan (s): {winners}! Tebrikler!",
		parts: `${e.error} Bu hediye için yeterli katılımcı yoktu, seçemiyorum!`
	},

	edit: {
		perms: `${e.error} Izniniz yok \`MANAGE_MESSAGES\`, adlı uygulama için bir derece oluşturabilirsiniz \`Giveaway Manger\` and addd to a user for \`start & create & edit ...\` eşantiyonlar veya setler loncanızdaki rolü belirtin Aşağıdaki komutu kullanarak \`${prefix}setrole [on / off] {your role}\`!.`,
		msg: `${e.error} Geçerli bir mesaj kimliği belirtmelisiniz!`,
		wipr: `${e.error} Ya ödülü ya da kazananları düzenlemelisiniz!`,
		argswinners: `${e.error} yaz \`kazananların sayısı! \`\n> Ex: \`${prefix}edit {giveawayid} kazananlar 2(2: kazananların sayısı)\``,
		prize: `${e.error} ekle \`ödül\` Lütfen!\n> Ex: ${prefix}edit {giveawayid} ödül \`Nitro (Nitro: ödül)\``,
		timepr: (numberOfSecondsMax)=> `${e.success} Hediye ödülü en az bir süre içinde güncellenecek \`${numberOfSecondsMax}\` saniye.`,
		timwi: (numberOfSecondsMax)=> `${e.success} Hediye kazanan sayısı şundan daha az bir süre içinde güncellenecek: \`${numberOfSecondsMax}\` saniye.`,
		err: `${e.error} Bu kimlik eşantiyonu tanınamıyor: `,
		errmod: `${e.error} Bir hata oluştu, belki bu hediye zaten bitmiştir veya silinmiştir?!`
	},

	delete: {
		done: `${e.success} Bitti hediye silinir`,
		otherServer: `${e.error} Başkasınınkini kontrol edemezsin \`giveaway\` bu sunucuda!`,
		otherUser: `${e.error} Bunu kontrol edemezsin \`giveaway\`, sahibi olmadığın için!`
	},

	lang: {
		perms: `${e.error} Izniniz yok \`MANAGE_MESSAGES\`, adlı uygulama için bir derece oluşturabilirsiniz \`Giveaway Manger\` and addd to a user for \`start & create & edit ...\` eşantiyonlar veya setler loncanızdaki rolü belirtin Aşağıdaki komutu kullanarak \`${prefix}setrole [on / off] {your role}\`!.`,
		msg: `${e.error} lütfen geçerli bir dil girin (\`ar\`, \`en\`, \`ru\`, \`ua\`, \`tr\`)`,
	},

	set: {
		args: `${e.error} | Lütfen belirtiniz \`on\` or \`off\``,
		mon: `${e.success} | setmention komutu doğru şekilde etkinleştirildi!.`,
		moff: `${e.success} | setmention komutu doğru şekilde devre dışı bırakıldı!`,
		rlargs: `${e.error} | Lütfen belirtiniz \`on\` or \`off\` ve bir rol adı!`,
		rlerr: `${e.error} | Bu isimde bir rol bulunamadı`,
		ron: `${e.success} | rol yöneticisi doğru şekilde etkinleştirildi!`,
		roff: `${e.success} | rol yöneticisi doğru şekilde devre dışı bırakıldı!`
	},

	invite: {
		main: "Ana bağlantılar",
		disc: `Type \`${prefix}invite kopya\` bağlantıyı kopyalayabilmek!`,
		web: `${e.link} RustyManager İnternet sitesi`,
		inv: `${e.add} Davet et RustyManager Bot`,
		vote: `${e.vote} Oy İçin RustyManager Bot`,
		sup: `${e.supp} Destek Sunucusuna Katılın`
	},

	help: {
		title: "Yardım Belgelerine Genel Bakış:",
		disc: "● Burada hepsini bulabilirsiniz `RustyManager Komutlar`",
		giveawaycmd: `${e.givcmd} Hediye komutları - (6)`,
		featuredcmd: `${e.featured} Öne çıkan komutlar - (4)`,
		infocmd: `${e.info} Bilgi komutları - (4)`,
		ownerbot: `${e.owner} Sahip bot komutları - (2)`,
		link: `${e.link} Bağlantılar:`
	},

	stats: {
		title: "RustyManager Bilgi:",
		info: `Kolaylıkla eşantiyon oluşturmanıza izin veren ve size birçok farklı özellik sunan açık kaynaklı bir bottur. Bot programlandı \`javascript language\` ve tarafından: ${owner.name}`,
		stats: `${e.stats} • __Statistics:__`,
		stat: "`Sunucular:`",
		set: "`Kullanıcılar:`",
		ch: "`Kanallar:`",
		ver: `${e.ver} • __Versions:__`,
		ram: `${e.ram} • __VERİ DEPOSU__`,
		on: `${e.on} • __İnternet üzerinden__`,
		for: "**için çevrimiçi** ",
		moreinfo: `${e.info} • __Diğer Bilgiler:__`,
		comd: "`Toplam Komutlar:`",
		giv: "`Tüm Eşantiyonlar:`",
	},

	prefixerror: `${e.error} Geçerli bir önek yazın!.`,
	prefixerrcarc: `${e.error} | Önek 5 karakteri geçmemelidir!`,
	setprefix: `${e.success} Bu sunucudaki önek olarak değiştirildi `,

	info: {
		ping: `> ${e.ping} Ping'im `,
	},
	cooldown: {
		err: `${e.error} | **Beklemelisin \`4 ikinci(s)\` ${e.time} bu komutu tekrar çalıştırabilmek için!**`
	},
	myprefix: {
		hello: `${e.info} |  Merhaba `,
		prefixis: (guildData) => ` bu sunucudaki ön ekim \`${guildData.prefix}\`.Kullanım \`${guildData.prefix}help\` komutların listesini almak için!`,
	},
	blacklist: {
		blacklist: "🔒 **Kullanamazsınız `RustyManager komutlar` çünkü içindesin `Karaliste!!`**"
	}
};