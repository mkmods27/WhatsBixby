const ezio = require("../events");
const maker = require("mumaker");
let N_T = "Need Text."
let T_L = "Text is too long."
let T_L_1 = "First text is too long."
let T_L_2 = "Secand text is too long."
let T_W = "Can use two words"

ezio.addCommand( { pattern: ["tp-blackpink"], sucReact: "🖼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: ezio.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 12) { global.catchError = true; return await client.sendMessage( message.from, { text: ezio.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-blackpink-logo-style-online-1001.html', [message.client.text])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: ezio.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});

ezio.addCommand( { pattern: ["tp-cutpaper"], sucReact: "🖼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: ezio.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 30) { global.catchError = true; return await client.sendMessage( message.from, { text: ezio.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-art-paper-cut-text-effect-online-1022.html', [message.client.text])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: ezio.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});

// ##############################################
// ############### Graffiti Style ###############
// ##############################################

ezio.addCommand( { pattern: ["tp-graffiti1"], sucReact: "🖼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: ezio.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: ezio.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html', [message.client.text])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: ezio.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});

ezio.addCommand( { pattern: ["tp-graffiti2"], sucReact: "🖼", category: ['logo'], usage: '<word>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: ezio.errorMessage(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: ezio.errorMessage(T_L) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html', [message.client.text, 'Ai Dark Ezio'])
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: ezio.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});

ezio.addCommand( { pattern: ["tp-graffiti3"], sucReact: "🖼", category: ['logo'], usage: '<word1/word2>', }, async (message, client) => {
  if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: ezio.errorMessage(N_T) }, { quoted: message } ); };
  let arry = message.client.text.split("/");
  if (arry.length > 2) { global.catchError = true; return await client.sendMessage( message.from, { text: ezio.errorMessage(T_W) }, { quoted: message } ); };
  if (arry[0].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: ezio.errorMessage(T_L_1) }, { quoted: message } ); };
  if (arry[1].length >= 15) { global.catchError = true; return await client.sendMessage( message.from, { text: ezio.errorMessage(T_L_2) }, { quoted: message } ); };
  await maker.textpro('https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html', arry)
  .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: ezio.config.exif.cap }, { quoted: message }); })
  .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
});

// ##############################################
// ############# mapping takes1 #################
// ##############################################

ezio.config.api.textpro.takes1.map(logo => {
  const { pattern, textLenth, id } = logo; 
  const url = ezio.config.api.textpro.domain + id;
  ezio.addCommand( { pattern, sucReact: "🖼", category: ['logo'], usage: '<word>', }, async (message, client) => {
    if (!message.client.args[0]) { global.catchError = true; return await client.sendMessage( message.from, { text: ezio.errorMessage(N_T) }, { quoted: message } ); };
    if (message.client.text.length >= textLenth) { global.catchError = true; return await client.sendMessage( message.from, { text: ezio.errorMessage(T_L) }, { quoted: message } ); };
    await maker.textpro( url, [message.client.text])
    .then( async (data) => { global.catchError = false; return await client.sendMessage( message.from, { image: { url: data }, caption: ezio.config.exif.cap }, { quoted: message }); })
    .catch( async (err) => { global.catchError = true; return await client.sendErrorMessage( message.from, err, message.key, message ); });
  });
});
