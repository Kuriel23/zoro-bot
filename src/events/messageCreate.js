module.exports = async (client, message) => {
	if (message.guild === null || message.author.bot) return;

	if (
		message.content.startsWith('kei?') &&
		(message.author.id !== '354233941550694400' ||
			message.author.id !== '1066799804467921007')
	)
		require('../messages/' + message.content.replace('kei?', ''))(
			client,
			message,
		).catch(err => {
			return message.reply(err);
		});
};
