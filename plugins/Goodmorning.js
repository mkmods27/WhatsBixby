//  __        ___   _    _  _____ ____    ____ _____  ________   __
//\ \      / / | | |  / \|_   _/ ___|  | __ )_ _\ \/ / __ ) \ / /
// \ \ /\ / /| |_| | / _ \ | | \___ \  |  _ \| | \  /|  _ \\ V /
//  \ V  V / |  _  |/ ___ \| |  ___) | | |_) | | /  \| |_) || |
//   \_/\_/  |_| |_/_/   \_\_| |____/  |____/___/_/\_\____/ |_| 
//A successful project by ziyan an WhatsApp bot with nodejs and baileys
//Β©2022 ZIYAN
//Good Morning Message plugin by ziyanπ₯
//THIS FILE IS OBFUSATED CONTACT ME FOR OPEN FILE CONTACT LINKS IN README
const whatsbixby = require("../lib/events");
const GDM = "it sends good morning message";
const GDN = "it sends Good Night message";
const GDE = "it sends Good Evening Message";
const GAN = "it sends Good Afternoon message";
whatsbixby.addCommand( { pattern: ["gm"], desc: GDM, sucReact: "π",  category: ["all", "chat"], }, async (message, client) => {

    var r_text = new Array();
    r_text[0] = "βπGoodβ βmorningβπ₯°β ";
    r_text[1] = "βοΈπΊπππ ππππππππ π ";
    r_text[2] = "ππΆπππ π»πππππππ π₯° ";
    r_text[3] = "πππΌπΌπ± ππΊπΌπΏπ»πΆπ»π΄ πΈ ";
    r_text[4] = "π»ππΈπΈπ­ πΆπΈπ»π·π²π·π° π ";
    r_text[5] = "πΌππππ πππ‘ππππ πΆ ";
    r_text[6] = "πβΌβββ πβββ‘ββββ π₯° ";
    const i = Math.floor(7 * Math.random());
    await client.sendMessage( message.from, { text: r_text[i] + message.client.pushName }, { quoted: message } );
    global.catchError = false;
  }
);

whatsbixby.addCommand( { pattern: ["gan"], desc: GAN, sucReact: "π",  category: ["all", "chat"], }, async (message, client) => {

    var r_text = new Array();
    r_text[0] = "βπΗ€ββαΈ αα΅³βπΎκπββπβπ₯°β ";
    r_text[1] = "βοΈΗ€ββαΈ αα΅³βπΎκπββπ π ";
    r_text[2] = "πΗ€ββαΈ αα΅³βπΎκπββπ π₯° ";
    r_text[3] = "πΗ€ββαΈ αα΅³βπΎκπββπ πΈ ";
    r_text[4] = "π»Η€ββαΈ αα΅³βπΎκπββπ π ";
    r_text[5] = "πΌΗ€ββαΈ αα΅³βπΎκπββπ πΆ ";
    r_text[6] = "πΗ€ββαΈ αα΅³βπΎκπββπ π₯° ";
    const i = Math.floor(7 * Math.random());
    await client.sendMessage( message.from, { text: r_text[i] + message.client.pushName }, { quoted: message } );
    global.catchError = false;
  }
);

whatsbixby.addCommand( { pattern: ["ge"], desc: GDE, sucReact: "π",  category: ["all", "chat"], }, async (message, client) => {
    
 var r_text = new Array();
r_text[0] = "π»Ι’α΄α΄α΄ πα΄α΄ α΄Ι΄ΙͺΙ΄Ι’",
r_text[1] = "β£οΈπΊπ©π©π· ππ―π»π―π?πͺπ?πΊ",
r_text[2] = "π₯°ο½ο½ο½ο½ πο½ο½ο½ο½ο½ο½ο½",
r_text[3] = "π₯³π°πΈπΈπ­ ππ?πΏπ?π·π²π·π°",
r_text[4] = "πγ γ?γ?γ πδΉβδΉεοΎεγ ",
r_text[5] = "π€©αΆα§α§α΄ πααααα₯ααΆ",
r_text[6] = "π Ι Ζ‘Ζ‘Ι πΙΫ·ΙΕΔ±ΕΙ "
const i = Math.floor(7 * Math.random());
    await client.sendMessage( message.from, { text: r_text[i] + message.client.pushName }, { quoted: message } );
    global.catchError = false;
  }
);

whatsbixby.addCommand( { pattern: ["gn"], desc: GDN, sucReact: "π",  category: ["all", "chat"], }, async (message, client) => {

    var r_text = new Array();
    r_text[0] = "πππ€π€π ππ£ππππ© π«β¨";
    r_text[1] = "π€ππΈπΈπ­ π§ββπ·π²π°π±π½ βοΈβ¨";
    r_text[1] = "πβ‘α α α± πβ©Ι¨β‘Ο¦Ζ¬ π";
    r_text[3] = "πΦΦΦΥͺ β­οΈΥ²Γ­ΦΥ°Τ΅ π";
    r_text[4] = "πααͺαͺα πααααΌα’ π«β¨";
    const i = Math.floor(5 * Math.random());
    await client.sendMessage( message.from, { text: r_text[i] + message.client.pushName }, { quoted: message } );
    global.catchError = false;
  }
);
