global.owner = ['6283832492541'] // Put your number here
global.mods = ['6283832492541'] // Want some help?
global.prems = ['6289614412045'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  amel: 'https://melcanz.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  lolhum: 'https://api.lolhuman.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://melcanz.com': 'TeamMars',
  'https://api.xteam.xyz': 'db0e06bd9f096399',
  'https://api.lolhuman.xyz': 'itschandra',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'chika-key',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

//===========Sticker WM============//
global.packname = 'Made by'
global.author = 'Mars BOT'

global.wm = 'Made by : RHns'
global.wait = '*tunggu sedang diproses...*'
global.eror = '*maaf server sedang sibuk*'

//========Url 1 Template Buttons=========//
global.ig = 'Instagram Owner'
global.lig = 'https://instagram.com/bgsrhnsh'

//========Url 2 Template Buttons=========//
global.dtu2 = 'Group Bot WhatsApp'
global.urlnya2 = 'https://chat.whatsapp.com/H0MF4etPyC66WIwWuppuMl'

//=============callButtons=============//
global.dtc = 'Add Me'
global.phn = '+62 896-1441-2045'


global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
