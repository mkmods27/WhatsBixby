//  __        ___   _    _  _____ ____    ____ _____  ________   __
//\ \      / / | | |  / \|_   _/ ___|  | __ )_ _\ \/ / __ ) \ / /
// \ \ /\ / /| |_| | / _ \ | | \___ \  |  _ \| | \  /|  _ \\ V /
//  \ V  V / |  _  |/ ___ \| |  ___) | | |_) | | /  \| |_) || |
//   \_/\_/  |_| |_/_/   \_\_| |____/  |____/___/_/\_\____/ |_| 
//A successful project by ziyan an WhatsApp bot with nodejs and baileys
//©2022 ZIYAN
//THIS IS A RANDOM ANIME GENERATING PLUGIN BY ZIYAN
//THIS FILE WILL BE OBFUSCATED CONTACT ME FOR OPEN FILES

const whatsbixby = require("../lib/events");
const axios = require("axios");
const conf = require("../lib/config");
const lang = whatsbixby.getString("wallpaper");

whatsbixby.addCommand( { pattern: ["anime"],desc: lang.WP, sucReact: "😁",  category: ["all", "create"], }, async (message, client) => {

    var fetch_from_bixbyservers = new Array();

    fetch_from_bixbyservers[0] = "https://i.ibb.co/FwPP04q/images.jpg";
    fetch_from_bixbyservers[1] = "https://i.ibb.co/GH2tWJ4/images-1.jpg";
    fetch_from_bixbyservers[2] = "https://i.ibb.co/Mf79pVH/download.jpg";
    fetch_from_bixbyservers[3] = "https://i.ibb.co/b11BDWH/images-2.jpg";
    fetch_from_bixbyservers[4] = "https://i.ibb.co/7v1m94x/images-3.jpg";
    fetch_from_bixbyservers[5] = "https://i.ibb.co/vdKJxNX/images-4.jpg";
    fetch_from_bixbyservers[6] = "https://i.ibb.co/cvKvyzR/images-5.jpg";
    fetch_from_bixbyservers[7] = "https://i.ibb.co/WWRt8vZ/images-6.jpg";
    fetch_from_bixbyservers[8] = "https://i.ibb.co/m8Xg7Gj/images-7.jpg";
    fetch_from_bixbyservers[9] = "https://i.ibb.co/FDYQHzB/images-8.jpg";
    fetch_from_bixbyservers[10] = "https://i.ibb.co/fFTNXcy/images-9.jpg";
    fetch_from_bixbyservers[11] = "https://i.ibb.co/rygwb0Q/images-10.jpg";
    fetch_from_bixbyservers[12] = "https://i.ibb.co/ts8y9rC/images-11.jpg";
    fetch_from_bixbyservers[13] = "https://i.ibb.co/VMHd02c/images-12.jpg";
    fetch_from_bixbyservers[14] = "https://i.ibb.co/D1j3Np6/images-13.jpg";
    fetch_from_bixbyservers[15] = "https://i.ibb.co/qWnhqVf/images-14.jpg";
    fetch_from_bixbyservers[16] = "https://i.ibb.co/J7tr09N/images-15.jpg";
    fetch_from_bixbyservers[17] = "https://i.ibb.co/NVhyQ1V/images-16.jpg";
    fetch_from_bixbyservers[18] = "https://i.ibb.co/PcV78Mv/images-17.jpg";
    fetch_from_bixbyservers[19] = "https://i.ibb.co/hYFY5PZ/images-18.jpg";
    fetch_from_bixbyservers[20] = "https://i.ibb.co/n0vd5yR/images-19.jpg";
    fetch_from_bixbyservers[21] = "https://i.ibb.co/hybc9KX/images-20.jpg";
    fetch_from_bixbyservers[22] = "https://i.ibb.co/6JW0sL7/images-21.jpg";
    fetch_from_bixbyservers[23] = "https://i.ibb.co/8MX592D/images-22.jpg";
    fetch_from_bixbyservers[24] = "https://i.ibb.co/gPtrHPW/images-23.jpg";
    fetch_from_bixbyservers[25] = "https://i.ibb.co/mGtWXyW/images-24.jpg";
    fetch_from_bixbyservers[26] = "https://i.ibb.co/HD4rrbn/images-25.jpg";
    fetch_from_bixbyservers[27] = "https://i.ibb.co/8mG4Xht/images-26.jpg";
    fetch_from_bixbyservers[28] = "https://i.ibb.co/yF8qzgQ/images-27.jpg";
    fetch_from_bixbyservers[29] = "https://i.ibb.co/vvhTtL9/images-28.jpg";
    fetch_from_bixbyservers[30] = "https://i.ibb.co/x8WZS1G/images-29.jpg";
    fetch_from_bixbyservers[31] = "https://i.ibb.co/hsb9c1N/images-30.jpg";
    fetch_from_bixbyservers[32] = "https://i.ibb.co/tQ2r1d1/images-31.jpg";
    fetch_from_bixbyservers[33] = "https://i.ibb.co/5Mr70MY/images-32.jpg";
    fetch_from_bixbyservers[34] = "https://i.ibb.co/340nk6r/images-33.jpg";
    fetch_from_bixbyservers[35] = "https://i.ibb.co/3yWYZ9X/images-34.jpg";
    fetch_from_bixbyservers[36] = "https://i.ibb.co/59G5Gpc/images-35.jpg";
    fetch_from_bixbyservers[37] = "https://i.ibb.co/j48QYXt/images-36.jpg";
    fetch_from_bixbyservers[38] = "https://i.ibb.co/Nx2FHGB/images-37.jpg";
    fetch_from_bixbyservers[39] = "https://i.ibb.co/7tc4Hph/images-38.jpg";
    fetch_from_bixbyservers[40] = "https://i.ibb.co/jkKc78B/images-39.jpg";
    fetch_from_bixbyservers[41] = "https://i.ibb.co/RTqRWn7/images-40.jpg";
    fetch_from_bixbyservers[42] = "https://i.ibb.co/kS6LW3q/images.jpg";
    fetch_from_bixbyservers[43] = "https://i.ibb.co/THdY0MS/images-1.jpg";
    fetch_from_bixbyservers[44] = "https://i.ibb.co/n0P7KVt/images-2.jpg";
    fetch_from_bixbyservers[45] = "https://i.ibb.co/MnZn5Tx/images-3.jpg";
    fetch_from_bixbyservers[46] = "https://i.ibb.co/SVwMXrG/images-4.jpg";
    fetch_from_bixbyservers[47] = "https://i.ibb.co/2jZb1mc/images-5.jpg";
    fetch_from_bixbyservers[48] = "https://i.ibb.co/sPhWTxD/images-7.jpg";
    fetch_from_bixbyservers[49] = "https://i.ibb.co/pjcFyzr/images-6.jpg";
    fetch_from_bixbyservers[50] = "https://i.ibb.co/XFSmcfj/images-9.jpg";
    fetch_from_bixbyservers[51] = "https://i.ibb.co/TM8Qxt9/images-8.jpg";
    fetch_from_bixbyservers[52] = "https://i.ibb.co/f9RQ30f/images-10.jpg";
    fetch_from_bixbyservers[53] = "https://i.ibb.co/9ZRBQHP/images-11.jpg";
    fetch_from_bixbyservers[54] = "https://i.ibb.co/Sm9PmLT/images-12.jpg";
    fetch_from_bixbyservers[55] = "https://i.ibb.co/B2BzjdR/images-13.jpg";
    fetch_from_bixbyservers[56] = "https://i.ibb.co/HB8kDqr/images-14.jpg";
    fetch_from_bixbyservers[57] = "https://i.ibb.co/r6HXkC6/images-15.jpg";
    fetch_from_bixbyservers[58] = "https://i.ibb.co/6BMF531/images-16.jpg";
    fetch_from_bixbyservers[59] = "https://i.ibb.co/47b8YYW/images-17.jpg";
    fetch_from_bixbyservers[60] = "https://i.ibb.co/bzZ66dN/images-18.jpg";
    fetch_from_bixbyservers[61] = "https://i.ibb.co/kmKGSJ1/images-19.jpg";
    fetch_from_bixbyservers[62] = "https://i.ibb.co/nDfrfgd/images-20.jpg";
    fetch_from_bixbyservers[63] = "https://i.ibb.co/bXf8Tj1/images-21.jpg";
    fetch_from_bixbyservers[64] = "https://i.ibb.co/4pQxm7k/images-22.jpg";
    fetch_from_bixbyservers[65] = "https://i.ibb.co/ngLqQdh/images-23.jpg";
    fetch_from_bixbyservers[66] = "https://i.ibb.co/Y3RtBPB/images-24.jpg";
    fetch_from_bixbyservers[67] = "https://i.ibb.co/0y2vDZ8/images-25.jpg";
    fetch_from_bixbyservers[68] = "https://i.ibb.co/0Gzdx1d/images-26.jpg";
    fetch_from_bixbyservers[69] = "https://i.ibb.co/54wVtm8/images-27.jpg";
    fetch_from_bixbyservers[70] = "https://i.ibb.co/bQkJTZm/images-28.jpg";
    fetch_from_bixbyservers[71] = "https://i.ibb.co/hCNMWqG/images-29.jpg";
    fetch_from_bixbyservers[72] = "https://i.ibb.co/qDphPx9/images-30.jpg";
    fetch_from_bixbyservers[73] = "https://i.ibb.co/M8jRW8N/IMG-20210410-WA0308.png";
    fetch_from_bixbyservers[74] = "https://i.ibb.co/k1nmStf/IMG-20210410-WA0309.jpg";
    fetch_from_bixbyservers[75] = "https://i.ibb.co/Ks5pgsB/IMG-20210410-WA0310.jpg";
    fetch_from_bixbyservers[76] = "https://i.ibb.co/0YNzZxQ/IMG-20210410-WA0317.jpg";
    fetch_from_bixbyservers[77] = "https://i.ibb.co/T0KbLFN/IMG-20210410-WA0318.jpg";
    fetch_from_bixbyservers[78] = "https://i.ibb.co/wgQWTKy/IMG-20210410-WA0319.jpg";

var i = Math.floor(fetch_from_bixbyservers.length * Math.random());
    const Message = {image: { url: fetch_from_bixbyservers[i] },caption: whatsbixby.config.exif.cap,
    };
    await client.sendMessage(message.from, Message, { quoted: message });
    global.catchError = false;
  }
);
