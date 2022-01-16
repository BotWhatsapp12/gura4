const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange,
    MessageOptions,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    waChatKey,
    mentionedJid,
    WA_DEFAULT_EPHEMERAL
} = require("@adiwajshing/baileys");
const moment = require("moment-timezone");
moment.tz.setDefault("Asia/Jakarta").locale("id");
const speed = require('performance-now')
const speednye = require('performance-now')
const speednya = require('performance-now')
const speed2 = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const _gis = require('g-i-s')
const fetch = require('node-fetch');
const request = require('request');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const { promisify, util } = require('util')
const qrcodes = require('qrcode');
const googleIt = require('google-it')
const os = require('os');
const hx = require('hxz-api')
const xfar = require('xfarr-api');
const googleImage = require('g-i-s')
const ggs = require('google-it')
const imgbb = require('imgbb-uploader');
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const zee = require('api-alphabot')

//------ FUNCTION -------
const { color, bgcolor } = require('./lib/warna')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close , sleep} = require('./lib/functions')
const { fetchJson, fetchText , kyun} = require('./lib/fetcher')
const { Tiktokdl } = require('./lib/tiktok.js')
const { yta, ytv } = require("./lib/ytdl");
const { igdl } = require('./database/ytdll.js')
const { uploadimg, upload } = require('./lib/uploadimg')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const Exif = require('./lib/exif');
const exif = new Exif();
const { smsg } = require('./lib/simple')
const { mediafiredl } = require('./lib/mediafiredl')
const dfrply = fs.readFileSync('./media/gura.jpeg')
const premium = require('./lib/premium')
const { webp2mp4File } = require('./lib/webp2mp4')
const { webp2gifFile } = require("./lib/gif.js")

//----- DATABASE -------
let setting = JSON.parse(fs.readFileSync('./setting.json'))
const _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
let anlink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink1.json'))
const { jadibot, stopjadibot, listjadibot } = require('./database/jadibot.js')
const _premium = JSON.parse(fs.readFileSync('./database/premium.json'))




//----- SINGKAT -------
prefix = setting.prefix
owner = setting.owner
lolkey = setting.lolkey
mot = '٬࿊⃟🐼'
ke = '*'
f = '٬࿊⃟🐼'
fake = '*By Gura Botz*'
pathImg = setting.pathImg
ownerNomor = [`${setting.ownerNumber}`]
ownerName = setting.ownerName
rply = '_Made with ArulBotz~_'
tamnel = fs.readFileSync('./media/gura.jpeg')
blocked = []
offline = false


module.exports = gura = async (gura, dep) => {
try {
if (!dep.hasNewMessage) return
dep = dep.messages.all()[0]
if (!dep.message) return
if (dep.key && dep.key.remoteJid == 'status@broadcast') return
dep.message = (Object.keys(dep.message)[0] === 'ephemeralMessage') ? dep.message.ephemeralMessage.message : dep.message
m = smsg(gura, dep)

const content = JSON.stringify(dep.message)
const from = dep.key.remoteJid
const type = Object.keys(dep.message)[0]
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')

const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })

const cmd = (type === 'buttonsResponseMessage' && dep.message.buttonsResponseMessage.selectedButtonId && m.quoted.sender === gura.user.jid) ? dep.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage' && dep.message.listResponseMessage.singleSelectReply.selectedRowId && m.quoted.sender === gura.user.jid) ? dep.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'conversation' && dep.message.conversation) ? dep.message.conversation : (type == 'imageMessage') && dep.message.imageMessage.caption ? dep.message.imageMessage.caption : (type == 'videoMessage') && dep.message.videoMessage.caption ? dep.message.videoMessage.caption : (type == 'extendedTextMessage') && dep.message.extendedTextMessage.text ? dep.message.extendedTextMessage.text : (type == 'stickerMessage') && (getcmd(dep.message.stickerMessage.fileSha256.toString('hex')) !== null && getcmd(dep.message.stickerMessage.fileSha256.toString('hex')) !== undefined) ? getcmd(dep.message.stickerMessage.fileSha256.toString('hex')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
body = (type === 'buttonsResponseMessage' && dep.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) && m.quoted.sender === gura.user.jid) ? dep.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage' && dep.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) && m.quoted.sender === gura.user.jid) ? dep.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'conversation' && dep.message.conversation.startsWith(prefix)) ? dep.message.conversation : (type == 'imageMessage') && dep.message.imageMessage.caption.startsWith(prefix) ? dep.message.imageMessage.caption : (type == 'videoMessage') && dep.message.videoMessage.caption.startsWith(prefix) ? dep.message.videoMessage.caption : (type == 'extendedTextMessage') && dep.message.extendedTextMessage.text.startsWith(prefix) ? dep.message.extendedTextMessage.text : (type == 'stickerMessage') && (getcmd(dep.message.stickerMessage.fileSha256.toString('hex')) !== null && getcmd(dep.message.stickerMessage.fileSha256.toString('hex')) !== undefined) ? (getcmd(dep.message.stickerMessage.fileSha256.toString('hex')).startsWith(prefix) ? getcmd(dep.message.stickerMessage.fileSha256.toString('hex')) : '') : ""
budy = (type === 'conversation') ? dep.message.conversation : (type === 'extendedTextMessage') ? dep.message.extendedTextMessage.text : ''
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const on = process.uptime()
chats = (type === 'conversation') ? dep.message.conversation : (type === 'extendedTextMessage') ? dep.message.extendedTextMessage.text : ''
const args = body.trim().split(/ +/).slice(1)
const arg = chats.slice(command.length + 2, chats.length)
const isCmd = body.startsWith(prefix)

mess = {
wait: '*[⏳] Sedang Di Proses Kak*',
search: 'Searching...',eror: 'Error',
success: '✔️ Berhasil ✔️',
error: {
stick: 'Ulangi bang',
tes: '*Testing Bot... *'
},
only: {
prem: 'Khusus User Premium Om',
group: 'Fitur Dapat digunakan di Dalam Group!',
ownerG: 'Fitur Dapat digunakan oleh Owner Group!',
owner: 'Fitur Khusus Owner Bot!',
admin: 'Fitur dapat Digunakan oleh Admin Group!',
Badmin: 'Fitur dapat Digunakan Setelah Bot menjadi ADMIN!'
}
}
ownerNumbers = ["6281229859085@s.whatsapp.net","6281578859076@s.whatsapp.net","6281229859085@s.whatsapp.net","6281229859085@s.whatsapp.net","6281229859085@s.whatsapp.net","6281229859085@s.whatsapp.net","6281229859085@s.whatsapp.net","6281229859085@s.whatsapp.net","6281229859085@s.whatsapp.net","6281229859085@s.whatsapp.net"]
const totalchat = await gura.chats.all()
const botNumber = gura.user.jid
const ownerNumber = setting.ownerNumber
const ownerName = setting.ownerName
const botName = setting.botName
const isGroup = from.endsWith('@g.us')
const sender = dep.key.fromMe ? gura.user.jid : isGroup ? dep.participant : dep.key.remoteJid
const senderNumber = sender.split("@")[0]
const groupMetadata = isGroup ? await gura.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isAntilink = isGroup ? anlink.includes(from) : false
const isWelkom = isGroup ? welkom.includes(from) : false
const itsMe = dep.key.fromMe ? true : false
const isOwner = ownerNumber.includes(sender)
const conts = dep.key.fromMe ? gura.user.jid : gura.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = dep.key.fromMe ? gura.user.name : conts.notify || conts.vname || conts.name || '-'
const q = args.join(' ')
const isPremium = isOwner ? true : premium.checkPremiumUser(sender, _premium)

//Auto
				

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
		const ofrply = fs.readFileSync('./media/gura.jpeg')
///FAKE FAKEAN
const fakestatus = (teks) => {
            gura.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${ucapanWaktu} ${pushname}`,
			"groupName": `${ucapanWaktu} ${pushname}`, 
            "caption": `${ucapanWaktu} ${pushname}`, 
            'jpegThumbnail': fs.readFileSync('./media/gura.jpeg')
		}
	}
}
const fakethumb = (teks, yes) => {
            gura.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./media/gura.jpeg'),quoted:dep,caption:yes})
            } 
const fakevo = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    imageMessage: {
      mimetype: 'image/jpeg',
      caption: 'ArulBot',
      jpegThumbnail: fs.readFileSync('./media/gura.jpeg'),
      viewOnce: true
    }
  }
}
const katalog = (teks) => {
             res = gura.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "BotWhatsApp by Gura", "thumbnail": ofrply, "surface": 'CATALOG' }}, {quoted:ftrol})
             gura.relayWAMessage(res)
        }
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 99999999999999,
                            status: 1,
                            surface : 1,
                            message: `Hai Kak ${pushname}`, //Kasih namalu
                            orderTitle: `Hallo Kak ${pushname}`,
                            thumbnail: fs.readFileSync('./media/gura.jpeg'),
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }

function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
runa = process.uptime()         
const gggg = `Bot Aktif Selama ${kyun(runa)}`
const reply2 = (teks) => {
			gura.sendMessage(from, teks, text, { thumbnail: dfrply, sendEphemeral: true, quoted: dep, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${gggg}`,body:"Bot WhatsApp by ArulGanz",previewType:"PHOTO",thumbnail:ofrply,sourceUrl:`https://chat.whatsapp.com/C3jhijq3xS0AVuJykrhxMn`}}})
		}
const reply = (teks) => {
	      gura.sendMessage(from, teks, text, {quoted:dep, thumbnail: dfrply})
        }
const reply3 = (teks) => {
             res = gura.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "BotWhatsApp by Gura", "thumbnail": ofrply, "surface": 'CATALOG' }}, {quoted:ftrol})
             gura.relayWAMessage(res)
        }
const replyNtag = (teks) => {
	gura.sendMessage(from, teks, text, {quoted:ftrol, contextInfo:{mentionedJid:parseMention(teks)}})
}

const replyNimg = (teks, gambar) => {
	gura.sendMessage(from, gambar,image, {caption : teks, quoted:ftrol, contextInfo:{mentionedJid:parseMention(teks)}})
}

const sendText = (from, teks) => {
                        gura.sendMessage(from, teks, text)
                 }
                 
const sendMess = (hehe, teks) => {
	gura.sendMessage(hehe, teks, text, {quoted: ftrol})
}

const mentions = (teks, memberr, id) => {
	(id == null || id == undefined || id == false) ? gura.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : gura.sendMessage(from, teks.trim(), extendedText, {quoted: ftrol, contextInfo: {"mentionedJid": memberr}})
}

///Sticker Reply
		const sticWait = (hehe) => {
			ano = fs.readFileSync('./media/wait.jpg')
			gura.sendMessage(hehe, ano, sticker, { quoted: dep})
		}
const runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
                }
                
if (isGroup && !dep.key.fromMe && isAntilink) {
if (budy.includes("://chat.whatsapp.com/")) {
console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))
reply(`「 *LINK GRUP TERDETEKSI* 」\n\n_Link Group terdeteksi!!_\n_Kamu akan di kick dari Group!!_`)
setTimeout(() => {
gura.groupRemove(from, [sender])
}, 2000);
}
}        



                
colors = ['red','white','black','blue','yellow','green']
const isVideo = (type === 'videoMessage')
const isImage = (type === 'imageMessage')
const isSticker = (type == 'stickerMessage')                
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const usedCommandRecently = new Set()
const isFiltered = (from) => !!usedCommandRecently.has(from)
const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from), 3000) //delay 5 detik tod
}


if (isCmd && isFiltered(from) && !isGroup) {
console.log(color('「 SPAM 」','red'), (command), ">", (sender.split('@')[0]))
return reply('```MOHON UNTUK DI BERI JEDA !```')
}        
if (isCmd && isFiltered(from) && isGroup) {
console.log(color('「 SPAM 」','red'), (command), ">", (sender.split('@')[0]), "=>", color(groupName, "yellow"))
return reply('```MOHON UNTUK DI BERI JEDA !```')
}  
 
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

function monospace(string) {
return '```' + string + '```'
} 
function jsonformat(string) {
return JSON.stringify(string, null, 2)
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const nebal = (angka) => {
return Math.floor(angka)
}

const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getcmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
const getBaper = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}
const namabot = 'GuraBotz'
const kickMember = async(id, target = []) => {
           let group = await gura.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = gura.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await gura.groupRemove(to, [i])
        } else {
           await gura.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}

const hideTag = async function(from, text){
	       let anu = await gura.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       gura.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('./media/gura.jpeg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  

async function sendStickerFakeSize(buffer) {
fsize = await gura.prepareMessage(from, buffer, sticker)
costick = await gura.prepareMessageFromContent(from,{
"stickerMessage": {
"url": fsize.message.stickerMessage.url,
"fileSha256": fsize.message.stickerMessage.fileSha256.toString('base64'),
"fileEncSha256": fsize.message.stickerMessage.fileEncSha256.toString('base64'),
"mediaKey": fsize.message.stickerMessage.mediaKey.toString('base64'),
"mimetype": fsize.message.stickerMessage.mimetype,
"height": fsize.message.stickerMessage.height,
"width": fsize.message.stickerMessage.width,
"directPath": fsize.message.stickerMessage.directPath,
"fileLength": `9999999999999`,
"mediaKeyTimestamp": fsize.message.stickerMessage.mediaKeyTimestamp.low,
"isAnimated": fsize.message.stickerMessage.isAnimated
}
}, {quoted:dep})
gura.relayWAMessage(costick)
}
		
async function sendStickerWm(from, path, quoted, packStick, authorStick, type, emote) {
let size =(type == null || type == undefined || type == false) ? 'full' : 'crop'
return await WSF.createSticker(path, { type: size ,pack: packStick,author: authorStick,categories: emote ? emote : ["❤"," 😍"," 😘"," 💕"," 😻"," 💑"," 👩‍❤‍👩"," 👨‍❤‍👨"," 💏"," 👩‍❤‍💋‍👩"," 👨‍❤‍💋‍👨"," 🧡"," 💛"," 💚"," 💙"," 💜"," 🖤"," 💔"," ❣"," 💞"," 💓"," 💗"," 💖"," 💘"," 💝"," 💟"," ♥"," 💌"," 💋"," 👩‍❤️‍💋‍👩"," 👨‍❤️‍💋‍👨"," 👩‍❤️‍👨"," 👩‍❤️‍👩"," 👨‍❤️‍👨"," 👩‍❤️‍💋‍👨"," 👬"," 👭"," 👫"," 🥰"," 😚"," 😙"," 👄"," 🌹"," 😽"," ❣️"," ❤️","😀"," 😃"," 😄"," 😁"," 😆"," 😅"," 😂"," 🤣"," 🙂"," 😛"," 😝"," 😜"," 🤪"," 🤗"," 😺"," 😸"," 😹"," ☺"," 😌"," 😉"," 🤗"," 😊","☹"," 😣"," 😖"," 😫"," 😩"," 😢"," 😭"," 😞"," 😔"," 😟"," 😕"," 😤"," 😠"," 😥"," 😰"," 😨"," 😿"," 😾"," 😓"," 🙍‍♂"," 🙍‍♀"," 💔"," 🙁"," 🥺"," 🤕"," ☔️"," ⛈"," 🌩"," 🌧","😯"," 😦"," 😧"," 😮"," 😲"," 🙀"," 😱"," 🤯"," 😳"," ❗"," ❕"," 🤬"," 😡"," 😠"," 🙄"," 👿"," 😾"," 😤"," 💢"," 👺"," 🗯️"," 😒"," 🥵","👋","🎊"," 🎉"," 🎁"," 🎈"," 👯‍♂️"," 👯"," 👯‍♀️"," 💃"," 🕺"," 🔥"," ⭐️"," ✨"," 💫"," 🎇"," 🎆"," 🍻"," 🥂"," 🍾"," 🎂"," 🍰","🌃"]}).then((buffer) => gura.sendMessage(from, buffer, MessageType.sticker, { quoted: quoted}))
}

const hour_now = moment().format('HH')
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢'
if (hour_now >= '03' && hour_now <= '10') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠'
} else if (hour_now >= '10' && hour_now <= '14') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠'
} else if (hour_now >= '14' && hour_now <= '17') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞'
} else if (hour_now >= '17' && hour_now <= '18') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'
} else if (hour_now >= '18' && hour_now <= '23') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'
} else {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'
}

const sendStickerFromUrl = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('./lib/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./core/stickers/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
gura.sendMessage(to, media, sticker,{quoted : dep})
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
fs.unlinkSync(asw)
fs.unlinkSync(filess)
});
});
});
}

const sendStickerUrl = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('./lib/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./core/stickers/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
gura.sendMessage(from, media, sticker, {quoted:dep})
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
});
});
});
}
 
 const sendFileFromUrl = async(link, type, options) => {
            	hasil = await getBuffer(link)
            gura.sendMessage(from, hasil, type, options).catch(e => {
            	fetch(link).then((hasil) => {
            	gura.sendMessage(from, hasil, type, options).catch(e => {
            	gura.sendMessage(from, { url : link }, type, options).catch(e => {
            	fakegroup('Something Error')
            console.log(e)
            })
            })
            })
            })
           }
           
const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           gura.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:dep})
           fs.unlinkSync(asw)
});
});
});
}
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
gura.sendMessage(to, media, type, { quoted:dep, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})

fs.unlinkSync(filename)
});
}
///BUTTON
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
        const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
        };
        gura.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
        );
        };
        const sendButton = async (from, context, fortext, but, dep) => {
        buttonMessages = {
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 1
            }
        gura.sendMessage(from, buttonMessages, buttonsMessage, {
        quoted: fkontak
        })
        }
        const sendButtonImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await gura.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
gura.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
        const sendButImage = async (from, context, fortext, img, but, dep) => {
        jadinya = await gura.prepareMessage(from, img, image)
        buttonMessagesI = {
        imageMessage: jadinya.message.imageMessage,
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 4
        }
        gura.sendMessage(from, buttonMessagesI, buttonsMessage, {
        quoted: fkontak,
        })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
        const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
        return gura.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }
        async function uptoibb(path){
return new Promise (async (resolve, reject) => {
imgbb('91904762b2cd230ce1d861279bd6bf1d', path).then((res) =>{
resolve(res.url)
}).catch(reject)
})
}
 
const telestick = async (to, url, wm = namabot, wm2 = '') => {
			exif.create(wm, wm2)
let packName = url.replace("https://t.me/addstickers/", "");
 
let gas = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } } );
 
let json = await gas.json();
let po = fs.readdirSync('./stiker')
let pa = po.length
let pe = pa++
 
console.log(json)
for(let i of json.result.stickers) {
let fileId = i.thumb.file_id;
 
let gasIn = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
 
let jisin = await gasIn.json();
console.log(jisin)
 buffer = await getBaper("https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jisin.result.file_path)
 fs.writeFileSync(`./stiker/${pe}.png`, buffer)
 exec(`webpmux -set exif ./stiker/data.exif ./stiker/${pe}.png -o ./stiker/${pe}.png`, async (error) => {
gura.sendMessage(to, fs.readFileSync(`./stiker/${pe}.png`), sticker).then(() => fs.unlinkSync(`./stiker/${pe}.png`))
 })
}
}             
//presence
gura.updatePresence(from, Presence.recording)

//auto read
gura.chatRead(from, "read")
if (!setting.autocomposing) {
gura.updatePresence(from, Presence.composing)
}
//runtime berjalan
           runi = process.uptime() 
           gura.setStatus(`ArulBotz Aktif Selama ${kyun(runi)} `).catch((_)=>_);

           settingstatus = new Date() * 1;
//public&self       
if (!gura.public) {
            if (!dep.key.fromMe && !isOwner) return
        }
         

//--------- COMMAND ----------
if(budy.includes('Bot')){
const iiiir = fs.readFileSync('./database/botmp3')
                gura.sendMessage(from, iiiir, MessageType.audio, {quoted: dep, mimetype: 'audio/mp4', ptt:true})
}
if(budy.includes('bot')){
	iiir = fs.readFileSync('./database/botmp3')
                gura.sendMessage(from, iiir, MessageType.audio, {quoted: dep, mimetype: 'audio/mp4', ptt:true})
}
if(budy.includes('anjir')){
	iiir = fs.readFileSync('./database/toxic1.mp3')
                gura.sendMessage(from, iiir, MessageType.audio, {quoted: dep, mimetype: 'audio/mp4', ptt:true})
}
if(budy.includes('kontol')){
	iiir = fs.readFileSync('./database/toxic1.mp3')
                gura.sendMessage(from, iiir, MessageType.audio, {quoted: dep, mimetype: 'audio/mp4', ptt:true})
}
if(budy.includes('Anj')){
	iiir = fs.readFileSync('./database/toxic1.mp3')
                gura.sendMessage(from, iiir, MessageType.audio, {quoted: dep, mimetype: 'audio/mp4', ptt:true})
}
if(budy.includes('kntl')){
	iiir = fs.readFileSync('./database/toxic1.mp3')
                gura.sendMessage(from, iiir, MessageType.audio, {quoted: dep, mimetype: 'audio/mp4', ptt:true})
}
if(budy.includes('anj')){
	iiir = fs.readFileSync('./database/toxic1.mp3')
                gura.sendMessage(from, iiir, MessageType.audio, {quoted: dep, mimetype: 'audio/mp4', ptt:true})
}
if(budy.includes('asu')){
	iiir = fs.readFileSync('./database/toxic1.mp3')
                gura.sendMessage(from, iiir, MessageType.audio, {quoted: dep, mimetype: 'audio/mp4', ptt:true})
}
if(budy.includes('ngntd')){
	iiir = fs.readFileSync('./database/toxic1.mp3')
                gura.sendMessage(from, iiir, MessageType.audio, {quoted: dep, mimetype: 'audio/mp4', ptt:true})
}
if(budy.includes('ngentod')){
	iiir = fs.readFileSync('./database/toxic1.mp3')
                gura.sendMessage(from, iiir, MessageType.audio, {quoted: dep, mimetype: 'audio/mp4', ptt:true})
}
if(budy.includes('bego')){
	iiir = fs.readFileSync('./database/toxic1.mp3')
                gura.sendMessage(from, iiir, MessageType.audio, {quoted: dep, mimetype: 'audio/mp4', ptt:true})
}
if(budy.includes('gblk')){
	iiir = fs.readFileSync('./database/toxic1.mp3')
                gura.sendMessage(from, iiir, MessageType.audio, {quoted: dep, mimetype: 'audio/mp4', ptt:true})
}
if(budy.includes('Assalamualaikum')){
cpref = `*Waalaikumsalam Wr Wb*`
reply(cpref)
}
if(budy.includes('assalamualaikum')){
cpref = `*Waalaikumsalam Wr Wb*`
reply(cpref)
}

switch(command) {

case 'menu':
case 'help':
case 'allmenu':
uptime = process.uptime()            
var p = '*'
const tod =`
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
┏━━━━━━━━━━━━━━━⬣ 
┃┏━━⬣ *GURA BOTZ*
┃┃⬡ ${p}•Hai kak ${pushname}${p}		
┃┃⬡ ${p}•Prefix : ${prefix}${p}
┃┃⬡ ${p}•Runtime : ${kyun(uptime)}${p}
┃┗━━⬣
┗━━━━━━━━━━━━━━━⬣`
tod2 =`
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏*Info Owner*
🚹 *No        : @62 812-2985-9085* 
🌄 *IG         : @_daaa_1*

➤ *Others*➤
┃*き⃟🐣*  *.menu*😃
┃*き⃟🐣* *.ssweb*😃
┃*き⃟🐣* *.runtime*😃
┃*き⃟🐣* *.owner*😃
┃*き⃟🐣* *.get*😀
┃*き⃟🐣* *.fdeface*😀
┃*き⃟🐣* *.totag <reply media>*😀
┃*き⃟🐣* *.jadibot* *Premium*😀
┃*き⃟🐣* *.listbot*😀
┃*き⃟🐣* *.ping*😀
┃*き⃟🐣* *.chat 62xnxx|(pesannya)*😀
┗━━━━━━━

➤ *Search*➤
┃*き⃟🐣* *.lirik*🤨
┃*き⃟🐣* *.ytsearch*🤨
┃*き⃟🐣* *.pinterest*🤨
┃*き⃟🐣* *.image*🤨
┃*き⃟🐣* *.google (query)*🤨
┗━━━━━━━

➤ *Tools*➤
┃*き⃟🐣* *.sticker <reply gambar>*🤗
┃*き⃟🐣* *.takestick* 🤗
┃*き⃟🐣* *.toimg <Agak Lelet>*🤗
┃*き⃟🐣* *.tourl <reply media>*🤗
┃*き⃟🐣* *.tomp3 <reply media>*🤗
┃*き⃟🐣* *.tinyurl <masukan link>*🤗
┃*き⃟🐣* *.ttp <masukan teks>*🤗
┃*き⃟🐣* *.attp <masukan teks>*🤗
┃*き⃟🐣* *.telesticker <url>*🤗
┗━━━━━━━

➤ *Group*➤
┃*き⃟🐣* *.group <Pilih>*😎
┃*き⃟🐣* *.tutuptime <waktu>*😎
┃*き⃟🐣* *.bukatime <waktu>*😎
┃*き⃟🐣* *.promoteall*😎
┃*き⃟🐣* *.demoteall*😎
┃*き⃟🐣* *.promote <@tag>*😎
┃*き⃟🐣* *.demote <@tag>*😎
┃*き⃟🐣* *.getnumber <@tag>*😎
┃*き⃟🐣* *.getbio <@tag>*😎
┃*き⃟🐣* *.add* *<628x> Jangan Buat Mainan*😎
┃*き⃟🐣* *.kick* *<@tag>Jangan Buat Mainan*😎
┗━━━━━━━

➤ *Owner*➤
┃*き⃟🐣* *.join*😄
┃*き⃟🐣* *.hidetag*😄
┃*き⃟🐣* *.tagall*😄
┃*き⃟🐣* *> eval*😄
┃*き⃟🐣* *$ exec*😄
┃*き⃟🐣* *clearall*😄
┃*き⃟🐣* *self*😄
┃*き⃟🐣* *public*😄
┗━━━━━━━

➤ *Download*➤
┃*き⃟??* *.tiktok <link>*😅
┃*き⃟🐣* *.instagram <link>*😅
┃*き⃟🐣* *.play <judul lagu>*😅
┃*き⃟🐣* *.youtube <link>*😅
┃*き⃟🐣* *.mediafire <link>*😅
┃*き⃟🐣* *.twitter <link>*😅
┗━━━━━━━

➤ *Anime*➤
┃*き⃟🐣* *.loli*🤩
┃*き⃟🐣* *.husbu*🤩
┃*き⃟🐣* *.milf*🤩
┃*き⃟🐣* *.cosplay*🤩
┃*き⃟🐣* *.wallml*🤩
┗━━━━━━━

➤ *Teks Pro*➤
┃*き⃟🐣* *.blackpink*😅
┃*き⃟🐣* *.neon*😅
┃*き⃟🐣* *.greenneon*😅
┃*き⃟🐣* *.advanceglow*😅
┃*き⃟🐣* *.futureneon*😅
┃*き⃟🐣* *.sandwriting*😅
┃*き⃟🐣* *.sandsummer*😅
┃*き⃟🐣* *.sandengraved*😅
┃*き⃟🐣* *.metaldark*😅
┃*き⃟🐣* *.neonlight*😅
┃*き⃟🐣* *.holographic*😅
┃*き⃟🐣* *.text1917*😅
┃*き⃟🐣* *.minion*😅
┃*き⃟🐣* *.deluxesilver*😅
┃*き⃟🐣* *.newyearcard*😅
┃*き⃟🐣* *.bloodfrosted*😅
┃*き⃟🐣* *.halloween*😅
┃*き⃟🐣* *.jokerlogo*😅
┃*き⃟🐣* *.fireworksparkle*😅
┃*き⃟🐣* *.natureleaves*😅
┃*き⃟🐣* *.bokeh*😅
┃*き⃟🐣* *.toxic*😅
┃*き⃟🐣* *.strawberry*😅
┃*き⃟🐣* *.box3d*😅
┃*き⃟🐣* *.roadwarning*😅
┃*き⃟🐣* *.breakwall*😅
┃*き⃟🐣* *.icecold*😅 
┃*き⃟🐣* *.luxury*😅
┃*き⃟🐣* *.cloud*😅
┃*き⃟🐣* *.summersand*😅
┃*き⃟🐣* *.horrorblood*😅
┃*き⃟🐣* *.thunder*😅
┃*き⃟🐣* *.glitch text1 text2*😅
┗━━━━━━━

➤ *Terimakasih Kepada*➤
┃*き⃟🐣* *ArulGanz*😄
┃*き⃟🐣* *Pembuat Base Gura*😄
┃*き⃟🐣* *All Creator Bot Wa*😄
┃*き⃟🐣* *Penyedia Apikey*😄
┃*き⃟🐣* *Teman² Yg Suka Bagi² Case*😄
┃*き⃟🐣* *User GuraBotz*😄
┗━━━━━━━ *@GuraBotz*
`
          but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 }, { buttonId: `${prefix}patnerbot`, buttonText: { displayText: 'PatnerBot' }, type: 1 }
                  ]
        sendButLocation(from, tod, tod2, tamnel, but)     
const loo = fs.readFileSync('./database/spam.mp3')
                gura.sendMessage(from, loo, MessageType.audio, {quoted: dep, mimetype: 'audio/mp4', ptt:true})
           break
           case 'neko':
       case 'kanna':
       case 'sagiri':
       case 'megumin':
       case 'wallnime':
       reply (mess.wait)
                  buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=BeliYaCuyy`)
                 buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}, {buttonId: `${prefix}owner`,buttonText:{displayText: `👥Owner`},type:1}]
              imageMsg = (await gura.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Made with GuraBotz', imageMessage: imageMsg,
              contentText:`Sama Sama Ngab`,buttons,headerType:4}
              prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
              gura.relayWAMessage(prep)    
                    break
       case 'storyanime':
              reply(mess.wait)
              anu = await fetchJson(`https://lolhuman.herokuapp.com/api/storynime?apikey=BeliYaCuyy`)
              buffer = await getBuffer(anu.result)
              gura.sendMessage(from, buffer, video, { quoted: dep })
              break
           case 'cecan':
           case 'bocil':
           case 'hijaber':
           case 'santuy':
           case 'ukhti':
 reply(mess.wait)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=ZeroYT7`)
buff = await getBuffer(ini.result.url)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              imageMsg = (await gura.prepareMessageMedia(buff, "imageMessage", { thumbnail: tamnel, })).imageMessage
              buttonsMessage = {footerText:'crated by Gawr GuraBotz', imageMessage: imageMsg,
              contentText:`Nih Kak ☕`,buttons,headerType:4}
              prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
              gura.relayWAMessage(prep)
              break
           case 'realistic': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} Gawr GuraBotz`)
					top = arg.split('|')[0]
                    bottom = arg.split('|')[1]
                    reply(mess.wait)
ini = await fetchJson(`https://api-alphabot.herokuapp.com/api/textpro/realistic?text=${top}&text2=${bottom}&apikey=Alphabot`)
buff = await getBuffer(ini.result.url)
buttons = [{buttonId: `${prefix + owner}`,buttonText:{displayText: `👥 Owner`},type:1}]
              imageMsg = (await gura.prepareMessageMedia(buff, "imageMessage", { thumbnail: tamnel, })).imageMessage
              buttonsMessage = {footerText:'crated by Gawr GuraBotz', imageMessage: imageMsg,
              contentText:`Nih Kak ☕`,buttons,headerType:4}
              prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
              gura.relayWAMessage(prep)
              break
           case 'chat':
			if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
            if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            gura.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
           case 'public': {
                if (!dep.key.fromMe && !isOwner) reply(mess.owner)
                gura.public = true
                reply('Sukses Ganti Ke Mode Public')
            }
            break
            case 'self': {
                if (!dep.key.fromMe && !isOwner) reply(mess.owner)
                gura.public = false
                reply('Sukses Ganti Ke Mode Self')
            }
            break
           case 'tovideo':
               if ((isMedia && !dep.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait) 
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dep
               mediaaa = await gura.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               gura.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: dep, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
//*Menu Pake Api
case 'removebg':
           if (!isQuotedImage) return reply('reply gambar nya') 
           const biasalah = isQuotedImage ? JSON.parse(JSON.stringify(dep).replace("quotedM","m")).message.extendedTextMessage.contextInfo : dep
           const pebzgans1  = await gura.downloadMediaMessage(biasalah, 'buffer') 
           const getbg = await uploadImages(pebzgans1, true) 
           reply(mess.wait)
           pft = await getBuffer(`http://lolhuman.herokuapp.com/api/removebg?apikey=BeliYaCuyy&img=${getbg}`)
           await gura.sendMessage(from, pft, image, {quoted:dep,caption:'Done'}).catch((err) => reply('Kebanyakan Dosa Kali Lu Jadi Erorr deh'))
           break
case 'ttp':
				
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}ttp GuraBotz`)
					atetepe = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=BeliYaCuyy&text=${encodeURIComponent(q)}`)
					gura.sendMessage(from, atetepe, sticker, { quoted: dep })
					break
case 'telesticker': 
       case 'telestiker':
              if (!q) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
              reply(mess.wait)
              ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=BeliYaCuyy&url=${q}`)
              ini_sticker = ini_url.results.url
              reply('Sedang Mengirim Sticker Dari Link')
              for (sticker_ in ini_sticker) {
              ini_buffer = await getBuffer(ini_sticker[sticker_])
              gura.sendMessage(from, ini_buffer, sticker, {})
}
              break
case 'ttp2':  
                    if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp GuraBotz`)
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${q}`)
                    sendStickerUrl(from, anu1)
                    break
       case 'attp':
       reply(mess.wait) 
              if (args.length == 0) return reply(`Example: ${prefix + command} kurr`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              gura.sendMessage(from, buffer, sticker, { quoted: dep })
              break
                case 'd':
				case 'del':
				case 'delete':
					gura.deleteMessage(from, { id: dep.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
case 'welcome':
        capti2 = `*Mode Welcome*`
        ya = fs.readFileSync('./media/welcom.jpg')
        py =await gura.prepareMessage(from, ya, image)
        gbutsan = [{buttonId: `${prefix}wel enable`, buttonText: {displayText: '🔖ON'}, type: 1},{buttonId: `${prefix}wel disable`, buttonText: {displayText: '🔖OFF'}, type: 1}]
        gbuttonan = {
        imageMessage: py.message.imageMessage,
        contentText: capti2,
        footerText: '```Silahkan Pilih Modenya Kak```',
        buttons: gbutsan,
        headerType: 4
}
        await gura.sendMessage(from, gbuttonan, MessageType.buttonsMessage)
        break                 
case 'replycek':
teg = `Tes Reply`
reply3(teg)
reply(teg)
sticWait(from)
break
case 'smeme': 
reply(mess.wait) 
top = arg.split('|')[0]
bottom = arg.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !dep.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dep 
owgi = await  gura.downloadAndSaveMediaMessage(ger)
anu = await imgbb("91904762b2cd230ce1d861279bd6bf1d", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerUrl(from, `${anu1}`)
} else {
reply('Gunakan foto/stiker!')
}
break
//Text Prome
case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                reply (mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gura Botz`)
                    ini_txt = args.join(" ")
                  buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=BeliYaCuyy&text=${ini_txt}`)
                 buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: `⬅️Back To Menu`},type:1}, {buttonId: `${prefix}owner`,buttonText:{displayText: `👥Owner`},type:1}]
              imageMsg = (await gura.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Made with GuraBotz', imageMessage: imageMsg,
              contentText:`Sama Sama Ngab`,buttons,headerType:4}
              prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
              gura.relayWAMessage(prep)
        
                    break
                    case 'glitch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gawr Gura`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=BeliYaCuyy&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        gura.sendMessage(from, gambar, image, {thumbnail: dfrply, caption: `Gak Usah Repot² Donasi Kirim Pulsa Aja Seikhlasnya ke 6281578859076`, quoted : dep})
                    })
                    break
                    case 'loli':
       case 'husbu':
       case 'milf':
       case 'cosplay':
       case 'wallml':
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}menu`,buttonText:{displayText:'⬅️Back to Menu'},type:1}]
              imageMsg = ( await gura.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Sama Sama☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
              gura.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
case 'vampire':
   if (!arg) return reply(from, `Penggunaan ${prefix}vampire teks`, dep)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${arg}&apikey=Ikyy69`)
   break
   case 'codetxt':
   if (!arg) return reply(from, `Penggunaan ${prefix}codetxt teks`, dep)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/maker/carbon?code=${arg}&apikey=Ikyy69`)
   break
case 'matrix':
				if (!arg) return reply(from, `Penggunaan ${prefix}matrix teks`, dep)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/matrix?text=${arg}&apikey=Ikyy69`)
				break
				case 'googletxt':
				if (!arg) return reply(from, `Penggunaan ${prefix}googletxt teks`, dep)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/google?text=${arg}&apikey=Ikyy69`)
				break
				case 'spiderman':
				if (!arg) return reply(from, `Penggunaan ${prefix}sipderman teks`, dep)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${arg}&apikey=Ikyy69`)
				break
				case 'express':
				if (!arg) return reply(from, `Penggunaan ${prefix}express teks`, dep)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${arg}&apikey=Ikyy69`)
				break
				case 'dance':
				if (!arg) return reply(from, `Penggunaan ${prefix}dance teks`, dep)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/dance?text=${arg}&apikey=Ikyy69`)
				break
				case 'blackbird':
				if (!arg) return reply(from, `Penggunaan ${prefix}blackbird teks`, dep)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/blackbird?text=${arg}&apikey=Ikyy69`)
				break
				case 'text3d':
				if (!arg) return reply(from, `Penggunaan ${prefix}text3d teks`, dep)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${arg}&apikey=Ikyy69`)
				break
				case 'warrior':
				if (!arg) return reply(from, `Penggunaan ${prefix}warrior teks`, dep)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${arg}&apikey=Ikyy69`)
				break
case 'smeme2':
									if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* Gura`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										reply(mess.wait) 
										var teks2 = args.join(' ')
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
										var media = await gura.downloadMediaMessage(enmedia)
										var njay = await uploadImages(media)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`)
										gura.sendMessage(from, resu, image, {caption:'.stiker', quoted: dep})
										fs.unlinkSync(media)
										} catch (e) {
											console.log(e)
										}
									break
						case 'group':
    case 'emoji':
    case 'semoji':
    if (!q) return reply(`Example : ${prefix + command} 😂`)
    stod = `${sender}`
stst = await gura.getStatus(`${sender.split('@')[0]}@c.us`)
listMsg = {
title : `${ucapanWaktu} - @${sender.split("@")[0]}`,
 buttonText: 'List Emoji',
 footerText: 'GuraBotz',
 description: `\n*Silahkan Pilih Model Emojinya*`,
 sections: [
                     {
                      "title": `Mode Emoji`,
 rows: [
                           {
                              "title": "Emoji 1",
                              "rowId": `${prefix}emoji1 ${q}`
                           },
                          {
                              "title": "Emoji 2",
                              "rowId": `${prefix}emoji2 ${q}`
                           },
                           {
                              "title": "Emoji 3",
                              "rowId": `${prefix}emoji3 ${q}`
                           },
                           {
                              "title": "Emoji 4",
                              "rowId": `${prefix}emoji4 ${q}`
                           },
                           {
                              "title": "Emoji 5",
                              "rowId": `${prefix}emoji5 ${q}`
                           },
                           {
                              "title": "Emoji 6",
                              "rowId": `${prefix}emoji6 ${q}`
                           },
                           {
                              "title": "Emoji 7",
                              "rowId": `${prefix}emoji7 ${q}`
                           },
                           {
                              "title": "Emoji 8",
                              "rowId": `${prefix}emoji8 ${q}`
                           },
                           {
                              "title": "Emoji 9",
                              "rowId": `${prefix}emoji9 ${q}`
                           },
                           {
                              "title": "Emoji 10",
                              "rowId": `${prefix}emoji10 ${q}`
                           },
                           {
                              "title": "Emoji 11",
                              "rowId": `${prefix}emoji11 ${q}`
                           },
                           {
                              "title": "Emoji 12",
                              "rowId": `${prefix}emoji12 ${q}`
                           },
                           {
                              "title": "Emoji 13",
                              "rowId": `${prefix}emoji13 ${q}`
                           },
                        ]
                     }],
 listType: 1
}

gura.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted: dep})
break
						case 'emoji1':case 'semoji1':
						reply(mess.wait) 
									if (!q) return reply(`Example : ${prefix + command} 😂`)
									emoji.get(`${q}`).then(emoji => {
										teks = `${emoji.images[1].url}`
										sendStickerFromUrl(from,`${teks}`)
									})
									break
						case 'emoji2':case 'semoji2':
						reply(mess.wait) 
									if (!q) return reply(`Example : ${prefix + command} 😂`)
									emoji.get(`${q}`).then(emoji => {
										teks = `${emoji.images[2].url}`
										sendStickerFromUrl(from,`${teks}`)
									})
									break
						case 'emoji3':case 'semoji3':
						reply(mess.wait) 
									if (!q) return reply(`Example : ${prefix + command} 😂`)
									emoji.get(`${q}`).then(emoji => {
										teks = `${emoji.images[3].url}`
										sendStickerFromUrl(from,`${teks}`)
									})
									break
						case 'emoji4':case 'semoji4':
						reply(mess.wait) 
									if (!q) return reply(`Example : ${prefix + command} 😂`)
									emoji.get(`${q}`).then(emoji => {
										teks = `${emoji.images[4].url}`
										sendStickerFromUrl(from,`${teks}`)
									})
									break
					 case 'emoji5':case 'semoji5':
						reply(mess.wait) 
									if (!q) return reply(`Example : ${prefix + command} 😂`) 
									emoji.get(`${q}`).then(emoji => {
										teks = `${emoji.images[5].url}`
										sendStickerFromUrl(from,`${teks}`)
									})
									break
					case 'emoji6':case 'semoji6':
						reply(mess.wait) 
									if (!q) return reply(`Example : ${prefix + command} 😂`)
									emoji.get(`${q}`).then(emoji => {
										teks = `${emoji.images[6].url}`
										sendStickerFromUrl(from,`${teks}`)
									})
									break
				case 'emoji7':case 'semoji7':
						reply(mess.wait) 
									if (!q) return reply(`Example : ${prefix + command} 😂`)
									emoji.get(`${q}`).then(emoji => {
										teks = `${emoji.images[7].url}`
										sendStickerFromUrl(from,`${teks}`)
									})
									break
			case 'emoji8':case 'semoji8':
						reply(mess.wait) 
									if (!q) return reply(`Example : ${prefix + command} 😂`) 
									emoji.get(`${q}`).then(emoji => {
										teks = `${emoji.images[8].url}`
										sendStickerFromUrl(from,`${teks}`)
									})
									break
		case 'emoji9':case 'semoji9':
						reply(mess.wait) 
									if (!q) return reply(`Example : ${prefix + command} 😂`)
									emoji.get(`${q}`).then(emoji => {
										teks = `${emoji.images[9].url}`
										sendStickerFromUrl(from,`${teks}`)
									})
									break
case 'emoji10':case 'semoji10':
						reply(mess.wait) 
									if (!q) return reply(`Example : ${prefix + command} 😂`)
									emoji.get(`${q}`).then(emoji => {
										teks = `${emoji.images[10].url}`
										sendStickerFromUrl(from,`${teks}`)
									})
									break
case 'emoji11':case 'semoji11':
						reply(mess.wait) 
									if (!q) return reply(`Example : ${prefix + command} 😂`)
									emoji.get(`${q}`).then(emoji => {
										teks = `${emoji.images[11].url}`
										sendStickerFromUrl(from,`${teks}`)
									})
									break
case 'emoji12':case 'semoji12':
						reply(mess.wait) 
									if (!q) return reply(`Example : ${prefix + command} 😂`)
									emoji.get(`${q}`).then(emoji => {
										teks = `${emoji.images[12].url}`
										sendStickerFromUrl(from,`${teks}`)
									})
									break
case 'emoji13':case 'semoji13':
						reply(mess.wait) 
									if (!q) return reply(`Example : ${prefix + command} 😂`)
									emoji.get(`${q}`).then(emoji => {
										teks = `${emoji.images[13].url}`
										sendStickerFromUrl(from,`${teks}`)
									})
									break
case 'tovideo':
case 'tomp4':
reply(mess.wait) 
if (!isQuotedSticker) return reply('Reply stiker nya')
if ((isMedia && !dep.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
            owgi = await gura.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            gura.sendMessage(from, res.result, video, { mimetype: Mimetype.mp4, filename: 'tovideo.mp4',caption: 'SUKSES CONVERT STICKER TO VIDEO', quoted: dep})
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
break
case 'trigger':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !dep.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dep 
				   reply(mess.wait) 
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  gura.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("91904762b2cd230ce1d861279bd6bf1d", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error)
					gura.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: dep})
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
case 'tourl':
    if ((isMedia && !dep.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dep
            owgi = await gura.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
case 'wel':
              if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
              break 
case 'viewonce':
res = await gura.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpeg',
"jpegThumbnail": dfrply,
"viewOnce": true
}
}
}
}, {}) 
gura.relayWAMessage(res)
break
case 'topdf':
           if (!isQuotedImage) return reply('image nya di reply')
           const ida = isQuotedImage ? JSON.parse(JSON.stringify(dep).replace("quotedM","m")).message.extendedTextMessage.contextInfo : dep
           const idk = await gura.downloadMediaMessage(ida, 'buffer') 
           const getpng = await uploadImages(idk, true)  
           reply(mess.wait)
           pdf = await getBuffer(`https://api.lolhuman.xyz/docs/converter?apikey=BeliYaCuyy&img=${getpng}`)
           gura.sendMessage(from, pdf, document, { mimetype: Mimetype.pdf, quoted:dep }).catch((err) => reply('error'))
           break
case 'image':
case 'pinterest':
case 'pin':
case 'gimage':
case 'googleimage':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terjadii Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: dep, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
break
case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'add':
		if (!isGroup) return reply(mess.only.group)
		if (!isGroupAdmins) return reply(mess.only.admin)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
		if (args.length < 1) return reply('Yang mau di add jin ya?')
		if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
		try {
	      num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
		gura.groupAdd(from, [num])
	} catch (e) {
		console.log('Error :', e)
			reply('Gagal menambahkan target, mungkin karena di private')
					}
		break

case 'kick':
if (!isGroup) return reply(mess.only.group)
if (!itsMe && !isGroupAdmins) return reply(mess.only.admin)
if(!q)return reply(`Format Error!\n\nExample : ${prefix + command} @tag`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
y = q.split('@')[1] + '@s.whatsapp.net'
gura.groupRemove(from, [y])
reply(`Succses kick target!`)
break
  
case 'promote':
case 'pm':
if (!isGroupAdmins && !itsMe && !isOwner) return 
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (dep.message.extendedTextMessage === undefined || dep.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = dep.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
	teks = 'Perintah di terima, anda menjdi admin :\n'
	for (let _ of mentioned) {
		teks += `@${_.split('@')[0]}\n`
	}
	mentions(teks, mentioned, true)
	gura.groupMakeAdmin(from, mentioned)
} else {
	mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
	gura.groupMakeAdmin(from, mentioned)
}
break
case 'demote':
case 'dm' : 
if (!isGroupAdmins && !itsMe && !isOwner) return 
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (dep.message.extendedTextMessage === undefined || dep.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = dep.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
	teks = 'Perintah di terima, anda tidak menjadi admin :\n'
	for (let _ of mentioned) {
		teks += `@${_.split('@')[0]}\n`
	}
	mentions(teks, mentioned, true)
	gura.groupDemoteAdmin(from, mentioned)
} else {
	mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
	gura.groupDemoteAdmin(from, mentioned)
}
break

case 'premium': 
									if (!isOwner && !dep.key.fromMe) return reply(mess.only.owner)
									if (args[0] === 'add') {
										if (dep.message.extendedTextMessage != undefined) {
											mentioned = dep.message.extendedTextMessage.contextInfo.mentionedJid
											premium.addPremiumUser(mentioned[0], args[2], _premium)
											reply(`*SELAMAT ANDA MENJADI MEMBER PREMIUM*\n\n*ID*: ${mentioned[0]}`)
											} else {
												premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
												reply(`*SELAMAT ANDA MENJADI MEMBER PREMIUM*\n\n*ID*: ${args[1]}@s.whatsapp.net\n\n*Sekarang Anda Dapat Menggunakan Fitur Premium*`)
												}
												} else if (args[0] === 'del') {
													if (dep.message.extendedTextMessage != undefined) {
														mentioned = dep.message.extendedTextMessage.contextInfo.mentionedJid
														_premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
														fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
														reply(mess.succes)
														} else {
															_premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
															fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
															reply(mess.succes)
															}
															} else {
																 reply(`Example : ${prefix + command} add/del 62887435047326 10s`)
															}
										break
						case 'cekprem': case 'cekpremium': case 'premiumcek':
									let cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
									let premiumnya = `*SELAMAT ANDA MEMBER PREMIUM*`
									reply(`${isOwner?'Unlimited Prem (My Gura)':premiumnya}`)
									break
						
						case 'listprem': case 'listpremium': case 'premiumlist': case 'premlist':
									let txt = `*LIST PREMIUM*\n\n*Total :* ${_premium.length}\n\n`
									let men = [];
									for (let i of _premium){
										men.push(i.id)
										let cekvip = ms(i.expired - Date.now())
										txt += `*Nomor : ${i.id.split("@")[0]}*\n*User : @${i.id.split("@")[0]}*`
									}
									reply(`${txt}`)
									break
case 'tutuptime':
case 'closetime':
case 'waktututup':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("[ ! ] ```Contoh:``` .closetimer 20 detik")}
reply(`[ ! ] Grup akan ditutup dalam ${q} lagi.`)
setTimeout( () => {
var nomor = dep.participant
gura.groupSettingChange (from, GroupSettingChange.messageSend, true);
}, timer)
break
case 'bukatime':
case 'opentime':
case 'waktubuka':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("[ ! ] ```Contoh:``` .opentimer 20 detik")}
reply(`[ ! ] Grup akan dibuka dalam ${q} lagi.`)
setTimeout( () => {
var nomor = dep.participant
gura.groupSettingChange (from, GroupSettingChange.messageSend, false);
}, timer)
break
case 'tomp3':
					gura.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('Reply Video Nya Kak')
					reply(mess.wait)
					encmediad = JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await gura.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
						fs.unlinkSync(mediad)
						if (err) return reply(mess.error.api)
						mhee = fs.readFileSync(ran)
						gura.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 359996400, quoted: ftrol })
						fs.unlinkSync(ran)
					})
					break
case 'getnum': case 'getnomor': case 'getnumber':
									if (!isGroup) return reply(mess.only.group)
									if (dep.message.extendedTextMessage === undefined || dep.message.extendedTextMessage === null) return reply('Reply Pesan Target')
									mentioned = dep.message.extendedTextMessage.contextInfo.mentionedJid[0]
									reply(`${mentioned.split('@')[0]}`)
									break
case 'getbio':             
	  var yy = dep.message.extendedTextMessage.contextInfo.participant
var p = await gura.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply(mess.error.api)
}
break
case 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await gura.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
case 'clearall':{
									if (!isOwner && !dep.key.fromMe) return
									let chiit = await gura.chats.all()
									for (let i of chiit){
										gura.modifyChat(i.jid, 'clear', {
											includeStarred: false
											})
											}
											reply(`*Succes*`)
											}
									break
case 'yts': case 'youtubesearch': case 'ytsearch':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* _query_`)
									reply(mess.wait)
									yts(q)
									.then((res) => {
										let yt = res.videos
										let txt = ` *YOUTUBE SEARCH*\n\n*Hasil Pencarian : ${q}*\n`
										l = 1
										for (let i = 0; i < 15; i++){
											txt += `\n${l++}*Judul :* ${yt[i].title}\n*Id :* ${yt[i].videoId}\n*Upload :* ${yt[i].ago}\n*Ditonton :* ${yt[i].views}\n*Duration :* ${yt[i].timestamp}\n*Url :* ${yt[i].url}\n___________________\n`
											}
											sendFileFromUrl(yt[0].image, image, {caption: txt, quoted:dep})
										})
										.catch((err) => {
											console.log(color('[YT SEARCH]', 'red'), err)
											reply(mess.error)
											})
										}
									break
case 'bc':
            case 'broadcast':
            if (!dep.key.fromMe && !isOwner) return reply(mess.only.owner)
            if (args.length < 1) return reply('Textnya Mane?')
           anu = await gura.chats.all()
            for (let _ of anu) {
            buttons = [{buttonId: `.menu`, buttonText: {displayText: `Menu`}, type: 1}]
            buttonMessage = {
            headerType: "IMAGE",
            contentText: `*「 PESAN SIARAN BOT」*\n\n*${mot}Owner : https://wa.me/6281229859085*\n*${mot}Pesan : ${q}*`,
            footerText: `Gura Botz`,
            buttons: buttons,
            headerType: 1
            }
            gura.sendMessage(`${_.jid}`,
            buttonMessage,
            MessageType.buttonsMessage)
            }
            reply('*◯ Succes Broadcast ◯*')
            break   
case 'bc2':
      case 'broadcast2':
             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu = await gura.chats.all()
             if (isMedia && !dep.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dep
             bc = await gura.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             gura.sendMessage(_.jid, bc, image, {quoted:ftrol,caption: `*「 BROADCAST 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             gura.sendMessage(_.jid, 
			{"contentText": `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,
			"footerText": 'Crated By GuraBotz',
			"buttons": [{ buttonId: `${prefix}menu`,buttonText:{displayText: `🏷️MENU`},type:1},{ buttonId: `${prefix}owner`,buttonText:{displayText: `👥 OWNER`},type:1}], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync('./media/bc.jpg'), contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
}
             break
case 'bc3':
         if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
         if (args.length < 1) return reply('.......')
         anu = await gura.chats.all()
         if (isMedia && !dep.message.videoMessage || isQuotedImage) {
         const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
         bc = await gura.downloadMediaMessage(encmedia)
         for (let _ of anu) {
         gura.sendMessage(_.jid, bc, image, { caption: `[ Bot Broadcast ]\n\n${body.slice(4)}` })
         }
         reply('Suksess broadcast')
         } else {
         for (let _ of anu) {
         sendMess(_.jid, `[ *BOT BROADCAST* ]\n\n${body.slice(4)}`)
         }
         reply('Suksess broadcast')
         }
		break
case 'ig': case 'igphoto': case 'instaphoto': case 'instafoto': case 'igfoto': case 'igvideo': case 'instavideo': case 'instavid': case 'igreels': case 'instareels': case 'instareel': case 'igtv': case 'instatv':
		if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('link tidak valid')
		let urlnya = q
hx.igdl(args[0])
	    .then(async(result) => {
for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    gura.sendMessage(from,link,video,{thumbnail: Buffer.alloc(0), quoted: dep,caption: `Instagram •  ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    gura.sendMessage(from,link,image,{thumbnail: Buffer.alloc(0), quoted: dep,caption: `Instagram • ${i.type}`})                  
                }
            }
            }).catch((err) => reply(`Link tidak valid atau mungkin user private`))
            break
case 'igdl':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakevo('Linknya?')
        reply(mess.wait)
	    hx.igdl(args[0])
	    .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    gura.sendMessage(from,link,video,{quoted: ftrol,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    gura.sendMessage(from,link,image,{quoted: ftrol,caption: `Type : ${i.type}`})                  
                }
            }
            });
	    break
case'twitterhd':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakevo('Linknya?')
            ten = args[0]
            var res = await hx.twitter(`${ten}`)
            ren = `${res.HD}`
            sendMediaURL(from,ren,'DONE')
            break
case 'twittersd': 
if (args.length < 1) return reply('Link?')
lin = args[0]
hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = fs.readFileSync('./media/gura.jpeg')
sendMediaURL(from, Anu, 'Done!')
})
break
case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dep
            const tipes = await gura.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await gura.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		gura.sendMessage(from, mat, MessageType.extendedText, anu)
            break
case 'jadibot':
    if (!isPremium) return reply(`Kamu bukan user premium`)
    jadibot(reply,gura,from)
    break
    case 'stopjadibot':
    if(dep.dep.fromMe)return reply('tidak bisa stopjadibot kecuali owner')
    stopjadibot(reply)
    break
    case 'listbot':
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break
case 'group':
    case 'gc':
    case 'grup':
    stod = `${sender}`
stst = await gura.getStatus(`${sender.split('@')[0]}@c.us`)
listMsg = {
title : `${ucapanWaktu} - @${sender.split("@")[0]}`,
 buttonText: 'List Menu Group',
 footerText: 'GuraBotz',
 description: `\n*Jangan Spam Bang Ntar Ngelek*`,
 sections: [
                     {
                      "title": `GroupGuraBotz`,
 rows: [
                           {
                              "title": "Group Open",
                               "description" :"Membuka Group Agar Seluruh Member Dapat Mengirim Pesan",
                              "rowId": `${prefix}anjay open`
                           },
                          {
                              "title": "Group Close",
                               "description" :"Menutup Group Hanya Admin Yang Dapat Mengirim Chat",
                              "rowId": `${prefix}anjay close`
                           },
                           {
                              "title": "Promote All",
                               "description" :"Menaikan Seluruh Member Menjadi Admin",
                              "rowId": `${prefix}promoteall`
                           },
                           {
                              "title": "Demote All",
                               "description" :"Menurunkan Seluruh Admin Menjadi Member",
                              "rowId": `${prefix}demoteall`
                           },
                           {
                              "title": "Tag All",
                               "description" :"Menampilkan Tag Seluruh Member Group",
                              "rowId": `${prefix}tagall *Hai Kawan*`
                           },
                           {
                              "title": "Link Group",
                               "description" :"Menampilkan Link Group",
                              "rowId": `${prefix}linkgc`
                           },
                        ]
                     }],
 listType: 1
}

gura.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted: dep})
break
case 'anjay': 
                if (!isGroup) return reply('*Hanya Dapat Digunakan Di Dalam Group*');
        if (!isBotGroupAdmins) return reply('*Mohon Maaf Fitur Tidak Bisa Digunakan Karena Bot Bukan Admin*')
        if (args[0] == "open") {
          await gura.groupSettingChange(from, GroupSettingChange.messageSend, false)
					reply(`*Group Telah Dibuka*\n*Sekarang Semua Dapat Mengirim Pesan*`)
        } else if (args[0] == "close") {
          await gura.groupSettingChange(from, GroupSettingChange.messageSend, true)
					reply(`*Group Telah Ditutup*\n*Sekarang Hanya Admin Yang Dapat Mengirim Pesan*`)
        } else if (!q) {
        	var ini_gopayy =`*Hallo @${sender.split("@")[0]}*\n*Tekan Button Di Bawah Untuk Membuka Dan Menutup Group*`
var buttonss = [
{buttonId: `${prefix}anjay open`, buttonText:{displayText: 'Open Group'}, type: 1}, {buttonId: `${prefix}anjay close`, buttonText:{displayText: 'Close Group'}, type: 1},
{buttonId: `${prefix}gc3`, buttonText:{displayText: 'Menu Group Lainnya'}, type: 1},
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `BotWhatsApp By ArulGanz` ,
buttons: buttonss,
headerType: 1
}
gura.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: 'BotWhatsApp by ArulGanz',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: dep,sendEphemeral: true 
			})
        }
        break
case 'demoteall':
		if (!isOwner && !dep.key.fromMe) return reply(from)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(from)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                gura.groupDemoteAdmin(from, members_id)
                break
                case 'promoteall':
		if (!isOwner && !dep.key.fromMe) return sticOwner(from)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return sticNotAdmin(from)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                gura.groupMakeAdmin(from, members_id)
                break
        case 'linkgrup':
case 'linkgroup':
				case 'linkgc':
				case 'link':
				    if (!isGroup) return reply('*Hanya Bisa Digunakan Di Dalam Group*')
				    if (!isBotGroupAdmins) return reply('*Mohon Maaf Fitur Tidak Bisa Digunakan Karena Bot Bukan Admin*')
				    linkgc = await gura.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    gura.sendMessage(from, yeh, text, {quoted: dep})
			        break
			case 'tagall': 
if (!isGroup) return reply('Khusus Group Kak')
members_id = []
teks = `━ 𝐓𝐀𝐆 𝐀𝐋𝐋 ━︎\n\n𝙿𝙴𝚂𝙰𝙽 : ${q ? q : ''}\n\n`
teks += '\n'
for (let mem of groupMembers) {
teks += `${f} @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
		  break
case 'patnerbot':
stod = `${sender}`
stst = await gura.getStatus(`${sender.split('@')[0]}@c.us`)
listMsg = {
title : `${ucapanWaktu} - @${sender.split("@")[0]}`,
 buttonText: 'PATNER BOT',
 footerText: 'GuraBotz',
 description: `\n*Kami Berterimakasih Kepada All Creator Bot, Kami Bukan Mastah, Jangan Bully Bang*`,
 sections: [
                     {
                      "title": `Patner GuraBotz`,
 rows: [
                           {
                              "title": "ArulGanz",
                               "description" :"Menampilkan Info Patner",
                              "rowId": `${prefix}pb1`
                           }
                        ]
                     }],
 listType: 1
}

gura.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted: dep})
break
case 'pb1':
tg = `
┏━➤ 「 *InfoPatner*」
┃┃✯ Instagram = *https://bit.ly/3dT9725*
┃┃✯ Nomor = *https://tinyurl.com/yyju5b4k*
┗━━━━━━━`  
reply(tg)   
break
case 'officialgc':
  pp2 =`
┏━➤ 「 *Join Grup Bang*」
┃┃✯ *https://bit.ly/3dAK8Ag*
┗━━━━━━━`
reply(pp2)
        break 
case 'owner2':{
  const ynkos = 'BEGIN:VCARD\n' 
  + 'VERSION:3.0\n' 
  + `FN:ArulGanz\n`
  + `ORG: Owner GuraBotz;\n`
  + `TEL;type=CELL;type=VOICE;waid=6281229859085:+6285869134434\n`
  + 'END:VCARD'
gura.sendMessage(from, {displayname: "Owner Botz", vcard: ynkos}, MessageType.contact, { quoted: ftrol})
button = [
  {buttonId: `${prefix}patnerbot`, buttonText: {displayText: '★彡[ᴘᴀᴛɴᴇʀ ʙᴏᴛ]彡★'}, type: 1}
]
 buttons = {
    contentText: 'Nih Kak Owner ku><',
    footerText: `"Jangan membandingkan hidupmu dengan orang lain. Tidak ada perbandingan antara matahari dan bulan. Mereka bersinar saat waktunya tiba."`,
    buttons: button,
    headerType: 1
}
await gura.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: fakevo})
}
break      
case 'owner':
case 'admin':
let ini_list = []
ownerContact = ['6281229859085']
for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
const vname = gura.contacts[i] != undefined ? gura.contacts[i].vname || gura.contacts[i].notify : undefined
ini_list.push({
"displayName": "Owner GuraBotz",
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:GuraBotz\nitem1.TEL;waid=6281229859085:6281229859085\nitem1.X-ABLabel:ArulGanz\nitem2.TEL;waid=62815788590761:62815788590761\nitem2.X-ABLabel:GuraBotz\nitem3.EMAIL;type=INTERNET:arulganz119@gmail.com\nitem3.X-ABLabel:Email\nitem4.URL:https://instagram.com/_daaa_1\nitem4.X-ABLabel:instagram\nitem5.ADR:;;Singapura🇸🇬;;;;\nitem5.X-ABADR:ac\nitem5.X-ABLabel:🌍 Region\nitem6.X-ABLabel:Developer GuraBotz\nEND:VCARD"
})
}
hehe = await gura.sendMessage(from, {
"displayName": `${ini_list.length} kontak`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: dep })
button = [
  {buttonId: `${prefix}patnerbot`, buttonText: {displayText: '★彡[ᴘᴀᴛɴᴇʀ ʙᴏᴛ]彡★'}, type: 1}
]
 buttons = {
    contentText: 'Nih Kak Owner ku><',
    footerText: `"Jangan membandingkan hidupmu dengan orang lain. Tidak ada perbandingan antara matahari dan bulan. Mereka bersinar saat waktunya tiba."`,
    buttons: button,
    headerType: 1
}
await gura.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: fakevo})
break
			case 'ssweb':
            case 'ss':
                if (args.length < 1) return reply('Urlnya mana om')
					teks = q
					anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
					buff = await getBuffer(anu.screenshot)
					gura.sendMessage(from, buff, image, {quoted: ftrol, caption : teks})
					break
           case 'ping2': case 'botstatus': case 'statusbot': {
                let timestamp = speed()
                let latensi = speed() - timestamp
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Detik_ \n ${speed - speed2} _milidetik_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
           case 'ping':
           case 'speed':
           case 'speedbot':
           timestamp = speed();
			latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			child = stdout.toString('utf-8')
		    teks = child.replace(/Memory:/, "Ram:")
		    pingnya = `_*${latensi.toFixed(4)} Second*_`
			})
			teks11 = `*${latensi.toFixed(4)} Second*`
           reply(teks11)
        break;
case 'runtime':
reply(`${ke}${runtime(on)}${ke}`)
break
case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
 case 'twitter':
        if(!q) return reply('linknya?')
        capti2 = `*Twitter Downloader*`
        ya = fs.readFileSync('./media/twit.jpg')
        py =await gura.prepareMessage(from, ya, image)
        gbutsan = [{buttonId: `${prefix}twitterhd ${q}`, buttonText: {displayText: '📥Video HD'}, type: 1},{buttonId: `${prefix}twittersd ${q}`, buttonText: {displayText: '📥Video SD'}, type: 1}]
        gbuttonan = {
        imageMessage: py.message.imageMessage,
        contentText: capti2,
        footerText: '```Silahkan Pilih Medianya Kak```',
        buttons: gbutsan,
        headerType: 4
}
        await gura.sendMessage(from, gbuttonan, MessageType.buttonsMessage)
        break   
case 'ytmp4':
case 'ytmp3':
case 'youtube':
case 'ytdl':
        if(!q) return reply('linknya?')
        capti2 = `*Youtube Downloader*`
        ya = fs.readFileSync('./media/yutub.jpg')
        py =await gura.prepareMessage(from, ya, image)
        gbutsan = [{buttonId: `${prefix}p4 ${q}`, buttonText: {displayText: '📥Video'}, type: 1},{buttonId: `${prefix}p3 ${q}`, buttonText: {displayText: '📥Music'}, type: 1}]
        gbuttonan = {
        imageMessage: py.message.imageMessage,
        contentText: capti2,
        footerText: '```Silahkan Pilih Medianya Kak```',
        buttons: gbutsan,
        headerType: 4
}
        await gura.sendMessage(from, gbuttonan, MessageType.buttonsMessage)
        break   
case 'p3':
						if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
						let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks) return reply(mess.error.Iv)
						try {
							reply(mess.wait)
							yta(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `❏ *YTmp3*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
								sendFileFromUrl(dl_link, document, {mimetype: 'audio/mp3', filename: `${title}.mp3`, quoted: dep, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"◈ YTMP3",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:`${body.slice(7)}`}}}).catch(() => reply(mess.error.api))
							})
					        })
						} catch (err) {
							reply(mess.error.api)
						}
						break
case 'p4':
						if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
						let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks2) return reply(mess.error.Iv)
						try {
							reply(mess.wait)
							ytv(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `❏ *YTmp4*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
								sendFileFromUrl(dl_link, document, {mimetype: 'video/mp4', filename: `${title}.mp4`, quoted: dep, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"◈ YTMP4",mediaType:"2",thumbnail:getBuffer(thumb),sourceUrl:`${body.slice(7)}`}}}).catch(() => reply(mess.error.api))
							})
							})
						} catch (err) {
							reply(mess.error.api)
						}
						break
						case 'soundtt':
		 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.api)
 		if (!q) return reply('Linknya?')
 		reply(mess.wait)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
    nowmm = await getBuffer(audio)
	gura.sendMessage(from,nowmm ,MessageType.audio,{mimetype:'audio/mp4',quoted: dep})
		})
		})
		break 
					
						case 'wm':
if (!q) return reply('Linknya?')
var { TiktokDownloader } = require('./lib/tiktokdl')
reply(mess.wait)
res = await TiktokDownloader(`${q}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,  `${res.result.watermark}`)
break
									case 'nowm':
if (!q) return reply('Linknya?')
var { TiktokDownloader } = require('./lib/tiktokdl')
reply(mess.wait)
res = await TiktokDownloader(`${q}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,  `${res.result.nowatermark}`)
break
	case 'bcsticker':
case 'bcs':
					if (!dep.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await gura.chats.all()
					if (isMedia && !dep.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dep
						bc = await gura.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							gura.sendMessage(_.jid, bc, sticker, {quoted:dep})
						}
						reply('Suksess broadcast')
					}
					break
case 'mediafire':
if (!isPremium) return reply(`Kamu bukan user premium`)
if (args.length < 1) return reply('Link Nya Mana?')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error)
reply(mess.wait)
teks = args.join(' ')
rescun = await mediafiredl(teks)
result = `
❒「MediaFire Download」
├ Nama : ${rescun[0].nama}
├ Ukuran : ${rescun[0].size}
└ Link : ${rescun[0].link}`
reply(result)
gura.sendMessage(from, {url: `${rescun[0].link}` }, document, { mimetype: `${rescun[0].mime}`, filename:`${rescun[0].nama}`})
break
case 'totag':
			if (!isGroup) return reply(mess.only.group)
            if ((isMedia && !dep.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
            file = await gura.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await gura.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftrol
            }
            ini_buffer = fs.readFileSync(file)
            gura.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !dep.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
            file = await gura.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await gura.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftrol
            }
            ini_buffer = fs.readFileSync(file)
            gura.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !dep.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
            file = await gura.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await gura.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 359996400,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: ftrol
            }
            ini_buffer = fs.readFileSync(file)
            gura.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !dep.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
            file = await gura.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await gura.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: ftrol
            }
            ini_buffer = fs.readFileSync(file)
            gura.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !dep.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
            file = await gura.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await gura.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: ftrol
            }
            ini_buffer = fs.readFileSync(file)
            gura.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !dep.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
            file = await gura.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await gura.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 359996400,
                contextInfo: { mentionedJid: mem },
                quoted: ftrol
            }
            ini_buffer = fs.readFileSync(file)
            gura.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
case 'tinyurl':
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break
						case 'wame':
									wamo = q.replace(new RegExp("[()/ ]", "gi"), "+")
									reply(q?`wa.me/`+sender.split("@")[0]+'?text='+wamo: `wa.me/`+sender.split("@")[0])
									break
case 'play':
        if (args.length < 1) return reply(`Kirim perintah *${prefix}play query`)
        reply(mess.wait)
        let yut = await yts(q)
        yta(yut.videos[0].url)             
        .then(async(res) => {
        const { thumb, title, filesizeF, filesize } = res
        const capti = `*📥 Mendownload ${yut.all[0].title}*`      
        ya = await getBuffer(thumb)
        py =await gura.prepareMessage(from, ya, image)
        gbutsan = [{buttonId: `${prefix}p3 ${yut.all[0].url}`, buttonText: {displayText: '📥AUDIO'}, type: 1},{buttonId: `${prefix}p4 ${yut.all[0].url}`, buttonText: {displayText: '📥VIDEO'}, type: 1}]
        gbuttonan = {
        imageMessage: py.message.imageMessage,
        contentText: capti,
        footerText: '```Silahkan Pilih Medianya Kak```',
        buttons: gbutsan,
        headerType: 4
}
        await gura.sendMessage(from, gbuttonan, MessageType.buttonsMessage)})
        break                
        case 'tiktokdl':
        case 'tiktok':
        case 'tiktoknowm':
        case 'tiktokwm':
        case 'tiktokaudio':
        if(!q) return reply('linknya?')
        capti2 = `*Tiktok Downloader*`
        ya = fs.readFileSync('./media/tiktok.jpg')
        py =await gura.prepareMessage(from, ya, image)
        gbutsan = [{buttonId: `${prefix}wm ${q}`, buttonText: {displayText: '📥Pake WM'}, type: 1},{buttonId: `${prefix}nowm ${q}`, buttonText: {displayText: '📥No WM'}, type: 1}]
        gbuttonan = {
        imageMessage: py.message.imageMessage,
        contentText: capti2,
        footerText: '```Silahkan Pilih Medianya Kak```',
        buttons: gbutsan,
        headerType: 4
}
        await gura.sendMessage(from, gbuttonan, MessageType.buttonsMessage)
        break              
        case 'buttonmusic':
        if(!q) return reply('linknya?')              
        res = await yta(`${q}`).catch(e => {
        reply('```[ ! ] Error Saat Mengirim Audio```')})
        sendMediaURL(from, `${res.dl_link}`,{quoted:dep})
        break         
        case 'buttonvideo':
        if(!q) return reply('linknya?')            
        res = await ytv(`${q}`).catch(e => {
        reply('```[ ! ] Error Saat Mengirim Video```')})
        sendMediaURL(from, `${res.dl_link}`,'Nih Kack')
        break
case 'antilink':
        capti2 = `*Mode Antilink*`
        ya = fs.readFileSync('./media/antilink.jpg')
        py =await gura.prepareMessage(from, ya, image)
        gbutsan = [{buttonId: `${prefix}an1 enable`, buttonText: {displayText: '🔖ON'}, type: 1},{buttonId: `${prefix}an1 disable`, buttonText: {displayText: '🔖OFF'}, type: 1}]
        gbuttonan = {
        imageMessage: py.message.imageMessage,
        contentText: capti2,
        footerText: '```Silahkan Pilih Modenya Kak```',
        buttons: gbutsan,
        headerType: 4
}
        await gura.sendMessage(from, gbuttonan, MessageType.buttonsMessage)
        break                     
case 'an1':
                if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntilink) return reply(`Udah aktif`)
              anlink.push(from)
              fs.writeFileSync('./database/antilink.json', JSON.stringify(anlink))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = anlink.indexOf(from)
              anlink.splice(anu, 1)
              fs.writeFileSync('./database/antilink.json', JSON.stringify(anlink))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih enable atau disable`)
}
        break
case 'gifstiker': 
case 's':
case 'stickergif': 
case 'sticker': 
case 'stiker':
if ((isMedia && !dep.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
const media = await gura.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
 console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
 console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
gura.sendMessage(from, fs.readFileSync(ran), sticker, {quoted:dep})
 fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && dep.message.videoMessage.seconds < 11 || isQuotedVideo && dep.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
const media = await gura.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
reply(monospace(mess.wait))
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
gura.sendMessage(from, fs.readFileSync(ran), sticker, {quoted:ftrol})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
break
case 'stickwm': 
case 'swm':
if (isMedia && !dep.message.videoMessage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
if(!q)return reply(`Example : ${prefix + command} nama|author`)
let media = await gura.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
var packname = q.split('|')[0]
var author = q.split('|')[1]
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error)
})
.on('end', function () {
console.log('Finish')
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./stickers/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('Error')
gura.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: dep})
fs.unlinkSync(media)
fs.unlinkSync(`./stickers/takestick_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if ((isMedia && dep.message.videoMessage.fileLength < 10000000 || isQuotedVideo && dep.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
var pembawm = body.slice(9)
let media = await gura.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
var packname = pembawm.split('|')[0]
var author = pembawm.split('|')[1]
reply(monospace(mess.wait))
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error)
})
.on('end', function () {
console.log('Finish')
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./stickers/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('Error')
gura.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: dep})
fs.unlinkSync(media)
fs.unlinkSync(`./stickers/takestick_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else{
reply(`Format Error!*\n\n*Example :*\n*_Reply gambar/video dengan Caption ${prefix + command} Nama|Author_`)
}
break
case 'take':
case 'takestick':
case 'colong':
    		if (!isQuotedSticker) return reply('Tag Stikernya Om, Ijin Dulu Sama Yang Punya Stiker🤣')
            encmedia = JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await gura.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `GuraBotz`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `by ArulGanz`
            require('./lib/fetc').createExif(satu, dua)
			require('./lib/fetc').modStick(media, gura, dep, from)
			break
case 'get':
          case 'fetch': //ambil dari nuru
              if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
              res = await fetch(q)
              if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
              delete res
              throw `Content-Length: ${res.headers.get('content-length')}`
}
              if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
              txtx = await res.buffer()
              try {
              txtx = util.format(JSON.parse(txtx+''))
              } catch (e) {
              txtx = txtx + ''
              } finally {
              reply(txtx.slice(0, 65536) + '')
}
              break
case 'join': 
              if (!q) return reply('Linknya?')
              if (!isOwner) return reply(mess.only.owner)
              if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
              link = args[0].replace('https://chat.whatsapp.com/','')
              fak = gura.query({ json: ['action', 'invite', link],
              expect200: true })
              reply('Berhasil Masuk Grup')
              break
case 'hidetag':
              try {
              quotedText = dep.message.extendedTextMessage.contextInfo.quotedMessage.conversation
              hideTag(from, `${quotedText}`)
              } catch {
              hideTag(from, `${q}`)
}
              break
case 'q': 
if (!m.quoted) return reply('reply message!')
let qse = gura.serializeM(await m.getQuotedObj())
if (!qse.quoted) return reply('the message you replied does not contain a reply!')
await qse.quoted.copyNForward(m.chat, true)
break
default:
if (budy.startsWith('>')){
console.log(color('Eval Owner>_<', 'green'))
if (!isOwner && !itsMe) return reply(mess.only.owner)
try {
return gura.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted:dep})
} catch(err) {
e = String(err)
reply(e)
}
}

if (isCmd){
	iiir = fs.readFileSync('./database/gada.mp3')
                gura.sendMessage(from, iiir, MessageType.audio, {quoted: dep, mimetype: 'audio/mp4', ptt:true})
}

if (budy.startsWith('$')){
if (!itsMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${rply} :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}

}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'FINXBASE', color(sender.split('@')[0]))
	}		
	} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
}
	// console.log(e)
	}
}