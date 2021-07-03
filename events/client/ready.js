const config = require(`../../config`);

module.exports = async (client) => {
	client.user.setPresence({
		activity: {
			name: `${config.prefix}help`,
			type: "PLAYING"
		},
		status: "dnd"
	});
};