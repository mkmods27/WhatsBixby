//  __        ___   _    _  _____ ____    ____ _____  ________   __
//\ \      / / | | |  / \|_   _/ ___|  | __ )_ _\ \/ / __ ) \ / /
// \ \ /\ / /| |_| | / _ \ | | \___ \  |  _ \| | \  /|  _ \\ V /
//  \ V  V / |  _  |/ ___ \| |  ___) | | |_) | | /  \| |_) || |
//   \_/\_/  |_| |_/_/   \_\_| |____/  |____/___/_/\_\____/ |_| 
//A successful project by ziyan an WhatsApp bot with nodejs and baileys
//©2022 ZIYAN
//Good Morning Message plugin by ziyan🔥
//THIS FILE IS OBFUSATED CONTACT ME FOR OPEN FILE CONTACT LINKS IN README
const whatsbixby = require("../lib/events");
const GDM = "it sends good morning message";
const GDN = "it sends Good Night message";
const GDE = "it sends Good Evening Message";
const GAN = "it sends Good Afternoon message";
whatsbixby.addCommand( { pattern: ["gm"], desc: GDM, sucReact: "💖",  category: ["all", "chat"], }, async (message, client) => {

    var r_text = new Array();
    r_text[0] = "❀🍃Good❀ ❀morning❀🥰❀ ";
    r_text[1] = "☘️𝐺𝑜𝑜𝑑 🌅𝑚𝑜𝑟𝑛𝑖𝑛𝑔 💐 ";
    r_text[2] = "🍃𝙶𝚘𝚘𝚍 🌻𝚖𝚘𝚛𝚗𝚒𝚗𝚐 🥰 ";
    r_text[3] = "🍀𝗚𝗼𝗼𝗱 😘𝗺𝗼𝗿𝗻𝗶𝗻𝗴 🌸 ";
    r_text[4] = "🌻𝓖𝓸𝓸𝓭 𝓶𝓸𝓻𝓷𝓲𝓷𝓰 💞 ";
    r_text[5] = "🌼🅖🅞🅞🅓 🅜🅞🅡🅝🅘🅝🅖 🐶 ";
    r_text[6] = "🍃Ⓖⓞⓞⓓ 🌈ⓜⓞⓡⓝⓘⓝⓖ 🥰 ";
    const i = Math.floor(7 * Math.random());
    await client.sendMessage( message.from, { text: r_text[i] + message.client.pushName }, { quoted: message } );
    global.catchError = false;
  }
);

whatsbixby.addCommand( { pattern: ["gan"], desc: GAN, sucReact: "💖",  category: ["all", "chat"], }, async (message, client) => {

    var r_text = new Array();
    r_text[0] = "❀🍃Ǥ⊙⊙ḋ ᐃᵳ✝𝖾ꞅ𝒏⊙⊙𝒏❀🥰❀ ";
    r_text[1] = "☘️Ǥ⊙⊙ḋ ᐃᵳ✝𝖾ꞅ𝒏⊙⊙𝒏 💐 ";
    r_text[2] = "🍃Ǥ⊙⊙ḋ ᐃᵳ✝𝖾ꞅ𝒏⊙⊙𝒏 🥰 ";
    r_text[3] = "🍀Ǥ⊙⊙ḋ ᐃᵳ✝𝖾ꞅ𝒏⊙⊙𝒏 🌸 ";
    r_text[4] = "🌻Ǥ⊙⊙ḋ ᐃᵳ✝𝖾ꞅ𝒏⊙⊙𝒏 💞 ";
    r_text[5] = "🌼Ǥ⊙⊙ḋ ᐃᵳ✝𝖾ꞅ𝒏⊙⊙𝒏 🐶 ";
    r_text[6] = "🍃Ǥ⊙⊙ḋ ᐃᵳ✝𝖾ꞅ𝒏⊙⊙𝒏 🥰 ";
    const i = Math.floor(7 * Math.random());
    await client.sendMessage( message.from, { text: r_text[i] + message.client.pushName }, { quoted: message } );
    global.catchError = false;
  }
);

whatsbixby.addCommand( { pattern: ["ge"], desc: GDE, sucReact: "💖",  category: ["all", "chat"], }, async (message, client) => {
    
 var r_text = new Array();
r_text[0] = "😻ɢᴏᴏᴅ 💗ᴇᴠᴇɴɪɴɢ",
r_text[1] = "❣️𝐺𝛩𝛩𝐷 💓𝛯𝛻𝛯𝛮𝛪𝛮𝐺",
r_text[2] = "🥰ｇｏｏｄ 💞ｅｖｅｎｉｎｇ",
r_text[3] = "🥳𝓰𝓸𝓸𝓭 💝𝓮𝓿𝓮𝓷𝓲𝓷𝓰",
r_text[4] = "😍ムののり 💘乇√乇刀ﾉ刀ム",
r_text[5] = "🤩ᎶᎧᎧᎴ 💕ᏋᏉᏋᏁᎥᏁᎶ",
r_text[6] = "😛 ɠơơɖ 💔ɛ۷ɛŋıŋɠ"
const i = Math.floor(7 * Math.random());
    await client.sendMessage( message.from, { text: r_text[i] + message.client.pushName }, { quoted: message } );
    global.catchError = false;
  }
);

whatsbixby.addCommand( { pattern: ["gn"], desc: GDN, sucReact: "💖",  category: ["all", "chat"], }, async (message, client) => {

    var r_text = new Array();
    r_text[0] = "😘𝙂𝙤𝙤𝙙 🙈𝙣𝙞𝙜𝙝𝙩 💫✨";
    r_text[1] = "🤗𝓖𝓸𝓸𝓭 🧚‍♀𝓷𝓲𝓰𝓱𝓽 ❄️✨";
    r_text[1] = "🌌❡០០ᖱ 🌙⩎ɨ❡ϦƬ 🌎";
    r_text[3] = "😘ցօօժ ⭐️ղíցհԵ 💝";
    r_text[4] = "🌃Ꮐᝪᝪᗞ 🙈ᑎᏆᏀᕼᎢ 💫✨";
    const i = Math.floor(5 * Math.random());
    await client.sendMessage( message.from, { text: r_text[i] + message.client.pushName }, { quoted: message } );
    global.catchError = false;
  }
);
