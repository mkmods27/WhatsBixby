const whatsbixby = require('../lib/events');
const got = require('got');
const Config = require('../config');
whatsbixby.addCommand({pattern: ["insult","đ","đĻ","đĨē","đĨ˛","đ¤Ĩ","đ¤§","đ","đ","đ","đ","đĨ´","đĩ","âšī¸","đ","đ","đŽ","đŗ","đĨ","đĸ","đ°","đ¨","đ","đą","đ­","đ","đ","đŠ","đĢ","poda"], desc : "for fun",sucReact: "đ", category: ['all'],}, async (message, client) => {
	const url = `https://evilinsult.com/generate_insult.php?lang=en&type=json`;
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await client.sendMessage( message.from, { text:json.insult},{ quoted: message });
});
