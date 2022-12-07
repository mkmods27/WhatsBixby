const whatsbixby = require('../lib/events');
const Config = require('../config');

whatsbixby.addCommand({pattern: ['base64e'], desc: "to convert ascii to base64", sucReact: "ðŸ˜‰", category: ['all'], }, (async (message, client) => {

const text = message.client.text || message.quoted;
	    if (!text) return await client.sendMessage( message.from, { text: 'Enter A text to convert base64'}, { quoted: message });
var string = text;
           var encodedString = btoa(string);

            await client.sendMessage( message.from, { text: encodedString }, { quoted: message } );
        }));
whatsbixby.addCommand({pattern: ['base64d'], desc: "to convert base64 to ascii", sucReact: "ðŸ˜‰", category: ['all'], }, (async (message, client) => {

const text = message.client.text || message.quoted;
	    if (!text) return await client.sendMessage( message.from, { text: 'Enter A text to convert base64'}, { quoted: message });
var string = text;
           var decodedString = atob(string);

            await client.sendMessage( message.from, { text: decodedString }, { quoted: message } );
        }));
