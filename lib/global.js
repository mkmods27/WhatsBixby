//  __        ___   _    _  _____ ____    ____ _____  ________   __
//\ \      / / | | |  / \|_   _/ ___|  | __ )_ _\ \/ / __ ) \ / /
// \ \ /\ / /| |_| | / _ \ | | \___ \  |  _ \| | \  /|  _ \\ V /
//  \ V  V / |  _  |/ ___ \| |  ___) | | |_) | | /  \| |_) || |
//   \_/\_/  |_| |_/_/   \_\_| |____/  |____/___/_/\_\____/ |_| 
//A successful project by ziyan an WhatsApp bot with nodejs and baileys
//©2022 ZIYAN

const fs = require("fs")
global.user = require("./database/data/user")
global.group = require("./database/data/group")
global._user = JSON.parse(fs.readFileSync("./lib/database/data/user.json"))
global._group = JSON.parse(fs.readFileSync("./lib/database/data/group.json"))
global.owner = ["9446072492"];
global.mess = (type, m) => {
    let msg = { wait: 'Wait, in progress', owner: 'Perintah ini hanya dapat digunakan oleh Owner!', premium: 'Perintah ini hanya dapat digunakan oleh Premium!', group: 'Perintah ini hanya dapat digunakan di group!', private: 'Perintah ini hanya dapat digunakan di private chat!', admin: 'Perintah ini hanya dapat digunakan oleh admin group!', botAdmin: 'Bot bukan admin, tidak dapat mengakses fitur tersebut', bot: 'Fitur ini hanya dapat diakses oleh Bot', dead: 'Fitur ini sedang dimatikan!', media: 'Reply media', error: "No Results Found" }[type]
    if (msg) return m.reply(msg, m.from, { quoted: m })
}
