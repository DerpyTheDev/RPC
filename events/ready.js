const rpc = require("discordrpcgenerator");
const config = require(".././config.json")

module.exports = async (client) => {
	let small = await rpc.getRpcImage(config.applicationID, config.smallImage);
  rpc.getRpcImage(config.applicationID, config.largeImage)
		.then(large => {
			let presence = new rpc.Rpc()
				.setName(config.name)
				.setUrl('https://www.twitch.tv/derpydev')
				.setType(config.type)
				.setApplicationId(config.applicationid)
				.setAssetsLargeImage(large.id)
				.setAssetsSmallImage(small.id)
				.setState(config.state)
				.setDetails(config.details)
				.setStartTimestamp(config.time || Date.now());
      console.log(presence.toDiscord());
			client.user.setPresence(presence.toDiscord())
        .catch(console.error);
		});
	console.log("Succesfully enabled rpc")
};