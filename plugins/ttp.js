const whatsixby = require("../lib/events");
const lang = whatsixby.getString("ttp");
const axios = require("axios");

whatsixby.addCommand( { pattern: ["ttp"], sucReact: "🖼", category: ["all", "create"], },
  async (message, client) => {
    if (!message.client.text) { global.catchError = true; return await client.sendErrorMessage( message.from, lang.NEED_WORD, message.key, message ); }
    var uri = encodeURI(message.client.text);
    try {
      var resImage = await axios.get( "https://api.xteam.xyz/ttp?file&text=" + uri, { responseType: "arraybuffer" } );
    } catch (error) {
      global.catchError = true; 
      return await client.sendErrorMessage( message.from, error, message.key, message );
    }
    await client.sendMessage( message.from, { image: Buffer.from(resImage.data), caption: whatsixby.config.exif.cap }, { quoted: message } );
    global.catchError = false;
  }
);

whatsixby.addCommand( { pattern: ["attp"], desc: lang.ATTP_DESC, sucReact: "☯", category: ["all", "create"], },
  async (message, client) => {
    if (!message.client.text) {global.catchError = true; return await client.sendErrorMessage(message.from,lang.NEED_WORD,message.key,message);}
    var uri = encodeURI(message.client.text);
    try {
      var resSticker = await axios.get( "https://api.xteam.xyz/attp?file&text=" + uri, { responseType: "arraybuffer" } );
    } catch (error) { 
        global.catchError = true; 
        return await client.sendErrorMessage( message.from, error, message.key, message );
    }
    client.sendMessage( message.from, { sticker: Buffer.from(resSticker.data) }, { quoted: message } );
    global.catchError = false;
  }
);
