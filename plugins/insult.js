const whatsbixby = require('../lib/events');
const got = require('got');
const Config = require('../config');
whatsbixby.addCommand({pattern: ["insult","😕","😦","🥺","🥲","🤥","🤧","😐","😏","😒","😔","🥴","😵","☹️","🙁","😟","😮","😳","😥","😢","😰","😨","😖","😱","😭","😞","😓","😩","😫","poda"], desc : "for fun",sucReact: "💔", category: ['all'],}, async (message, client) => {
	const url = `https://evilinsult.com/generate_insult.php?lang=en&type=json`;
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await client.sendMessage( message.from, { text:json.insult},{ quoted: message });
});
