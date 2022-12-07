//  __        ___   _    _  _____ ____    ____ _____  ________   __
//\ \      / / | | |  / \|_   _/ ___|  | __ )_ _\ \/ / __ ) \ / /
// \ \ /\ / /| |_| | / _ \ | | \___ \  |  _ \| | \  /|  _ \\ V /
//  \ V  V / |  _  |/ ___ \| |  ___) | | |_) | | /  \| |_) || |
//   \_/\_/  |_| |_/_/   \_\_| |____/  |____/___/_/\_\____/ |_| 
//A successful project by ziyan an WhatsApp bot with nodejs and baileys
//©2022 ZIYAN
//website screenshot plugin to preview a site made for whatsbixby by ziyan
const got = require("got");
const whatsbixby = require("../lib/events");
const lang = whatsbixby.getString("webss");

whatsbixby.addCommand(
  {
    pattern: ["ss"],
    desc: lang.SS_DESC,
    usage: '<url>',
    sucReact: "🌍",
    category: ["all", "create"],
  },
  async (message, client) => {
    if (!message.client.args[0]) {
      global.catchError = true;
      return await client.sendMessage(message.from,{ text: whatsbixby.errorMessage(lang.LINK) },{ quoted: message });
    }
    try {
      const torken = process.env.SS || '';
      const uri = encodeURI(message.client.args[0]);
      const url = `https://shot.screenshotapi.net/screenshot?token=${torken}&url=${uri}&file_type=jpeg&full_page=true`;
      const response = await got(url);
      const json = JSON.parse(response.body);
      await client.sendMessage( message.from, { image: { url: json.screenshot }, caption: whatsbixby.config.exif.cap }, { quoted: message });
    } catch (error) {
      global.catchError = true;
      return await client.sendErrorMessage( message.from, error, message.key, message );
    }
    global.catchError = false;
  }
);

// {
//     "screenshot": "https://screenshotapi-dot-net.storage.googleapis.com/apple_com_cdba63c85024.jpeg",
//     "url": "https://apple.com",
//     "created_at": "2022-07-19T06:16:16.602Z",
//     "is_fresh": true,
//     "token": "",
//     "file_type": "jpeg",
//     "full_page": "true",
//     "ttl": "2022-08-18T06:16:10.806Z"
// }
