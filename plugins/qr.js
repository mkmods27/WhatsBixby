const whatsbixby = require('../lib/events');
whatsbixby.addCommand({ pattern: ['qr'], desc: "to generate qr from  word",sucReact: " ‘",  category: ["all"]}, async (message, client) => {
        if (!message.client.text) return await client.sendMessage(message.from, { text :" enter some text to convert qr ode ",},{ quoted: message })
        var ttinullimage = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${message.client.text}`;
const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };
        await client.sendMessage( message.from, Message,{ quoted: message })
});
