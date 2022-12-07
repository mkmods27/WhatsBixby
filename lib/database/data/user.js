/**
   * Create By zahwazein
   * Contact -
   * Follow https://github.com/zhwzein
*/

const fs = require("fs")
const toMs = require("ms")
const cron = require('node-cron')
const config = JSON.parse(fs.readFileSync('./lib/database/config.json'))
const time = require("moment-timezone").tz(config.timezone).format('DD/MM HH:mm:ss')

// STORE USERDATA
const addUser = (userId, name, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === userId) {
            position = true
        }
    })
    if (position === false) {
        const obj = { id: userId, verified: false, name: name, time: time, limit: 0, balance: 0, premium: false }
        _db.push(obj)
        fs.writeFileSync('./lib/database/user.json', JSON.stringify(_db, null, 4))
        return false
    }
}
const checkUser = (userId, _db) => {
   let status = false
   Object.keys(_db).forEach((i) => {
      if (_db[i].id === userId) {
         status = true
      }
   })
   return status
}

// LIMIT USERDATA
const isLimit = (userId, isPremium, isOwner, limitCount, _db) => {
	if (isPremium || isOwner) return false
	let found = false
	for (let i of _db) {
		if (i.id === userId) {
		   if (i.limit >= limitCount) {
			  found = true
			  return true
		   } else {
			  found = true
			  return false
		   }
		}
	 }
	if (found === false) {
		const obj = { id: userId, limit: 0 }
		_db.push(obj)
		fs.writeFileSync("./lib/database/user.json", JSON.stringify(_db, null, 4))
		return false
	}
}
const limitAdd = (userId, isPremium, isOwner, _db) => {
	if (isPremium || isOwner) return false
	let found = false
	Object.keys(_db).forEach((i) => {
		if (_db[i].id === userId) {
			found = i
		}
	})
	if (found !== false) {
		_db[found].limit += 1
		fs.writeFileSync("./lib/database/user.json", JSON.stringify(_db, null, 4))
	}
}
const getLimit = (userId, _db) => {
	let pos = null
	let found = false
	Object.keys(_db).forEach((i) => {
	   if (_db[i].id === userId) {
		  pos = i
		  found = true
	   }
	})
	if (found === false && pos === null) {
	   const obj = { id: userId, limit: 0 }
	   _db.push(obj)
	   fs.writeFileSync("./lib/database/user.json", JSON.stringify(_db, null, 4))
	   return 0
	} else {
	   return _db[pos].limit
	}
 }

// BALANCE USERDATA
const addBalance = (userId, amount, _db) => {
	let position = false
	Object.keys(_db).forEach((i) => {
		if (_db[i].id === userId) {
			position = i
		}
	})
	if (position !== false) {
		_db[position].balance += amount
		fs.writeFileSync("./lib/database/user.json", JSON.stringify(_db, null, 4))
	}
}
const getBalance = (userId, _db) => {
	let position = false
	Object.keys(_db).forEach((i) => {
		if (_db[i].id === userId) {
			position = i
		}
	})
	if (position !== false) {
		return _db[position].balance
	} else {
		return 0
	}
}

// PREMIUM USERDATA
const addPremiumUser = (userId, expired, _db) => {
	let found = false
	Object.keys(_db).forEach((i) => {
		if (_db[i].id === userId) {
			found = i
		}
	})
	if (found !== false) {
		_db[found].premium = true
        _db[found].expired = Date.now() + toMs(expired)
		fs.writeFileSync("./lib/database/user.json", JSON.stringify(_db, null, 4))
	}
}
const delPremiumUser = (userId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === userId) {
            found = i
        }
    })
    if (found !== false) {
		_user[found].limit = 0
		_user[found].premium = false
		delete _user[found].expired
		console.log(`Premium Deleted: ${_user[found].id}`)
		fs.writeFileSync("./lib/database/user.json", JSON.stringify(_user, null, 4))
	}
}
const getPremiumPosition = (userId, _db) => {
	let position = null
	Object.keys(_db).forEach((i) => {
		if (_db[i].id === userId) {
			position = i;
		}
	})
	if (position !== null) {
		return position
	}
}
const checkPremiumUser = (userId, isOwner, _db) => {
	if (isOwner) return true
	let position = null
	Object.keys(_db).forEach((i) => {
		if (_db[i].id === userId) {
			position = i
		}
	})
	if (position !== null) {
		return _db[position].premium
	}
}
const getPremiumExpired = (userId, _db) => {
	let position = null
	Object.keys(_db).forEach((i) => {
		if (_db[i].id === userId) {
			position = i
		}
	})
	if (position !== null) {
		return _db[position].expired
	}
}
const expiredCheck = (conn, m, _db) => {
	setInterval(() => {
		let found = false
		Object.keys(_db).forEach((i) => {
			if (Date.now() >= _db[i].expired) {
				found = i
			}
		})
		if (found !== false) {
			idny = _db[found].id
			_db[found].limit = 0
            _db[found].premium = false
            delete _db[found].expired
			console.log(`Premium expired: ${_db[found].id}`)
			fs.writeFileSync("./lib/database/user.json", JSON.stringify(_db, null, 4))
            idny ? conn.sendText(idny, "Your Premium Role has run out", m) : ""
			idny = false
		}
	}, 10000)
}

cron.schedule('0 0 * * *', () => {
	Object.keys(_user).forEach((i) => {
		_user[i].limit = 0
		fs.writeFileSync("./lib/database/user.json", JSON.stringify(_user, null, 4))
	})
	console.log('Resetting user limit...')
}, {
	scheduled: true,
	timezone: config.timezone
})

module.exports = {
	addUser,
	checkUser,
	isLimit,
	limitAdd,
	getLimit,
	addBalance,
	getBalance,
	addPremiumUser,
	delPremiumUser,
	checkPremiumUser,
	getPremiumExpired,
	expiredCheck,
}
