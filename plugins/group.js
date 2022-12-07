const whatsbixby = require("../lib/events");
const lang = whatsbixby.getString("github");
const axios = require("axios");

whatsbixby.addCommand({ pattern: ["g-promote"], usage: '<mentions|reply>', sucReact: "😎", category: ["group", "all"], },
  async (message, client) => {
    if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage(whatsbixby.config.reply.owner) }, { quoted: message } ); };
    if (!message.isGroup) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage(whatsbixby.config.reply.group) }, { quoted: message } ); };
    try {
        if (!message.mentions.length == 0) {
            await client.sendMessage( message.from, { text: whatsbixby.infoMessage("😎 Adding new group admin. Using mentions.") }, { quoted: message } );
            await client.groupParticipantsUpdate( message.from, message.mentions, "promote" );
        }
        if (message.quoted) {
            await client.sendMessage( message.from, { text: whatsbixby.infoMessage("😎 Adding new group admin. Using reply.") }, { quoted: message } );
            await client.groupParticipantsUpdate( message.from, [message.quoted.sender], "promote" );
        }
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await client.sendErrorMessage( message.from, err, message.key, message );
    };
  }
);

whatsbixby.addCommand({ pattern: ["g-demote"], usage: '<mentions|reply>', sucReact: "🤐", category: ["group", "all"], },
  async (message, client) => {
    if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage(whatsbixby.config.reply.owner) }, { quoted: message } ); };
    if (!message.isGroup) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage(whatsbixby.config.reply.group) }, { quoted: message } ); };
    try {
        if (!message.mentions.length == 0) {
            await client.sendMessage( message.from, { text: whatsbixby.infoMessage("🤐 Removing new group admin. Using mentions.") }, { quoted: message } );
            await client.groupParticipantsUpdate( message.from, message.mentions, "demote" );
        }
        if (message.quoted) {
            await client.sendMessage( message.from, { text: whatsbixby.infoMessage("🤐 Removing group admin. Using reply.") }, { quoted: message } );
            await client.groupParticipantsUpdate( message.from, [message.quoted.sender], "demote" );
        }
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await client.sendErrorMessage( message.from, err, message.key, message );
    };
  }
);

whatsbixby.addCommand({ pattern: ["g-remove"], usage: '<mentions|reply>', sucReact: "😤", category: ["group", "all"], },
  async (message, client) => {
    if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage(whatsbixby.config.reply.owner) }, { quoted: message } ); };
    if (!message.isGroup) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage(whatsbixby.config.reply.group) }, { quoted: message } ); };
    try {
        if (!message.mentions.length == 0) {
            await client.sendMessage( message.from, { text: whatsbixby.infoMessage("😤 Removing group member. Using mentions.") }, { quoted: message } );
            await client.groupParticipantsUpdate( message.from, message.mentions, "remove" );
        }
        if (message.quoted) {
            await client.sendMessage( message.from, { text: whatsbixby.infoMessage("😤 Removing group member. Using reply.") }, { quoted: message } );
            await client.groupParticipantsUpdate( message.from, [message.quoted.sender], "remove" );
        }
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await client.sendErrorMessage( message.from, err, message.key, message );
    };
  }
);

whatsbixby.addCommand({ pattern: ["g-add"], usage: '<num1/numb2&etc>', sucReact: "😋", category: ["group", "all"], },
  async (message, client) => {
    if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage(whatsbixby.config.reply.owner) }, { quoted: message } ); };
    if (!message.client.text) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage('Enter number: \nEx g-add 1235234509/5672323625/2345456756') }, { quoted: message } ); };
    if (!message.isGroup) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage(whatsbixby.config.reply.group) }, { quoted: message } ); };
    try {
        let array = message.client.text.replace('+', '').replace(' ', '').split('/');
        array.map((item) => (item += "@s.whatsapp.net")); 
        await client.sendMessage( message.from, { text: whatsbixby.infoMessage("😋 Add group member. Using number.") }, { quoted: message } );
        await client.groupParticipantsUpdate( message.from, array, "add" );
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await client.sendErrorMessage( message.from, err, message.key, message );
    };
  }
);

// replace this parameter with  "add", "remove", "demote" or "promote" ===============

whatsbixby.addCommand({ pattern: ["g-name"], usage: '<name>', sucReact: "🙃", category: ["group", "all"], },
  async (message, client) => {
    if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage(whatsbixby.config.reply.owner) }, { quoted: message } ); };
    if (!message.client.text) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage('Enter number: \nEx g-add 1235234509/5672323625/2345456756') }, { quoted: message } ); };
    if (message.client.text > 25) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage('Text is too long') }, { quoted: message } ); };
    if (!message.isGroup) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage(whatsbixby.config.reply.group) }, { quoted: message } ); };
    try {
        await client.sendMessage( message.from, { text: whatsbixby.infoMessage("🙃 Changing group name.") }, { quoted: message } );
        await client.groupUpdateSubject(message.from, message.client.text);
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await client.sendErrorMessage( message.from, err, message.key, message );
    };
  }
);

whatsbixby.addCommand({ pattern: ["g-desc"], usage: '<desc>', sucReact: "🙂", category: ["group", "all"], },
  async (message, client) => {
    if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage(whatsbixby.config.reply.owner) }, { quoted: message } ); };
    if (!message.client.text) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage('Enter number: \nEx g-add 1235234509/5672323625/2345456756') }, { quoted: message } ); };
    if (message.client.text > 75) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage('Text is too long') }, { quoted: message } ); };
    if (!message.isGroup) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage(whatsbixby.config.reply.group) }, { quoted: message } ); };
    try {
        await client.sendMessage( message.from, { text: whatsbixby.infoMessage("🙂 Changing group description.") }, { quoted: message } );
        await client.groupUpdateDescription(message.from, message.client.text);
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await client.sendErrorMessage( message.from, err, message.key, message );
    };
  }
);

//  =========================================================================================

whatsbixby.addCommand({ pattern: ["g-open", "g-close", "g-lock", "g-unlock"], sucReact: "⚙", category: ["group", "all"], },
  async (message, client) => {
    if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage(whatsbixby.config.reply.owner) }, { quoted: message } ); };
    if (!message.isGroup) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage(whatsbixby.config.reply.group) }, { quoted: message } ); };
    try {
        if (message.client.command == "g-open") {
            await client.sendMessage( message.from, { text: whatsbixby.infoMessage("⚙ Opening group") }, { quoted: message } );
            await client.groupSettingUpdate(message.from, "not_announcement");
        } else if (message.client.command == "g-close") {
            await client.sendMessage( message.from, { text: whatsbixby.infoMessage("⚙ Closing group") }, { quoted: message } );
            await client.groupSettingUpdate(message.from, "announcement");
        } else if (message.client.command == "g-unlock") {
            await client.sendMessage( message.from, { text: whatsbixby.infoMessage("⚙ Unlocking group") }, { quoted: message } );
            await client.groupSettingUpdate(message.from, "unlocked");
        } else if (message.client.command == "g-lock") {
            await client.sendMessage( message.from, { text: whatsbixby.infoMessage("⚙ locking group") }, { quoted: message } );
            await client.groupSettingUpdate(message.from, "locked");
        }
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await client.sendErrorMessage( message.from, err, message.key, message );
    };
  }
);

// =========================================================================================

whatsbixby.addCommand({ pattern: ["g-lave"], sucReact: "👋", category: ["group", "all"], },
  async (message, client) => {
    if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage(whatsbixby.config.reply.owner) }, { quoted: message } ); };
    if (!message.isGroup) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage(whatsbixby.config.reply.group) }, { quoted: message } ); };
    try {
        let mentions = await client.groupMetadata(message.from).participants;
        await client.sendMessage( message.from, { text: whatsbixby.infoMessage("👋 Good Bye My Friends. I'M kicking"), mentions }, { quoted: message } );
        await client.groupLeave(message.from)
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await client.sendErrorMessage( message.from, err, message.key, message );
    };
  }
);

whatsbixby.addCommand({ pattern: ["g-link"], sucReact: "🔗", category: ["group", "all"], },
  async (message, client) => {
    if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage(whatsbixby.config.reply.owner) }, { quoted: message } ); };
    if (!message.isGroup) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage(whatsbixby.config.reply.group) }, { quoted: message } ); };
    try {
        const code = await client.groupInviteCode(message.from);
        await client.sendMessage( message.from, { text: `🔗 Group Link: https://chat.whatsapp.com/${code}` }, { quoted: message } );
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await client.sendErrorMessage( message.from, err, message.key, message );
    };
  }
);

whatsbixby.addCommand({ pattern: ["g-revoke"], sucReact: "🔗", category: ["group", "all"], },
  async (message, client) => {
    if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage(whatsbixby.config.reply.owner) }, { quoted: message } ); };
    if (!message.isGroup) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage(whatsbixby.config.reply.group) }, { quoted: message } ); };
    try {
        const code = await client.groupRevokeInvite(message.from);
        await client.sendMessage( message.from, { text: `🔗 Group link revoked.` }, { quoted: message } );
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await client.sendErrorMessage( message.from, err, message.key, message );
    };
  }
);

// =============================================================================

whatsbixby.addCommand({ pattern: ["g-joing"], sucReact: "🆗", category: ["group", "all"], },
  async (message, client) => {
    if (!message.client.text) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage('Enter link') }, { quoted: message } ); };
    if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage(whatsbixby.config.reply.owner) }, { quoted: message } ); };
    try {
        let urlArray = (message.client.args[0]).split("/"); 
        if (!urlArray[2] == 'chat.whatsapp.com') { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage('Enter valid link') }, { quoted: message } ); };
        const response = await client.groupAcceptInvite(urlArray[3]);
        await client.sendMessage( message.from, { text: `⚜ Joined: ${response}` }, { quoted: message } );
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await client.sendErrorMessage( message.from, err, message.key, message );
    };
  }
);

whatsbixby.addCommand({ pattern: ["g-acpt", "g-accept"], sucReact: "🆗", category: ["group", "all"], },
  async (message, client) => {
    if (!message.quoted || message.quoted == null) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage('Reply invite message.') }, { quoted: message } ); };
    if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage(whatsbixby.config.reply.owner) }, { quoted: message } ); };
    try {
        const response = await client.groupAcceptInviteV4(message.quoted.fakeObj.key , message.quoted)
        await client.sendMessage( message.from, { text: `⚜ Joined: ${response}` }, { quoted: message } );
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await client.sendErrorMessage( message.from, err, message.key, message );
    };
  }
);

whatsbixby.addCommand({ pattern: ["invite-info"], sucReact: "🆗", category: ["group", "all"], },
  async (message, client) => {
    if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: whatsbixby.errorMessage(whatsbixby.config.reply.owner) }, { quoted: message } ); };
    try {
        let urlArray = (message.client.args[0]).split("/")[3]; 
        let { id, owner, subject, subjectOwner, subjectTime, creation, desc, descOwner, descId, restrict, announce, size, participants, ephemeralDuration, } = await client.groupGetInviteInfo(urlArray);
        await client.sendMessage( message.from, { text: `⚜ Joined: ${id} ${owner} ${subject} ${subjectOwner} ${subjectTime} ${creation} ${desc} ${descOwner} ${descId} ${restrict} ${announce} ${size} ${ephemeralDuration}` }, { quoted: message } );
        global.catchError = false;
    }  catch (err) {
        global.catchError = true
        await client.sendErrorMessage( message.from, err, message.key, message );
    };
  }
);

// title & participants
// const group = await sock.groupCreate("My Fab Group", ["1234@s.whatsapp.net", "4564@s.whatsapp.net"])
// console.log ("created group with id: " + group.gid)
// sock.sendMessage(group.id, { text: 'hello there' }) // say hello to everyone on the group


