const whatsbixby = require("../lib/events");
const Config = require("../config");
whatsbixby.addCommand(
  {
    pattern: ["botstatus"],
    desc: "to check the bot status",
    sucReact: "ðŸ’¥",
    category: ["system", "all"],
  },
  async (message, client) => {
await client.sendMessage(message.from,
{text : "bot status\n\n"
+" âžœVERSION :"+ Config.VERSION+"\n"
+" âžœSESSION_ID :"+Config.SESSION_ID+"\n"
+" âžœPASSWORD :"+Config.PASSWORD+"\n"
+" âžœU_STATUS :"+Config.U_STATUS+"\n"
+" âžœBGM-BOT :"+Config.BGMBOT+"\n"
+" âžœWORKTYPE :"+Config.WORKTYPE+"\n"
+" âžœLANGUAGE :"+Config.LANG+"\n"
+" âžœOWNER :"+Config.OWNER+"\n\n"
+"           ---chat-bot---"+"\n\n"
+" âžœINBOX :"+Config.auto.chat.inbox+"\n"
+" âžœGROUP :"+Config.auto.chat.group+"\n"
+" âžœFOOTER :"+Config.FOOTER+"\n"
+" âžœINSTAGRAM :"+Config.INSTAGRAM+"\n"
+" âžœPACKNAME :"+Config.PACKNAME+"\n"
+" âžœGITHUB :"+Config.GIT+"\n"
+" âžœWEBSITE :"+Config.WEB+"\n"
+" âžœYT :"+Config.YT+"\n"
+" âžœCAPTION :"+Config.CAPTION+"\n"
+" âžœSUDO :"+Config.SUDO+"\n"
+" âžœTUTORIAL :"+Config.VIDEO+"\n"
+" âžœWA-GRP :"+Config.WAGRP+"\n\n"
+"           ---images---"+"\n\n"
+" âžœALIVE :"+Config.ALIVE+"\n"
+" âžœIMG1 :"+Config.IMG11+"\n"
+" âžœIMG2 :"+Config.IMG12+"\n"
+" âžœERORR :"+Config.ERRIMG+"\n"
 }, { quoted: message });
});
