const whatsbixby = require('../lib/events');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const ll ="*```Enter a word```"
const Ln = "Free Fire logo maker"
const code = "*_50 ff LOGO PACK_*\n\n*🧞‍♂️.ff01 : Makes ff logo*\n\n🧞‍♂️.ff02 : Makes ff logo**\n\n*🧞‍♂️.ff03 : Makes ff logo*\n\n🧞‍♂️.ff04 : Makes ff logo*\n\n🧞‍♂️.ff5 : Makes ff logo*\n\n🧞‍♂️.ff6 : Makes ff logo*\n\n🧞‍♂️.ff07 : Makes ff logo*\n\n🧞‍♂️.ff08 : Makes ff logo*\n\n🧞‍♂️.ff09 : Makes ff logo*\n\n🧞‍♂️.ff10 : Makes ff logo*\n\n🧞‍♂️.ff12 : Makes ff logo*\n\n🧞‍♂️.ff13 : Makes ff logo*\n\n🧞‍♂️.ff14 : Makes ff logo*\n\n🧞‍♂️.ff15 : Makes ff logo*\n\n🧞‍♂️.ff16 : Makes ff logo*\n\n🧞‍♂️.ff17 : Makes ff logo*\n\n🧞‍♂️.ff18 : Makes ff logo*\n\n🧞‍♂️.ff19 : Makes ff logo*\n\n🧞‍♂️.ff20 : Makes ff logo*\n\n🧞‍♂️.ff21 : Makes ff logo*\n\n🧞‍♂️.ff22 : Makes ff logo*\n\n🧞‍♂️.ff23 : Makes ff logo*\n\n🧞‍♂️.ff24 : Makes ff logo*\n\n🧞‍♂️.ff25 : Makes ff logo*\n\n🧞‍♂️.ff26 : Makes ff logo*\n\n🧞‍♂️.ff27 : Makes ff logo*\n\n🧞‍♂️.ff28 : Makes ff logo*\n\n🧞‍♂️.ff29 : Makes ff logo*\n\n🧞‍♂️.ff30 : Makes ff logo*\n\n🧞‍♂️.ff31 : Makes ff logo*\n\n🧞‍♂️.ff32 : Makes ff logo*\n\n🧞‍♂️.ff33 : Makes ff logo*\n\n🧞‍♂️.ff34 : Makes ff logo*\n\n🧞‍♂️.ff35 : Makes ff logo*\n\n🧞‍♂️.ff36 : Makes ff logo*\n\n🧞‍♂️.ff37 : Makes ff logo*\n\n🧞‍♂️.ff38 : Makes ff logo*\n\n🧞‍♂️.ff39 : Makes ff logo*\n\n🧞‍♂️.ff40 : Makes ff logo*\n\n🧞‍♂️.ff41 : Makes ff logo*\n\n🧞‍♂️.ff42 : Makes ff logo*\n\n🧞‍♂️.ff43 : Makes ff logo*\n\n🧞‍♂️.ff44 : Makes ff logo*\n\n🧞‍♂️.ff45 : Makes ff logo*\n\n🧞‍♂️.ff46 : Makes ff logo*\n\n🧞‍♂️.ff47 : Makes ff logo*\n\n🧞‍♂️.ff48 : Makes ff logo*\n\n🧞‍♂️.ff49 : Makes ff logo*\n\n🧞‍♂️.ff50 : Makes ff logo*\n\n"
   
 whatsbixby.addCommand({pattern: ['ffpack'], desc: Ln ,sucReact: "⚒️",  category: ["ff","all"]}, async (message, client) => { await client.sendMessage(message.from, { text : code },{ quoted: message })
  });
  
 whatsbixby.addCommand({ pattern: ['ff01'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/ecf60ef31d7e75c2620fd.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 whatsbixby.addCommand({ pattern: ['ff02'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/db68993a2656b4748a16a.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff03'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (message.client.text === '') return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/4cc2fe3ca2a712d3b14cc.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
    });
 whatsbixby.addCommand({ pattern: ['ff04'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/0a25356767c7833bbd9ca.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff05'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/33eb446f4132e76a2fd58.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff06'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/2f7de65a46ed366a63676.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff07'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/e5f8d6f2e9f9000ebe3d9.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff08'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/6090aadefff57762e8b35.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff09'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/6ad8890337f9f2ea3b92a.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff10'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/244312383300b34f99bcc.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ffff'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/b670c4eca0fafdb88a7f0.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff12'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/95a088f7b0453d4d82b7a.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff13'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/fd7500684c9ae986befc3.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff14'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/1e962653c4412f5271844.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff15'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/24483aa07e99edad88b4c.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff16'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/129a6861e1efdfd0f7bca.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff17'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/deab8459bd6d06b4f9421.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff18'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/696f93289f32687d3b4f7.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff19'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/f0145f46dff1ed493e62b.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff20'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/f577262bce9b3733402ea.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff21'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/099f8580a45433eb6688c.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff22'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/a1fe3fe9e295c24256ede.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff23'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/2056e2cdd3a30971da0a6.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff24'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/c730c8c57cfccb7756dc4.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff25'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/d3749dfe51e3f13012e8e.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff26'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/f376a881b40c1e994d75d.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff27'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/1d307457e0778ae9b0d44.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
   whatsbixby.addCommand({ pattern: ['ff28'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/bf886fc083f66fb404ff1.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 whatsbixby.addCommand({ pattern: ['ff29'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/d60199bc191c261497813.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 whatsbixby.addCommand({ pattern: ['ff30'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/a4c9fa2db7598d876345b.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 whatsbixby.addCommand({ pattern: ['ff31'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/0c87d73846b138193b203.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 whatsbixby.addCommand({ pattern: ['ff32'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/c41f0c5ec4a3874dfd7fe.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 whatsbixby.addCommand({ pattern: ['ff33'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/8c082e45671f2726c4010.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff34'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/dd660681c36a3126c590f.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 whatsbixby.addCommand({ pattern: ['ff35'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/6c1412d523455abb2677a.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 whatsbixby.addCommand({ pattern: ['ff36'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/a421f4d85a38545be4926.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 whatsbixby.addCommand({ pattern: ['ff37'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/f0568921ca66fc0b01b83.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff38'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/816aaa82629bfa202f3d4.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 whatsbixby.addCommand({ pattern: ['ff39'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/91ec01a9b6375b414803c.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 whatsbixby.addCommand({ pattern: ['ff40'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/5e0c5e4999b8aa21c021f.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

       await client.sendMessage( message.from, Message,{ quoted: message })
});
 whatsbixby.addCommand({ pattern: ['ff41'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/0a9ae825b02db2cc591bb.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff42'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/0df898e2ad77b8f69f91c.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
whatsbixby.addCommand({ pattern: ['ff43'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/e354930c0989a3077485e.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 whatsbixby.addCommand({ pattern: ['ff44'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/b41fc723da2d9835f0151.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff45'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/bc64365aa73d60de3dcfd.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 whatsbixby.addCommand({ pattern: ['ff46'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/b82196ba630383df9da76.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff47'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/8013933a6603cf2d75f94.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };


        await client.sendMessage( message.from, Message,{ quoted: message })
});
  whatsbixby.addCommand({ pattern: ['ff48'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/4cd1004d8c8f3a800138f.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 whatsbixby.addCommand({ pattern: ['ff49'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/7e99ffe44f490fd5ba4bf.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 whatsbixby.addCommand({ pattern: ['ff50'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${message.client.text}&img=https://telegra.ph/file/816aaa82629bfa202f3d4.jpg`;

const Message = { image: { url:  ttinullimage }, caption: whatsbixby.config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

 });
