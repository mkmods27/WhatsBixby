const whatsbixby = require("../lib/events");

whatsbixby.addCommand(
  {
    pattern: ["donate", 'report'],
    dontAddCommandList: true,
    sucReact: "👩‍💻",
  },
  async (message, client) => {
    await client.sendMessage(
      message.from,
      { text: whatsbixby.errorMessage('404 :' + whatsbixby.config.reply.notFound) },
      { quoted: message }
    );
    global.catchError = true;
  }
);
