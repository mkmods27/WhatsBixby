const andikudamkk = require('../lib/events');
const got = require('got');
const Config = require('../config');
andikudamkk.addCommand({pattern: ['happymod'], fromMe: false, desc: "to get mode apk",sucReact: "😁",  category: ["all", "create"],}, async (message, client) => {
	/*(function(_0x5e518a,_0x460e98){var _0x16c13e=_0x12b5,_0x25afc6=_0x5e518a();while(!![]){try{var _0x16ecde=parseInt(_0x16c13e(0x7c))/0x1+-parseInt(_0x16c13e(0x74))/0x2*(-parseInt(_0x16c13e(0x76))/0x3)+parseInt(_0x16c13e(0x78))/0x4*(-parseInt(_0x16c13e(0x73))/0x5)+parseInt(_0x16c13e(0x7b))/0x6+-parseInt(_0x16c13e(0x7a))/0x7+-parseInt(_0x16c13e(0x79))/0x8+-parseInt(_0x16c13e(0x75))/0x9;if(_0x16ecde===_0x460e98)break;else _0x25afc6['push'](_0x25afc6['shift']());}catch(_0x66f2ec){_0x25afc6['push'](_0x25afc6['shift']());}}}(_0x3642,0x24ab1));function hi(){var _0x5ce736=_0x12b5;console[_0x5ce736(0x77)](_0x5ce736(0x7d));}function _0x12b5(_0x3018c8,_0x5ca40b){var _0x36426b=_0x3642();return _0x12b5=function(_0x12b5e8,_0x5e4274){_0x12b5e8=_0x12b5e8-0x73;var _0x5a560d=_0x36426b[_0x12b5e8];return _0x5a560d;},_0x12b5(_0x3018c8,_0x5ca40b);}hi();function _0x3642(){var _0x3f9765=['253022FMcSMi','927606UoMqrQ','51268EfPIVT','Hello\x20World!','5XPTLFE','70wqWTcD','584550csvAFc','13359oWLlqB','log','391508LrvvPM','100464vBRFRV'];_0x3642=function(){return _0x3f9765;};return _0x3642();}*/const misk = message.client.text;
if (!misk) return await client.sendMessage(message.from, { text :"need an apk name to get mod"},{ quoted: message })
	const url = `https://api.zeks.xyz/api/happymod?apikey=&q=${misk}&apikey=1hroZ3ju94h0PBjCNKsfhYaSuLs`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await client.sendMessage( message.from, { text:
		'*📕 ' + Lang.NAMEY +'* ```' + json.result[0].title + '```\n\n' + 
		'*📘 ' + Lang.SIZE +'* ```' + json.result[0].size + '```\n\n\n' + 
		'*📗 ' + Lang.DOWNLOAD +':* ```' + json.result[0].link + '```\n', }, { quoted: message });
	} catch {
		return await client.sendMessage( message.from, { text : "no data found on this apk"},{ quoted: message });
	}
});
