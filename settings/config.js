const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
'https://zenzapis.xyz': 'satganzdevs',
}

// Other
global.web = 'https://bit.ly/SatganzDevs'
global.thumb = { url : "https://zenzapis.xyz/randomimage/kucing?apikey=satganzdevs" }
global.owner = ['6281316701742']
global.premium = ["6281266891985","6281266082412","6282182518286","6282232780320","6281369266141","6283153626877","62895618712695","6282316744487"]
global.botname = '𝘈𝘵𝘵𝘢𝘤𝘬𝘦𝘳𝘴 𝘉𝘰𝘵𝘴'
global.ownername = '𝗦𝗮𝘁𝗴𝗮𝗻𝘇 𝗗𝗲𝘃𝘀'
global.packname = '𝘈𝘵𝘵𝘢𝘤𝘬𝘦𝘳𝘴 𝘉𝘰𝘵𝘴'
global.author = 'Satganz Devs'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.ucapan = {
pagi: 'Good Morning',
siang: 'Good Afternoon',
sore: 'Good Evening',
malam: 'Good Night',
tmalam: 'Good Midnight'
}
global.mess = {
success: '✓ Success',
admin: 'Group Admin Special Features! ',
botAdmin: 'Bots Should Be Admins First! ',
owner: 'Special owner bot features! ',
group: 'Feature Used For Group Only! ',
premium: 'Special Premium Users Features',
private: 'Features Used Only For Private Chat ',
bot: 'Bot Number User Special Features ',
wait: 'Loading...',
endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours ',
}
global.limitawal = {
premium: "Infinity",
free: 10
}
global.visok = ['https://telegra.ph/file/067b2cb3312837533239c.mp4','https://telegra.ph/file/e38881701692c74484a17.mp4','https://telegra.ph/file/de776d34ef058b7d2ec12.mp4', 'https://telegra.ph/file/bc82653506c301b40679c.mp4','https://telegra.ph/file/7f10b3624991bbcee9ded.mp4', 'https://telegra.ph/file/51aa9701839dcc29066e9.mp4','https://telegra.ph/file/4f26132ac0296a34a45a8.mp4']
global.visoka = visok[Math.floor(Math.random() * visok.length)]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
