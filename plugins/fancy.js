//const {addCommand} = require('../events')
//const {Fancy} = require('abu-bot')
//const {WORKTYPE} = require('../config');
//var w = WORKTYPE == 'public'? false:true
//addCommand({pattern: 'fancy ?(.*)', fromMe: w, desc: 'Creates fancy text fonts'}, (async (message, client) => {
//if (!client[1]||!message.reply_message.message) return await message.sendReply("Reply to any message with .fancy number\n"+Fancy("example","32"))
//try { var result = Fancy(message.reply_message.message,match[1]) } catch (e) {return await message.sendReply(e.message)}
//await message.reply(result)
//     }))
