
const ezio = require("../events");

ezio.addCommand(
  {
    pattern: ["extra_urls"],
    dontAddCommandList: true,
    sucReact: "🎟",
  },
  async (message, client) => {
    const caption = `------- WhatsApp Groups -------

⚜ Work Group :- https://chat.whatsapp.com/KLd7DIw1OV56wj4BRw0oE9
⚜ Test Group :- https://chat.whatsapp.com/DhtO4ibqk7gBZEPLNof0TQ

--------------------------------`;
    const buttons = [
        { buttonId: ".group-qr-work", buttonText: { displayText: "🎦 Work Group Qr 🎦" }, type: 1, },
        { buttonId: ".group-qr-test", buttonText: { displayText: "🎦 Test group Qr 🎦" }, type: 1, },
    ];
    const templateButtons = {
      image: { url: ezio.config.image.url.D_E_TMB },
      caption,
      footer: ezio.config.exif.footer,
      buttons,
    };
    await client.sendMessage( message.from, templateButtons, { quoted: message })
    global.catchError = false;
  }
);

ezio.addCommand(
  {
    pattern: ["group-qr-work", "group-qr-test"],
    dontAddCommandList: true,
    sucReact: "🔗",
  },
  async (message, client) => {
    const caption = "🎟 : *You can scan it with their whatsApp camera to jing this group.*\n\n" + ezio.config.exif.cap;
    const wImageUrl = "https://raw.githubusercontent.com/ZIYAN-SER/Asena-MD/master/lib/database/image/Work_Group_Qr.jpeg";
    const tImageUrl = 'https://raw.githubusercontent.com/ZIYAN-SER/Asena-MD/master/lib/database/image/Work_Group_Qr.jpeg';
    const wImage = { image: { url: wImageUrl }, caption, };
    const tImage = { image: { url: tImageUrl }, caption, };
    if (message.client.command == 'group-qr-work') await client.sendMessage( message.from, wImage, { quoted: message })
    if (message.client.command == 'group-qr-test') await client.sendMessage( message.from, tImage, { quoted: message })
    global.catchError = false;
  }
);
