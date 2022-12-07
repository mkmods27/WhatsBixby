const whatsbixby = require('../lib/events');
const got = require('got');
const Config = require('../config');


    whatsbixby.addCommand({pattern: ['scan'], desc: "to scan", sucReact: "💔", category: ['all'],},   async (message, client) => {
	    const url = `https://qr-code-for-bots.herokuapp.com`;
		    return await client.sendMessage( message.from, { image: { url:  url }, caption: whatsbixby.config.exif.cap,},{ quoted: message });
    });
