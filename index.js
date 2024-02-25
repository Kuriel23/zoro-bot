const discord = require('discord.js');
require('dotenv').config();

const client = new discord.Client({
	intents: Object.keys(discord.GatewayIntentBits).map(a => {
		return discord.GatewayIntentBits[a];
	}),
	partials: [
		discord.Partials.Message,
		discord.Partials.Channel,
		discord.Partials.Reaction,
		discord.Partials.GuildMember,
		discord.Partials.ThreadMember,
		discord.Partials.User,
	],
	cacheWithLimits: {
		MessageManager: {
			sweepInterval: 300,
			sweepFilter: discord.Sweepers.filterByLifetime({
				lifetime: 60,
				getComparisonTimestamp: m =>
					m.editedTimestamp ?? m.createdTimestamp,
			}),
		},
	},
});

client.cor = '#FF5552';
client.canais = {
	errors: '1147958842580279336',
};

process.on('unhandledRejection', error => {
	console.log(error);
});
process.on('uncaughtException', error => {
	console.log(error);
});

const boilerplateComponents = async () => {
	await require('./src/util/boilerplateClient')(client);
};

boilerplateComponents();
