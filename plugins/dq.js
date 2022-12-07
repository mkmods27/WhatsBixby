const whatsbixby = require("../lib/events");
const axios = require("axios");
const conf = require("../lib/config");
const DQM = "this plugins send dq images"

whatsbixby.addCommand( { pattern: ["dq"],desc: DQM, sucReact: "🔥",  category: ["all", "create"], }, async (message, client) => {

    var fetch_img = new Array();

    fetch_img[0] = "https://telegra.ph/file/7b2be384063da0fdabccc.jpg";

    fetch_img[1] = "https://telegra.ph/file/236346b7b1d240435f778.jpg";

    fetch_img[2] = "https://telegra.ph/file/ef08a3473aa93f2f18579.jpg";

    fetch_img[3] = "https://telegra.ph/file/eb11ef8f52a17c1fce7e2.jpg";

    fetch_img[4] = "https://telegra.ph/file/faf24bc04abe6a87aad4d.jpg";

    fetch_img[5] = "https://telegra.ph/file/1c670a29a39ceccbd15f8.jpg";

    fetch_img[6] = "https://telegra.ph/file/f1f09dfc3d56e4bc97426.jpg";

    fetch_img[7] = "https://telegra.ph/file/19e94ef2c199781b789f3.jpg";

    fetch_img[8] = "https://telegra.ph/file/803100c69c12fb5a1a0b5.jpg";

    fetch_img[9] = "https://telegra.ph/file/7f601f06ea773cb537cb8.jpg";

    fetch_img[10] = "https://telegra.ph/file/501fd6c9be971a4607bfb.jpg";

    fetch_img[11] = "https://telegra.ph/file/aaab745284254e2e1ef62.jpg";
 
    fetch_img[12] = "https://telegra.ph/file/a6d3884b1475648fc70a6.jpg";
 
    fetch_img[13] = "https://telegra.ph/file/3c7b22e0d96e6d547e770.jpg";

    fetch_img[14] = "https://telegra.ph/file/058c93ddbe76b61e1205b.jpg";

    fetch_img[15] = "https://telegra.ph/file/b2e7cba85ee72873a650a.jpg";

    fetch_img[16] = "https://telegra.ph/file/312467ab9ddacb75cec02.jpg";

    fetch_img[17] = "https://telegra.ph/file/3893ac77cc4d28c1bfc9a.jpg";

    fetch_img[18] = "https://telegra.ph/file/b113587a479d553e33333.jpg";

    fetch_img[19] = "https://telegra.ph/file/30232d4eeee17ba1c8e61.jpg";
    
    fetch_img[20] = "https://telegra.ph/file/664b2143d137594ffde56.jpg";
    
    fetch_img[21] = "https://telegra.ph/file/80d50fedd9297673265a1.jpg";
    
    fetch_img[22] = "https://telegra.ph/file/fd1bebb0a9693bd4cd075.jpg";
   
    fetch_img[23] = "https://telegra.ph/file/c29040b66ff026af1ec80.jpg";
    
    fetch_img[24] = "https://telegra.ph/file/686949da0b5507bee325c.jpg";
    
    fetch_img[25] = "https://telegra.ph/file/8f82c47a5728ce77fb736.jpg";
    
    fetch_img[26] = "https://telegra.ph/file/61a9482b76f03ed87d181.jpg";

    fetch_img[27] = "https://telegra.ph/file/a461ea0e42f8046abeb2d.jpg";

    fetch_img[28] = "https://telegra.ph/file/4625ef16e6ca4bde885cf.jpg";

    fetch_img[29] = "https://telegra.ph/file/3b9f7ca38acfa7a4447a7.jpg";

    fetch_img[30] = "https://telegra.ph/file/f2ec6dbf948b99319add1.jpg";

    fetch_img[31] = "https://telegra.ph/file/84960002202ed92bc720e.jpg";

    fetch_img[32] = "https://telegra.ph/file/a4cfbfcb014cfdbeeb55d.jpg";

    fetch_img[33] = "https://telegra.ph/file/7d74e7c311f9b74f4d9c3.jpg";

    fetch_img[34] = "https://telegra.ph/file/21506f813bab477532f3b.jpg";

    
var i = Math.floor(fetch_img.length * Math.random());
    const Message = {image: { url: fetch_img[i] },caption: whatsbixby.config.exif.cap,
    };
    await client.sendMessage(message.from, Message, { quoted: message });
    global.catchError = false;
  }
);

