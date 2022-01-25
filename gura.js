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
const { msgFilter } = require('./lib/antispam')

//----- DATABASE -------
let setting = JSON.parse(fs.readFileSync('./setting.json'))
const _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
let anlink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink1.json'))
const { jadibot, stopjadibot, listjadibot } = require('./database/jadibot.js')
const _premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const _limit = JSON.parse(fs.readFileSync('./database/limit.json'))




//----- SINGKAT -------
prefix = setting.prefix
owner = setting.owner
footer = setting.footer
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
modelmenu = "butpdf"
let limitawal = '5'
api = ["https://myselfff.herokuapp.com/docs"]

		const ofrply2 = fs.readFileSync('./media/gura.jpeg')
runa = process.uptime()         
const gggg = `Bot Aktif Selama ${kyun(runa)}`
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

limitend = 'Limit Anda Sudah Habis'
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
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `GuraBotz`,
                 "h": `Hai Kak ${pushname}`,
                 'duration': '99999', 
                 'caption': `Hai Kak ${pushname}`,
                 'jpegThumbnail': ofrply
                        }
                       }
	                  }
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
const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": tamnel//Gambarnye
					},
					"title": 'GuraBotz', 
					"description": "by ArulGanz", 
					"currencyCode": "IDR",
					"priceAmount1000": "70000000",
					"retailerId": 'Whatsapp Bot',
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
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
let fakeyt = {
             "title": `Hai Kak ${pushname}`,
             "body": `❒ 𝑵𝒐𝒕𝒆 : 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎!!`,
             "mediaType": 2,
             "previewType": 2,
             "thumbnail": ofrply2,
             "mediaUrl": "https://instagram.com/_daaa_1"
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
			ano = fs.readFileSync('./media/gura.jpeg')
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
if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
						console.log(color('[CMD]','magenta'), color(moment(dep.messageTimestamp * 1000).format('DD/MM/YYYY | HH:mm:ss'), 'white'), color(`${command}`,'magenta'), 'from', color(`${sender.split("@")[0]}`,'green'))
						return reply('Jangan Spam Om')
						} 
if (isCmd && msgFilter.isFiltered(from) && isGroup) {
						console.log(color('[CMD]','magenta'), color(moment(dep.messageTimestamp * 1000).format('DD/MM/YYYY | HH:mm:ss'), 'white'), color(`${command}`,'magenta'), 'from', color(`${sender.split("@")[0]}`,'green'))
						return reply('Jangan Spam Om')
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
const checkLimit = (sender) => {
				let found = false
				for (let lmt of _limit) {
					if (lmt.id === sender) {
						let limitCounts = limitawal - lmt.limit
						if (limitCounts <= 0) return gura.sendMessage(from,`Limit kamu sudah habis`, text,{ quoted: dep})
						gura.sendMessage(from, lang.limitcount(isPremium, limitCounts), text, { quoted : dep})
						found = true
					}
				}
					if (found === false) {
						let obj = { id: sender, limit: 1 }
						_limit.push(obj)
						fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
						gura.sendMessage(from, lang.limitcount(isPremium, limitCounts), text, { quoted : dep})
						}
					}
			const isLimit = (sender) =>{ 
				let position = false
				for (let i of _limit) {
					if (i.id === sender) {
						let limits = i.limit
						if (limits >= limitawal ) {
							position = true
							gura.sendMessage(from, limitend, text, {quoted: dep})
							return true
						} else {
							_limit
							position = true
						return false
						}
					}
				}
				if (position === false) {
					const obj = { id: sender, limit: 0 }
					_limit.push(obj)
					fs.writeFileSync('./database/limit.json',JSON.stringify(_limit))
					return false
					}
				}
				
				const limitAdd = (sender) => {
					if (isOwner && isPremium) {return false;}
					let position = false
					Object.keys(_limit).forEach((i) => {
						if (_limit[i].id == sender) {
							position = i
							}
						})
				if (position !== false) {
					_limit[position].limit += 1
					fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
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

const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await gura.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
gura.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButpdf = async (id, text, desc, gam, but = [], options = {}) => {
      gura.sendMessage(id,{contentText: text,
      footerText: desc,
	    buttons: but,
	    headerType: 'DOCUMENT',
	    documentMessage: {
	      url: "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
		    mimetype: "application/pdf",
		    title: "GuraBotz.pdf",
	      fileSha256: "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
		    fileLength: "9999999999",
		    pageCount: 999,
		    mediaKey: "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
		    fileName: "GuraBotz",
		    fileEncSha256: "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
		    directPath: "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
		    mediaKeyTimestamp: "1634472176",
	      jpegThumbnail: tamnel,
	      {quoted: ftoko, contextInfo: {
	        externalAdReply: fakeyt, 
	        mentionedJid: [`0@s.whatsapp.net`, sender, ownerNumber]
	}}}},
	'buttonsMessage',
	options)
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
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
     kma = vid1
     mhan = await gura.prepareMessage(from, kma, video)
     const buttonMessages = {
     videoMessage: mhan.message.videoMessage,
     contentText: text1,
     footerText: desc1,
     buttons: but,
     headerType: 5
     }
     gura.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
     }         	
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
 
var menubutlist = [
  {buttonId: `${prefix}owner`, buttonText: {displayText: 'OWNER'}, type: 1},
  {buttonId: `${prefix}patnerbot`, buttonText: {displayText: 'PATNERBOT'}, type: 1}
]

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
   
         

const menu  = `
𝐇𝐚𝐢 *${pushname}* - ${ucapanWaktu}, 

𝐒𝐚𝐲𝐚 𝐚𝐝𝐚𝐥𝐚𝐡 𝐆𝐮𝐫𝐚𝐁𝐨𝐭𝐳 𝐒𝐚𝐥𝐚𝐡 𝐒𝐚𝐭𝐮 𝐁𝐨𝐭 𝐖𝐡𝐚𝐭𝐬𝐚𝐀𝐩𝐩 𝐘𝐚𝐧𝐠 𝐃𝐚𝐩𝐚𝐭 𝐀𝐧𝐝𝐚 𝐆𝐮𝐧𝐚𝐤𝐚𝐧,
 
𝐁𝐞𝐫𝐢𝐤𝐮𝐭 𝐀𝐝𝐚𝐥𝐚𝐡 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐆𝐮𝐫𝐚𝐁𝐨𝐭𝐳 :
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏➤ *Other*➤
┃❒き⃟🐣 *.menu*
┃❒き⃟🐣 *.ssweb*
┃❒き⃟🐣 *.runtime*
┃❒き⃟🐣 *.owner*
┃❒き⃟🐣 *.get*
┃❒き⃟🐣 *.fdeface*
┃❒き⃟🐣 *.totag <reply media>*
┃❒き⃟🐣 *.jadibot* *Premium*
┃❒き⃟🐣 *.listbot*
┃❒き⃟🐣 *.ping*
┃❒き⃟🐣 *.chat 62xnxx|(pesannya)*
┃
┃𝑵𝒐𝒕𝒆 : 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎!!, 
┃𝑱𝒊𝒌𝒂 𝑭𝒊𝒕𝒖𝒓 𝑻𝒊𝒅𝒂𝒌 𝑾𝒐𝒓𝒌 𝑳𝒂𝒑𝒐𝒓𝒌𝒂𝒏 𝑲𝒆 𝑶𝒘𝒏𝒆𝒓, 
┃𝑲𝒆𝒕𝒊𝒌 .𝒐𝒘𝒏𝒆𝒓 𝑼𝒏𝒕𝒖𝒌 𝑵𝒐𝒎𝒐𝒓 𝑶𝒘𝒏𝒆𝒓.
┗━━━━━━━ 

➤ *Search*➤
┃❒き⃟🐣 *.lirik*
┃❒き⃟🐣 *.ytsearch*
┃❒き⃟🐣 *.pinterest*
┃❒き⃟🐣 *.image*
┃❒き⃟🐣 *.google (query)*
┃
┃𝑵𝒐𝒕𝒆 : 𝑱??𝒏𝒈𝒂𝒏 𝑺𝒑𝒂??!!, 
┃𝑱𝒊𝒌𝒂 𝑭𝒊𝒕𝒖𝒓 𝑻𝒊𝒅𝒂𝒌 𝑾𝒐𝒓𝒌 𝑳𝒂𝒑𝒐𝒓𝒌𝒂𝒏 𝑲𝒆 𝑶𝒘𝒏𝒆𝒓, 
┃𝑲𝒆𝒕𝒊𝒌 .𝒐𝒘𝒏𝒆𝒓 𝑼𝒏𝒕𝒖𝒌 𝑵𝒐𝒎𝒐𝒓 𝑶𝒘𝒏𝒆𝒓.
┗━━━━━━━

➤ *Tools*➤
┃❒き⃟🐣 *.sticker <reply gambar>*
┃❒き⃟🐣 *.sticker2 <reply gambar>*
┃❒き⃟🐣 *.gay <reply gambar>*
┃❒き⃟🐣 *.wasted <reply gambar>*
┃❒き⃟🐣 *.jail <reply gambar>*
┃❒き⃟🐣 *.red <reply gambar>*
┃❒き⃟🐣 *.blue <reply gambar>*
┃❒き⃟🐣 *.sepia <reply gambar>*
┃❒き⃟🐣 *.glass <reply gambar>*
┃❒き⃟🐣 *.passed <reply gambar>*
┃❒き⃟🐣 *.green <reply gambar>*
┃❒き⃟🐣 *.comrade <reply gambar>*
┃❒き⃟🐣 *.blurple <reply gambar>*
┃❒き⃟🐣 *.blurple2 <reply gambar>*
┃❒き⃟🐣 *.invert <reply gambar>*
┃❒き⃟🐣 *.invertgreyscale <reply gambar>*
┃❒き⃟🐣 *.greyscale <reply gambar>*
┃❒き⃟🐣 *.takestick* 
┃❒き⃟🐣 *.toimg <reply sticker>*
┃❒き⃟🐣 *.tourl <reply media>*
┃❒き⃟🐣 *.tomp3 <reply video>*
┃❒き⃟🐣 *.tinyurl <masukan link>*
┃❒き⃟🐣 *.ttp <masukan teks>*
┃❒き⃟🐣 *.attp <masukan teks>*
┃❒き⃟🐣 *.stickgura*
┃❒き⃟🐣 *.patrick*
┃❒き⃟🐣 *.doge*
┃❒き⃟🐣 *.robot <reply audio/vn>*
┃❒き⃟🐣 *.bass <reply audio/vn*
┃❒き⃟🐣 *.balik <reply audio/vn*
┃❒き⃟🐣 *.gemuk <reply audio/vn*
┃❒き⃟🐣 *.slow <reply audio/vn*
┃❒き⃟🐣 *.fast <reply audio/vn*
┃❒き⃟🐣 *.tupai <reply audio/vn*
┃
┃𝑵𝒐𝒕𝒆 : 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎!!, 
┃𝑱𝒊𝒌𝒂 𝑭𝒊𝒕𝒖𝒓 𝑻𝒊𝒅𝒂𝒌 𝑾𝒐𝒓𝒌 𝑳𝒂𝒑𝒐𝒓𝒌𝒂𝒏 𝑲𝒆 𝑶𝒘𝒏𝒆𝒓, 
┃𝑲𝒆𝒕𝒊𝒌 .𝒐𝒘𝒏𝒆𝒓 𝑼𝒏𝒕𝒖𝒌 𝑵𝒐𝒎𝒐𝒓 𝑶𝒘𝒏𝒆𝒓.
┗━━━━━━━

➤ *Group*➤
┃❒き⃟🐣 *.group <Pilih>*
┃❒き⃟🐣 *.tutuptime <waktu>*
┃❒き⃟🐣 *.bukatime <waktu>*
┃❒き⃟🐣 *.promoteall*
┃❒き⃟🐣 *.demoteall*
┃❒き⃟🐣 *.promote <@tag>*
┃❒き⃟🐣 *.demote <@tag>*
┃❒き⃟🐣 *.getnumber <@tag>*
┃❒き⃟🐣 *.getbio <@tag>*
┃❒き⃟🐣 *.add* *<628x>*
┃❒き⃟🐣 *.kick* *<@tag>*
┃
┃𝑵𝒐𝒕𝒆 : 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎!!, 
┃𝑱𝒊𝒌𝒂 𝑭𝒊𝒕𝒖𝒓 𝑻𝒊𝒅𝒂𝒌 𝑾𝒐𝒓𝒌 𝑳𝒂𝒑𝒐𝒓𝒌𝒂𝒏 𝑲𝒆 𝑶𝒘𝒏𝒆𝒓, 
┃𝑲𝒆𝒕𝒊𝒌 .𝒐𝒘𝒏𝒆𝒓 𝑼𝒏𝒕𝒖𝒌 𝑵𝒐𝒎𝒐𝒓 𝑶𝒘𝒏𝒆𝒓.
┗━━━━━━━

➤ *Owner*➤
┃❒き⃟🐣 *.join*
┃❒き⃟🐣 *.hidetag <masukan teks>*
┃❒き⃟🐣 *.tagall <masukan teks>*
┃❒き⃟🐣 *> eval*
┃❒き⃟🐣 *$ exec*
┃❒き⃟🐣 *.clearall*
┃❒き⃟🐣 *.self*
┃❒き⃟🐣 *.public*
┃❒き⃟🐣 *.setppbot*
┃❒き⃟🐣 *.upswteks <masukan teks>*
┃❒き⃟🐣 *.upswimage <masukan teks>*
┃❒き⃟🐣 *.upswvideo <masukan teks>*
┃
┃𝑵𝒐𝒕𝒆 : 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎!!, 
┃𝑱𝒊𝒌𝒂 𝑭𝒊𝒕𝒖𝒓 𝑻𝒊𝒅𝒂𝒌 𝑾𝒐𝒓𝒌 𝑳𝒂𝒑𝒐𝒓𝒌𝒂𝒏 𝑲𝒆 𝑶𝒘𝒏𝒆𝒓, 
┃𝑲𝒆𝒕𝒊𝒌 .𝒐𝒘𝒏𝒆𝒓 𝑼𝒏𝒕𝒖𝒌 𝑵𝒐𝒎𝒐𝒓 𝑶𝒘𝒏𝒆𝒓.
┗━━━━━━━

➤ *Download*➤
┃❒き⃟🐣 *.tiktok <link>*
┃❒き⃟🐣 *.igdl <link>*
┃❒き⃟🐣 *.igreels <link>*
┃❒き⃟🐣 *.igtv <link>*
┃❒き⃟🐣 *.igvideo <link>*
┃❒き⃟🐣 *.igfoto <link>*
┃❒き⃟🐣 *.play <judul lagu>*
┃❒き⃟🐣 *.youtube <link>*
┃❒き⃟🐣 *.mediafire <link>*
┃❒き⃟🐣 *.twitter <link>*
┃❒き⃟🐣 *.soundcloud <link>*
┃❒き⃟🐣 *.joox <judul lagu>*
┃
┃𝑵𝒐𝒕𝒆 : 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎!!, 
┃𝑱𝒊𝒌𝒂 𝑭𝒊𝒕𝒖𝒓 𝑻𝒊𝒅𝒂𝒌 𝑾𝒐𝒓𝒌 𝑳𝒂𝒑𝒐𝒓𝒌𝒂𝒏 𝑲𝒆 𝑶𝒘𝒏𝒆𝒓, 
┃𝑲𝒆𝒕𝒊𝒌 .𝒐𝒘𝒏𝒆𝒓 𝑼𝒏𝒕𝒖𝒌 𝑵𝒐𝒎𝒐𝒓 𝑶𝒘𝒏𝒆𝒓.
┗━━━━━━━

➤ *Anime*➤
┃❒き⃟🐣 *.husbu*
┃❒き⃟🐣 *.loli*
┃❒き⃟🐣 *.waifu*
┃❒き⃟🐣 *.milf*
┃❒き⃟🐣 *.cosplay*
┃❒き⃟🐣 *.wallml*
┃
┃𝑵𝒐𝒕𝒆 : 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎!!, 
┃𝑱𝒊𝒌𝒂 𝑭𝒊𝒕𝒖𝒓 𝑻𝒊𝒅𝒂𝒌 𝑾𝒐𝒓𝒌 𝑳𝒂𝒑𝒐𝒓𝒌𝒂𝒏 𝑲𝒆 𝑶𝒘𝒏𝒆𝒓, 
┃𝑲𝒆𝒕𝒊𝒌 .𝒐𝒘𝒏𝒆𝒓 𝑼𝒏𝒕𝒖𝒌 𝑵𝒐𝒎𝒐𝒓 𝑶𝒘𝒏𝒆𝒓.
┗━━━━━━━

➤ *Nsfw*➤
┃❒き⃟🐣 *.ass*
┃❒き⃟🐣 *.ahego*
┃❒き⃟🐣 *.bdsm*
┃❒き⃟🐣 *.blowjob*
┃❒き⃟🐣 *.cuckold*
┃❒き⃟🐣 *.cum*
┃❒き⃟🐣 *.ero*
┃❒き⃟🐣 *.femdom*
┃❒き⃟🐣 *.foot*
┃❒き⃟🐣 *.glasses*
┃❒き⃟🐣 *.gangbang*
┃❒き⃟🐣 *.hentai*
┃❒き⃟🐣 *.jahy*
┃❒き⃟🐣 *.orgy*
┃❒き⃟🐣 *.pussy*
┃❒き⃟🐣 *.panties*
┃❒き⃟🐣 *.thighs*
┃❒き⃟🐣 *.yuri*
┃❒き⃟🐣 *.nekonsfw*
┃
┃𝑵𝒐𝒕𝒆 : 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎!!, 
┃𝑱𝒊𝒌𝒂 𝑭𝒊𝒕𝒖𝒓 𝑻𝒊𝒅𝒂𝒌 𝑾𝒐𝒓𝒌 𝑳𝒂𝒑𝒐𝒓𝒌𝒂𝒏 𝑲𝒆 𝑶𝒘𝒏𝒆𝒓, 
┃𝑲𝒆𝒕𝒊𝒌 .𝒐𝒘𝒏𝒆𝒓 𝑼𝒏𝒕𝒖𝒌 𝑵𝒐𝒎𝒐𝒓 𝑶𝒘𝒏𝒆𝒓.
┗━━━━━━━

➤ *Maker*➤
┃❒き⃟🐣 *.rem <masukan teks>*
┃❒き⃟🐣 *.gura <masukan teks>*
┃❒き⃟🐣 *.kaneki <masukan teks>*
┃❒き⃟🐣 *.sadboy <masukan teks>*
┃❒き⃟🐣 *.girlneko <masukan teks>*
┃❒き⃟🐣 *.lolimaker <masukan teks>*
┃❒き⃟🐣 *.glitch teks1|teks2*
┃❒き⃟🐣 *.nulis <masukan teks>*
┃❒き⃟🐣 *.bneon <masukan teks>*
┃❒き⃟🐣 *.matrix <masukan teks>*
┃❒き⃟🐣 *.breakwall <masukan teks>*
┃❒き⃟🐣 *.dropwater <masukan teks>*
┃❒き⃟🐣 *.lithgtext <masukan teks>*
┃❒き⃟🐣 *.crismes <masukan teks>*
┃❒き⃟🐣 *.tfire <masukan teks>*
┃❒き⃟🐣 *.sandw <masukan teks>*
┃❒き⃟🐣 *.text3dbox <masukan teks>*
┃❒き⃟🐣 *.leavest <masukan teks>*
┃❒き⃟🐣 *.tlight <masukan teks>*
┃❒き⃟🐣 *.neon_light <masukan teks>*
┃❒き⃟🐣 *.blackpink <masukan teks>*
┃❒き⃟🐣 *.watercolor <masukan teks>*
┃❒き⃟🐣 *.gaming <masukan teks>*
┃❒き⃟🐣 *.rainbow <masukan teks>*
┃❒き⃟🐣 *.scfi <masukan teks>*
┃❒き⃟🐣 *.blue <masukan teks>*
┃❒き⃟🐣 *.juice <masukan teks>*
┃❒き⃟🐣 *.purple <masukan teks>*
┃❒き⃟🐣 *.toxic <masukan teks>*
┃❒き⃟🐣 *.peridot <masukan teks>*
┃❒き⃟🐣 *.meta <masukan teks>*
┃❒き⃟🐣 *.realistic <masukan teks>*
┃❒き⃟🐣 *.impressive <masukan teks>*
┃❒き⃟🐣 *.cracked <masukan teks>*
┃❒き⃟🐣 *.magma <masukan teks>*
┃❒き⃟🐣 *.thunder <masukan teks>*
┃❒き⃟🐣 *.berry <masukan teks>*
┃❒き⃟🐣 *.transformer <masukan teks>*
┃❒き⃟🐣 *.horror <masukan teks>*
┃❒き⃟🐣 *.metallic <masukan teks>*
┃❒き⃟🐣 *.circuit <masukan teks>*
┃❒き⃟🐣 *.sketch <masukan teks>*
┃❒き⃟🐣 *.halloween <masukan teks>*
┃❒き⃟🐣 *.discovery <masukan teks>*
┃❒き⃟🐣 *.fiction <masukan teks>*
┃❒き⃟🐣 *.demon <masukan teks>*
┃❒き⃟🐣 *.3dstone <masukan teks>*
┃❒き⃟🐣 *.embossed <masukan teks>*
┃❒き⃟🐣 *.broken <masukan teks>*
┃❒き⃟🐣 *.gradient <masukan teks>*
┃❒き⃟🐣 *.glossy <masukan teks>*
┃❒き⃟🐣 *.multicolor <masukan teks>*
┃❒き⃟🐣 *.neon_devil <masukan teks>*
┃❒き⃟🐣 *.underwater <masukan teks>*
┃❒き⃟🐣 *.bear <masukan teks>*
┃❒き⃟🐣 *.harry_potter <masukan teks>*
┃❒き⃟🐣 *.water_pipe <masukan teks>*
┃❒き⃟🐣 *.metalrainbow <masukan teks>*
┃❒き⃟🐣 *.balloon <masukan teks>*
┃❒き⃟🐣 *.balloon1 <masukan teks>*  
┃❒き⃟🐣 *.balloon3 <masukan teks>*
┃❒き⃟🐣 *.balloon4 <masukan teks>*
┃❒き⃟🐣 *.balloon5 <masukan teks>*
┃❒き⃟🐣 *.balloon6 <masukan teks>*
┃❒き⃟🐣 *.balloon7 <masukan teks>*
┃❒き⃟🐣 *.steel <masukan teks>*
┃❒き⃟🐣 *.denim <masukan teks>*
┃❒き⃟🐣 *.decorate <masukan teks>*
┃❒き⃟🐣 *.decorate2 <masukan teks>*
┃❒き⃟🐣 *.peridot <masukan teks>*
┃❒き⃟🐣 *.rock <masukan teks>*
┃❒き⃟🐣 *.lava <masukan teks>*
┃❒き⃟🐣 *.robot <masukan teks>*
┃❒き⃟🐣 *.equalizer <masukan teks>*
┃❒き⃟🐣 *.toxic <masukan teks>*
┃❒き⃟🐣 *.chocolate <masukan teks>* 
┃❒き⃟🐣 *.koifish <masukan teks>*
┃❒き⃟🐣 *.bread <masukan teks>*
┃❒き⃟🐣 *.matrix <masukan teks>*
┃❒き⃟🐣 *.neon2 <masukan teks>*
┃❒き⃟🐣 *.3dbox <masukan teks>*
┃❒き⃟🐣 *.3dsteel <masukan teks>*
┃❒き⃟🐣 *.breakwall <masukan teks>*
┃❒き⃟🐣 *.dropwater <masukan teks>*
┃❒き⃟🐣 *.halloween2 <masukan teks1|teks2>*
┃❒き⃟🐣 *.horror <masukan teks1|teks2>*
┃❒き⃟🐣 *.game8bit <masukan teks1|teks2>*
┃❒き⃟🐣 *.layered <masukan teks1|teks2>* 
┃❒き⃟🐣 *.glitch2 <masukan teks1|teks2>*
┃❒き⃟🐣 *.coolg <masukan teks1|teks2>*
┃❒き⃟🐣 *.coolwg <masukan teks1|teks2>* 
┃❒き⃟🐣 *.space3d <masukan teks1|teks2>* 
┃❒き⃟🐣 *.gtiktok <masukan teks1|teks2>* 
┃❒き⃟🐣 *.stone <masukan teks1|teks2>* 
┃❒き⃟🐣 *.marvel <masukan teks1|teks2>* 
┃❒き⃟🐣 *.marvel2 <masukan teks1|teks2>* 
┃❒き⃟🐣 *.pornhub <masukan teks1|teks2>* 
┃❒き⃟🐣 *.avengers <masukan teks1|teks2>*
┃❒き⃟🐣 *.metalr <masukan teks1|teks2>*
┃❒き⃟🐣 *.metalg <masukan teks1|teks2>*
┃❒き⃟🐣 *.metalg2 <masukan teks1|teks2>*
┃❒き⃟🐣 *.halloween2 <masukan teks1|teks2>*
┃❒き⃟🐣 *.lion <masukan teks1|teks2>*
┃❒き⃟🐣 *.wolf_bw <masukan teks1|teks2>*
┃❒き⃟🐣 *.wolf_g <masukan teks1|teks2>*
┃❒き⃟🐣 *.ninja <masukan teks1|teks2>*
┃❒き⃟🐣 *.3dsteel <masukan teks1|teks2>*
┃❒き⃟🐣 *.horror2 <masukan teks1|teks2>*
┃❒き⃟🐣 *.lava <masukan teks1|teks2>*
┃❒き⃟🐣 *.bagel <masukan teks1|teks2>*
┃
┃𝑵𝒐𝒕𝒆 : 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎!!, 
┃𝑱𝒊𝒌𝒂 𝑭𝒊𝒕𝒖𝒓 𝑻𝒊𝒅𝒂𝒌 𝑾𝒐𝒓𝒌 𝑳𝒂𝒑𝒐𝒓𝒌𝒂𝒏 𝑲𝒆 𝑶𝒘𝒏𝒆𝒓, 
┃𝑲𝒆𝒕𝒊𝒌 .𝒐𝒘𝒏𝒆𝒓 𝑼𝒏𝒕𝒖𝒌 𝑵𝒐𝒎𝒐𝒓 𝑶𝒘𝒏𝒆𝒓.
┗━━━━━━━

➤ *Asupan*➤
┃❒き⃟🐣 *.cecanrandom*
┃❒き⃟🐣 *.bocil*
┃❒き⃟🐣 *.ukhti*
┃❒き⃟🐣 *.santuy*
┃❒き⃟🐣 *.rika*
┃❒き⃟🐣 *.ghea*
┃❒き⃟🐣 *.hijaber*
┃
┃𝑵𝒐𝒕𝒆 : 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎!!, 
┃𝑱𝒊𝒌𝒂 𝑭𝒊𝒕𝒖𝒓 𝑻𝒊𝒅𝒂𝒌 𝑾𝒐𝒓𝒌 𝑳𝒂𝒑𝒐𝒓𝒌𝒂𝒏 𝑲𝒆 𝑶𝒘𝒏𝒆𝒓, 
┃𝑲𝒆𝒕𝒊𝒌 .𝒐𝒘𝒏𝒆𝒓 𝑼𝒏𝒕𝒖𝒌 𝑵𝒐𝒎𝒐𝒓 𝑶𝒘𝒏𝒆𝒓.
┗━━━━━━━

➤ *Fitur Tidak Berfaedah*➤
┃❒き⃟🐣 *.apakah*
┃❒き⃟🐣 *.kapankah*
┃❒き⃟🐣 *.bisakah*
┃❒き⃟🐣 *.ganteng*
┃❒き⃟🐣 *.cantik*
┃❒き⃟🐣 *.jelek*
┃❒き⃟🐣 *.goblok*
┃❒き⃟🐣 *.pinter*
┃❒き⃟🐣 *.bego*
┃❒き⃟🐣 *.jago*
┃❒き⃟🐣 *.nolep*
┃❒き⃟🐣 *.baik*
┃❒き⃟🐣 *.jahat*
┃❒き⃟🐣 *.babi*
┃❒き⃟🐣 *.beban*
┃❒き⃟🐣 *.monyet*
┃❒き⃟🐣 *.anjing*
┃❒き⃟🐣 *.haram*
┃❒き⃟🐣 *.wibu*
┃❒き⃟🐣 *.pakgirl*
┃❒き⃟🐣 *.pakboy*
┃❒き⃟🐣 *.wibu*
┃❒き⃟🐣 *.hebat*
┃❒き⃟🐣 *.sadboy*
┃❒き⃟🐣 *.sadgirl*
┃❒き⃟🐣 *.tolol*
┃
┃𝑵𝒐𝒕𝒆 : 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎!!, 
┃𝑱𝒊𝒌𝒂 𝑭𝒊𝒕𝒖𝒓 𝑻𝒊𝒅𝒂𝒌 𝑾𝒐𝒓𝒌 𝑳𝒂𝒑𝒐𝒓𝒌𝒂𝒏 𝑲𝒆 𝑶𝒘𝒏𝒆𝒓, 
┃𝑲𝒆𝒕𝒊𝒌 .𝒐𝒘𝒏𝒆𝒓 𝑼𝒏𝒕𝒖𝒌 𝑵𝒐𝒎𝒐𝒓 𝑶𝒘𝒏𝒆𝒓.
┗━━━━━━━
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
[𝙸𝚗𝚏𝚘 & 𝚁𝚞𝚕𝚎𝚜 𝙱𝚘𝚝] 
1. 𝙱𝚘𝚝 𝚝𝚒𝚍𝚊𝚔 𝚙𝚎𝚛𝚗𝚊𝚑 𝚖𝚎𝚗𝚢𝚒𝚖𝚙𝚊𝚗 𝚍𝚊𝚝𝚊 
    𝚙𝚎𝚗𝚐𝚐𝚞𝚗𝚊 
2. 𝙱𝚘𝚝 𝚝𝚒𝚍𝚊𝚔 𝚊𝚔𝚊𝚗 𝚖𝚎𝚛𝚎𝚜𝚙𝚘𝚗 𝚓𝚒𝚔𝚊 𝚜𝚊𝚕𝚊𝚑 
    𝚙𝚎𝚗𝚐𝚎𝚝𝚒𝚔𝚊𝚗 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 
3. 𝙲𝚊𝚕𝚕 & 𝚅𝚌 𝙱𝚘𝚝 = 𝙱𝚕𝚘𝚌𝚔 
4. 𝚂𝚙𝚊𝚖 = 𝙱𝚕𝚘𝚌𝚔 & 𝙾𝚞𝚝 𝙶𝚌 
5. 𝙹𝚒𝚔𝚊 𝚃𝚒𝚍𝚊𝚔 𝙼𝚎𝚛𝚎𝚜𝚙𝚘𝚗 𝙼𝚞𝚗𝚐𝚔𝚒𝚗 𝙱𝚘𝚝 𝙾𝚏𝚏
6. 𝚂𝚎𝚗𝚍 𝚟𝚒𝚛𝚝𝚎𝚡/𝚋𝚞𝚐 = 𝙱𝚕𝚘𝚌𝚔 
7. 𝙳𝚒𝚕𝚊𝚛𝚊𝚗𝚐 𝙼𝚎𝚗𝚌𝚞𝚕𝚒𝚔 𝙱𝚘𝚝 
8. 𝙶𝚞𝚗𝚊𝚔𝚊𝚗 𝙵𝚒𝚝𝚞𝚛 𝙼𝚒𝚗𝚒𝚖𝚊𝚕 40 𝙳𝚎𝚝𝚒𝚔 
    𝚂𝚎𝚔𝚊𝚕𝚒 
9. 𝚃𝚞𝚝𝚘𝚛 𝙹𝚊𝚍𝚒 𝙱𝚘𝚝 𝚍𝚒 𝚈𝚘𝚞𝚝𝚞𝚋𝚎 
10. 𝙹𝚊𝚗𝚐𝚊𝚗 𝚂𝚙𝚊𝚖 𝙵𝚒𝚝𝚞𝚛 𝙼𝚎𝚗𝚞!!
`      

//--------- COMMAND ----------

switch(command) {

case 'menu2':
if (modelmenu == "text") {
                    reply(menu)
                    } else if (modelmenu == "butpdf") {
                    sendButpdf (from, menu, "🌹Created by GuraBotz🌹", tamnel,  menubutlist)
                    }
                  break
case 'menu':
case 'help':
case 'allmenu':
ptod = "6281229859085@s.whatsapp.net"
        stod = `${sender}`
Sendbutdocument(from, menu, "GuraBotz by ArulGanz", tamnel, {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./media/dokumen.jpeg'), filename:`GuraBotz.pdf`, pageCount: 9999999 }, menubutlist, {quoted:ftoko, contextInfo: { mentionedJid: [stod], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`${ucapanWaktu} - ${pushname}\nInstagram`,mediaType:"2",thumbnail:ofrply,mediaUrl:`https://instagram.com/_daaa_1`}}})
case 'waifu':
             case 'loli':
            case 'husbu':
            case 'milf':
            case 'cosplay':
            case 'wallml':
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `Next`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'OWNER'},type:1}]
              imageMsg = ( await gura.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'©Created by GuraBotz', imageMessage: imageMsg,
              contentText:`*Done Nih*`,buttons,headerType:4}
              prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
              gura.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
case 'bneon':
case 'matrix':
case 'breakwall':
case 'dropwater':
case 'lithgtext':
case 'crismes':
case 'tfire':
case 'sandw':
case 'text3dbox':
case 'leavest':
case 'tlight':
case 'nulis':
if (args.length ==0)return reply('Text nya mana?')
bp = args.join(" ")
reply(mess.wait)
zks = await getBuffer(`https://api.zeks.me/api/${command}?apikey=apivinz&text=${bp}`)
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: `Owner`},type:1}]
imageMsg = (await gura.prepareMessageMedia(zks, "imageMessage", { thumbnail: tamnel, })).imageMessage
buttonsMessage = {footerText:'©Created By GuraBotz', imageMessage: imageMsg,
contentText:`*DONE NIH*`,buttons,headerType:4}
prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
gura.relayWAMessage(prep)
break
case 'blackpink':
case 'neon_light':
case 'gaming':
case 'watercolor':
if (args.length ==0)return reply('Text Nya Mana Kak?')
bo = args.join(" ")
reply(mess.wait)
jojo = await getBuffer(`https://docs-jojo.herokuapp.com/api/${command}?text=${bo}`)
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: `Owner`},type:1}]
imageMsg = (await gura.prepareMessageMedia(jojo, "imageMessage", { thumbnail: tamnel, })).imageMessage
buttonsMessage = {footerText:'©Created By GuraBotz', imageMessage: imageMsg,
contentText:`*DONE NIH*`,buttons,headerType:4}
prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
gura.relayWAMessage(prep)
break
case 'nulis': 
reply(mess.wait)
if (args.length < 1) return reply('*Teks nya mana?*') 
catat = args.join(" ")

catat = await getBuffer(`https://api.zeks.me/api/nulis?text=${catat}&apikey=apivinz`)
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: `Owner`},type:1}]
imageMsg = (await gura.prepareMessageMedia(catat, "imageMessage", { thumbnail: tamnel, })).imageMessage
buttonsMessage = {footerText:'©Created By GuraBotz', imageMessage: imageMsg,
contentText:`*DONE NIH*`,buttons,headerType:4}
prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
gura.relayWAMessage(prep)
break
case 'halloween2':
case 'horror':
case 'game8bit':
case 'layered': 
case 'glitch2':
case 'coolg':
case 'coolwg': 
case 'space3d': 
case 'gtiktok': 
case 'stone': 
case 'marvel': 
case 'marvel2': 
case 'pornhub': 
case 'avengers':
case 'metalr':
case 'metalg':
case 'metalg2':
case 'halloween2':
case 'lion':
case 'wolf_bw':
case 'wolf_g':
case 'ninja':
case '3dsteel':
case 'horror2':
case 'lava':
case 'bagel':
reply(mess.wait)
if (args.length < 1) return reply('Contoh: ${prefix + command} Gura|Botz')
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
let textpro = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/${command}?text=${m1}&text2=${m2}&apikey=Alphabot`)
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: `Owner`},type:1}]
imageMsg = (await gura.prepareMessageMedia(textpro, "imageMessage", { thumbnail: tamnel, })).imageMessage
buttonsMessage = {footerText:'©Created By GuraBotz', imageMessage: imageMsg,
contentText:`*DONE NIH*`,buttons,headerType:4}
prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
gura.relayWAMessage(prep)
break
case 'discovery':
case 'fiction':
case 'demon':
case '3dstone':
case 'embossed':
case 'broken':
case 'gradient':
case 'glossy':
case 'multicolor':
case 'neon_devil':
case 'underwater':
case 'bear':
case 'harry_potter':
case 'water_pipe':
case 'balloon':
case 'balloon1':  
case 'balloon3':
case 'balloon4':
case 'balloon5':
case 'balloon6':
case 'balloon7':
case 'steel':
case 'denim':
case 'decorate':
case 'decorate2':
case 'peridot':
case 'rock':
case 'lava':
case 'robot':
case 'equalizer':
case 'toxic':
case 'chocolate': 
case 'koifish':
case 'bread':
case 'matrix':
case 'neon2':
case '3dbox':
case '3dsteel':
case 'dropwater':
case 'breakwall':
case 'honey':
if (args.length < 1) return reply(`Teks nya?\nContoh: prefix + command GuraBotz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/${command}?text=${query}&apikey=Alphabot`)
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: `Owner`},type:1}]
imageMsg = (await gura.prepareMessageMedia(bf, "imageMessage", { thumbnail: tamnel, })).imageMessage
buttonsMessage = {footerText:'©Created By GuraBotz', imageMessage: imageMsg,
contentText:`*DONE NIH*`,buttons,headerType:4}
prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
gura.relayWAMessage(prep)
break
case 'metalrainbow':
if (args.length < 1) return reply(`Teks nya?\nContoh: prefix + command GuraBotz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api.dapuhy.xyz/api/textpro/${command}?text=${query}&apikey=wC7ZLKWUPR`)
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: `Owner`},type:1}]
imageMsg = (await gura.prepareMessageMedia(bf, "imageMessage", { thumbnail: tamnel, })).imageMessage
buttonsMessage = {footerText:'©Created By GuraBotz', imageMessage: imageMsg,
contentText:`*DONE NIH*`,buttons,headerType:4}
prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
gura.relayWAMessage(prep)
break
case 'glitch': 
reply(mess.wait)
if (args.length < 1) return reply('*Teks nya mana?*') 
top = arg.split('|')[0]
bottom = arg.split('|')[1]
ganz = await getBuffer(`https://api.zeks.me/api/gtext?text1=${top}&text2=${bottom}&apikey=apivinz`)
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: `Owner`},type:1}]
imageMsg = (await gura.prepareMessageMedia(ganz, "imageMessage", { thumbnail: tamnel, })).imageMessage
buttonsMessage = {footerText:'©Created By GuraBotz', imageMessage: imageMsg,
contentText:`*DONE NIH*`,buttons,headerType:4}
prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
gura.relayWAMessage(prep)
break
case 'hash':
                try {
                if (!isQuotedSticker) return reply('Reply Sticker!')
                const encmeds = JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                const mediastick = await gura.downloadMediaMessage(encmeds)
                var crypto = require('crypto')
                hash = crypto.createHash('sha256').update(mediastick).digest('base64');
                console.log(hash)
                reply (hash)
                } catch {
                	reply(`reply stiker dengan command ${prefix}hash`)
	}
					break   
case 'cecanrandom':
reply(mess.wait)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=ZeroYT7`)

buffer = await getBuffer(ini.result.url)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `Next`},type:1}]
imageMsg = (await gura.prepareMessageMedia(buffer, "imageMessage", { thumbnail: tamnel, })).imageMessage
buttonsMessage = {footerText:'©Created By GuraBotz', imageMessage: imageMsg,
contentText:`*DONE NIH*`,buttons,headerType:4}
prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
gura.relayWAMessage(prep)
break
case 'santuy':
reply(mess.wait)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=ZeroYT7`)

buffer = await getBuffer(ini.result.url)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️ NEXT`},type:1}]
videoMsg = (await gura.prepareMessageMedia(buffer, "videoMessage", { thumbnail: tamnel, })).videoMessage
              buttonsMessage = {footerText:'© Created by GuraBotz', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
              gura.relayWAMessage(prep)
              break
case 'ukhti':
reply(mess.wait)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=ZeroYT7`)

buffer = await getBuffer(ini.result.url)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️ NEXT`},type:1}]
videoMsg = (await gura.prepareMessageMedia(buffer, "videoMessage", { thumbnail: tamnel, })).videoMessage
              buttonsMessage = {footerText:'© Created by GuraBotz', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
              gura.relayWAMessage(prep)
              break
case 'bocil':
reply(mess.wait)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=ZeroYT7`)

buffer = await getBuffer(ini.result.url)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️ NEXT`},type:1}]
videoMsg = (await gura.prepareMessageMedia(buffer, "videoMessage", { thumbnail: tamnel, })).videoMessage
              buttonsMessage = {footerText:'© Created by GuraBotz', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
              gura.relayWAMessage(prep)
              break      
case 'asupan':
case 'mangayutri':
case 'alcakenya':
case 'mama_gina':
case 'syifa':
case 'riri':
case 'syania':
case 'viona':
case 'yana':
case 'ziva':
case 'nisa':
case 'aura':
case 'bunga':
case 'ayu':
case 'delvira':
case 'chika':
reply(mess.wait)
ini = await fetchJson(`https://api-alphabot.herokuapp.com/api/asupan/${command}?apikey=Alphabot`)

buffer = await getBuffer(ini.results.result)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️ NEXT`},type:1}]
videoMsg = (await gura.prepareMessageMedia(buffer, "videoMessage", { thumbnail: tamnel, })).videoMessage
              buttonsMessage = {footerText:'© Created by GuraBotz', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
              gura.relayWAMessage(prep)
              break
case 'ghea':
reply(mess.wait)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=ZeroYT7`)

buffer = await getBuffer(ini.result.url)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️ NEXT`},type:1}]
videoMsg = (await gura.prepareMessageMedia(buffer, "videoMessage", { thumbnail: tamnel, })).videoMessage
              buttonsMessage = {footerText:'© Created by GuraBotz', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
              gura.relayWAMessage(prep)
              break
case 'rika':
reply(mess.wait)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=ZeroYT7`)

buffer = await getBuffer(ini.result.url)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️ NEXT`},type:1}]
videoMsg = (await gura.prepareMessageMedia(buffer, "videoMessage", { thumbnail: tamnel, })).videoMessage
              buttonsMessage = {footerText:'© Created by GuraBotz', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
              gura.relayWAMessage(prep)
              break
 case 'tes':
      gura.sendMessage(from,{
      contentText: "Tes",
      footerText: "© GuraBotz",
      buttons: menubutlist,
      headerType: "template",
      templateButtonMessage: {
        button: {
        urlButton: {
        displayText: "Instagram Owner",
        url: "https://instagram.com/_daaa_1"
        },
        callButton: {
        displayText: "Owner",
        phoneNumber: "6281229859085@s.whatsapp.net"
        }
        },
        index: "6281229859085@s.whatsapp.net"
      }
      },'buttonsMessage')
      break
case "toviewonce":
case "tovo":
if (isImage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
let media = await gura.downloadAndSaveMediaMessage(encmedia)
gura.sendMessage(from, fs.readFileSync(media), image, {quoted: dep, viewOnce: true})
fs.unlinkSync(media)
} else if (isVideo || isQuotedVideo) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
let media = await gura.downloadAndSaveMediaMessage(encmedia)
gura.sendMessage(from, fs.readFileSync(media), video, {quoted: dep, viewOnce: true})
fs.unlinkSync(media)
} else {
reply(`Tag atau kirim gambar/video dengan caption ${command}`)
}
break
case 'ass':
case 'ahegao':
case 'bdsm':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'glasses':
case 'gangbang':
case 'hentai':
case 'jahy':
case 'orgy':
case 'pussy':
case 'panties':
case 'thighs':
case 'yuri':
case 'nsfwneko':
get = await fetchJson(`https://lexxy-api.herokuapp.com/docs/nsfw/${command}?apikey=Alphabot`)
ini = await getBuffer(get.result)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await gura.prepareMessageMedia(ini, "imageMessage", { thumbnail: ini, })).imageMessage
buttonsMessage = {footerText:'©Created By GuraBotz', imageMessage: imageMsg,
contentText:`DONE NIH`,buttons,headerType:4}
prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
gura.relayWAMessage(prep)
break
case 'rainbow': case 'scfi': case 'blue': case 'juice': case 'purple': case 'toxic': case 'peridot': case 'metal': 
case 'realistic': case 'impressive': case 'cracked': case 'magma': case 'thunder': case 'berry': case 'transformer': 
case 'horror': case 'metallic': case 'circuit': case 'sketch': case 'halloween':
if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix + command} GuraBotz`)
reply(mess.wait)
nyz5 = await fetchJson(`${api}/textpro/${command}?text=${q}`) 
nyz4 = await getBuffer(nyz5.result)
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: `Owner`},type:1}]
imageMsg = (await gura.prepareMessageMedia(nyz4, "imageMessage", { thumbnail: tamnel, })).imageMessage
buttonsMessage = {footerText:'©Created By GuraBotz', imageMessage: imageMsg,
contentText:`*DONE NIH*`,buttons,headerType:4}
prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
gura.relayWAMessage(prep)
break
case 'setppbot':
			    gura.updatePresence(from, Presence.composing)
					if (!isOwner) return reply('Kalau Bukan Owner Gak Usah Banyak Tingkah Deh')
					gura.updatePresence(from, Presence.composing) 
				   enmedia = JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				     meda = await gura.downloadAndSaveMediaMessage(enmedia)
					await gura.updateProfilePicture(botNumber, meda)
					reply('Makasih profil barunya😗')
					break
					case 'upswteks':
            if (!dep.key.fromMe && !isOwner) return
            if (!q) return reply('Isi teksnya!')
            gura.sendMessage('status@broadcast', `${q}`, extendedText)
            reply(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
            if (!dep.key.fromMe && !isOwner) return
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
            cihcih = await gura.downloadMediaMessage(swsw)
            gura.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            gura.sendMessage(from, bur, text, { quoted: dep })
            } else {
            reply('Reply gambarnya!')
            }
            break
    case 'upswvideo':
            if (!dep.key.fromMe && !isOwner) return
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
            cihcih = await gura.downloadMediaMessage(swsw)
            gura.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            gura.sendMessage(from, bur, text, { quoted: dep })
            } else {
            reply('reply videonya!')
            }
            break
case 'stickgura':
var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
sendStickerUrl(from, wifegerakx)
break

case 'stickdoge':
var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
sendStickerUrl(from, wifegerakx)
break

case 'patrick':
case 'patrik':
case 'patrickstick':
var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
sendStickerUrl(from, wifegerakx)
break
case 'gura':
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} GuraBotz`)
bo = args.join(" ")
reply(mess.wait)
bf = await getBuffer(`https://ziy.herokuapp.com/api/Gura?nama=${bo}&apikey=xZiyy`)
gura.sendMessage(from, bf, image, { quoted: dep, caption: 'Logo By GuraBotz' })
break
case 'kaneki':
case 'rem':
case 'lolimaker':
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Lexxy`)
bo = args.join(" ")
reply(mess.wait)
bf = await getBuffer(`https://ziy.herokuapp.com/api/${command}?nama=${bo}&apikey=xZiyy`)
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: `Owner`},type:1}]
imageMsg = (await gura.prepareMessageMedia(bf, "imageMessage", { thumbnail: tamnel, })).imageMessage
buttonsMessage = {footerText:'©Created By GuraBotz', imageMessage: imageMsg,
contentText:`*DONE NIH*`,buttons,headerType:4}
prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
gura.relayWAMessage(prep)
break
case 'girlneko':
case 'sadboy':
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Gura Botz`)
txt1 = args[0]
txt2 = args[1]
reply(mess.wait)
bf = await getBuffer(`https://ziy.herokuapp.com/api/${command}?text1=${txt1}&text2=${txt2}&apikey=xZiyy`)
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: `Owner`},type:1}]
imageMsg = (await gura.prepareMessageMedia(bf, "imageMessage", { thumbnail: tamnel, })).imageMessage
buttonsMessage = {footerText:'©Created By GuraBotz', imageMessage: imageMsg,
contentText:`*DONE NIH*`,buttons,headerType:4}
prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
gura.relayWAMessage(prep)
break
case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':  case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': case 'haram': case 'tolol': case 'pakboy': case 'pakgirl': case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':  
				   if (!isGroup) return reply('Hanya Bisa Di Group Kak') 
 				   jds = []
				   const A1 = groupMembers
  		 		const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `Yang *Ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   reply(D1, jds, true)
				   break
		case 'bisakah':
		if (args.length < 1) return alpha.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: dep})
				bisakah = q
					const bisa =['Tentu Saja Bisa! Kamu Adalah Orang Paling beruntung','Gak Bisa','Hmm Gua Gak Tau Yaa, tanya ama bapakau','Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					gura.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: dep })
					break
				case 'kapankah':
				if (args.length < 1) return alpha.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: dep})
				kapankah = q
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					gura.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: dep })
					break
           case 'apakah':
           if (args.length < 1) return alpha.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: dep})
           apakah = q
					const apa =['Iya','Tidak','Bisa Jadi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					gura.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: dep })
					break
case 'stickerzoom':
       case 'stikerzoom':
       case 'szoom':
       case 'stickergifzoom':
       case 'stikergifzoom':
       case 'sgifzoom':
              if ((isMedia && !dep.message.videoMessage || isQuotedImage) && args.length == 0) {
              var encmediat = isQuotedImage ? JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dep
             var mediat = await gura.downloadAndSaveMediaMessage(encmediat)
              ron = getRandom('.webp')
              exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
              fs.unlinkSync(mediat)
              if (err) return reply(`${err}`)
              exec(`webpmux -set exif ./sticker/data.exif ${ron} -o ${ron}`, async (error) => {
              if (error) return reply(`${error}`)
              gura.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:dep})
              fs.unlinkSync(ron)
})
})
              } else if ((isMedia && dep.message.videoMessage.seconds < 11 || isQuotedVideo && dep.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              var encmediatt = isQuotedVideo ? JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dep
              var mediat = await gura.downloadAndSaveMediaMessage(encmediatt)
              ron = getRandom('.webp')
              exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
              fs.unlinkSync(mediat)
              if (err) return reply(`${err}`)
              exec(`webpmux -set exif ./sticker/data.exif ${ron} -o ${ron}`, async (error) => {
              if (error) return reply(`${error}`)
              gura.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:dep})
              fs.unlinkSync(ron)
})
})
              } else {
              reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
              break

           case '18+':
var pll = 'Ini Kak Asupannya >_<'
reply(mess.wait)
blow = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=ZeroYt7`)
sendButVideo(from, pll, `Next to continue..!!`, blow, [                      
          { buttonId: `${prefix+command}`,
          buttonText: {displayText: `Next︎`,},type: 1}],
          {quoted:dep})          
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
               encmediaaa = isQuotedSticker? JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dep
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
           const guragans1  = await gura.downloadMediaMessage(biasalah, 'buffer') 
           const getbg = await uploadImages(guragans1, true) 
           reply(mess.wait)
           pft = await getBuffer(`http://lolhuman.herokuapp.com/api/removebg?apikey=GuraLol&img=${getbg}`)
           await gura.sendMessage(from, pft, image, {quoted:dep,caption:'Done'}).catch((err) => reply('Kebanyakan Dosa Kali Lu Jadi Erorr deh'))
           break
case 'ttp':
				
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}ttp GuraBotz`)
					atetepe = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=DhenxsKey&text=${encodeURIComponent(q)}`)
					gura.sendMessage(from, atetepe, sticker, { quoted: dep })
					break
       case 'attp':
       reply(mess.wait) 
              if (args.length == 0) return reply(`Example: ${prefix + command} Gura`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              gura.sendMessage(from, buffer, sticker, { quoted: dep })
              await limitAdd(sender)
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
case 'triggered': case 'gay': case 'glass': case 'passed': case 'jail': case 'comrade':case 'green': case 'blue': case 'sepia': case 'wasted': case 'greyscale': case 'blurple2': case 'blurple': case 'red': case 'invertgreyscale': case 'invert':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !dep.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dep 
					reply(mess.wait)
					owgi = await gura.downloadMediaMessage(ger)
				    anu = await uploadImages(owgi)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${anu}`
					exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(lang.tryAgain())
					gura.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: dep})
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break 
					case 'jadian':
jds = []
jdii = groupMembers
koss = groupMembers
akuu = jdii[Math.floor(Math.random() * jdii.length)]
diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  ( ♥️ ) @${diaa.jid.split('@')[0]} `
jds.push(akuu.jid)
jds.push(diaa.jid)
reply(teks, jds, true)
break
//*Mencoba Game
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
case 'joox':
if (!q) return reply('Lagu apa?')
reply(mess.wait)
anu = await fetchJson(`https://api.zeks.me/api/joox?apikey=apivinz&q=${q}`)
get = anu.data
thu = await getBuffer(get.thumb)
tes = `*Judul :* ${get.judul}\n`
tes = `*Penyanyi :* ${get.artist}\n`
tes = `*Size :* ${get.size}\n\nTunggu Sebentar Bot Sedang Mengirim Audio`
gura.sendMessage(from,thu,image,{thumbnail: tamnel, quoted: dep,caption: `${tes}` })
res = await getBuffer(get.audio)
gura.sendMessage(from, res, audio, { mimetype: 'audio/mp4', duration: 3000, quoted: dep })
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
 case 'sticker2':
		  case 's2':
		  var imgbb = require('imgbb-uploader')
if ((isMedia && !dep.message.videoMessage || isQuotedImage || isQuotedSticker)) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dep
owgi = await  gura.downloadAndSaveMediaMessage(ger)
anu = await imgbb("91904762b2cd230ce1d861279bd6bf1d", owgi)
tekks = `${anu.display_url}`
anu1 = `${tekks}`
sendStickerFromUrl(from, `${anu1}`)
} else {
reply('Gunakan foto!')
}
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
        gbutsan = [{buttonId: `${prefix}ytp4 ${q}`, buttonText: {displayText: '📥Video'}, type: 1},{buttonId: `${prefix}ytp3 ${q}`, buttonText: {displayText: '📥Music'}, type: 1}]
        gbuttonan = {
        imageMessage: py.message.imageMessage,
        contentText: capti2,
        footerText: '```Silahkan Pilih Medianya Kak```',
        buttons: gbutsan,
        headerType: 4
}
        await gura.sendMessage(from, gbuttonan, MessageType.buttonsMessage)
        break  
case 'p42':
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp4?apikey=apivinz&q=${bo}`)
mp4 = await getBuffer(ini.result.url_video)
gura.sendMessage(from, mp4, video)
break
case 'p424':
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp3?query=${bo}&apikey=Alphabot`)
mp4 = await getBuffer(ini.results.result)
sendFileFromUrl(ini.results.result, document, {mimetype: 'video/mp4', filename: `${ini.results.title}.mp4`, quoted: ftoko})
break
case 'p32':
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp3?query=${bo}&apikey=Alphabot`)
mp3 = await getBuffer(ini.results.result)
gura.sendMessage(from, mp3, audio)
break 
case 'p323':
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp3?query=${bo}&apikey=Alphabot`)
sendFileFromUrl(ini.results.result, document, {mimetype: 'audio/mp3', filename: `${ini.results.title}.mp3`, quoted: ftoko})
break 
case 'ytp3':
reply(mess.wait)
if (args.length ==0)return reply('Link nya Mana?')
ini_link = args.join(" ")
anu = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/audio?url=${ini_link}&apikey=Alphabot`)
get = anu.results
sendFileFromUrl(anu.results.result, document, {mimetype: 'audio/mp3', filename: `${anu.results.title}.mp3`, quoted: ftoko})
break
case 'ytp4':
reply(mess.wait)
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
anu = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/video?url=${ini_link}&apikey=Alphabot`)
get = anu.results
sendFileFromUrl(anu.results.result, document, {mimetype: 'video/mp4', filename: `${anu.results.title}.mp3`, quoted: ftoko})
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
case 'robot':
encmedial = JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await gura.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
gura.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: dep})
fs.unlinkSync(ran)
})
break
case 'gemuk':
					encmediaz = JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaz = await gura.downloadAndSaveMediaMessage(encmediaz)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediaz)
						if (err) return ephe('Error!')
						hah = fs.readFileSync(ran)
					gura.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:dep})
						fs.unlinkSync(ran)
					})
					break
case 'balik':
	encmediau = JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await gura.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
gura.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:dep})
fs.unlinkSync(ran)
	})
break
case 'bass':                 
					encmediao = JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediao = await gura.downloadAndSaveMediaMessage(encmediao)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediao)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						gura.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:dep})
						fs.unlinkSync(ran)
					})
				break
				case 'fast':
		            if (!isQuotedVideo) return reply('Reply videonya!')
		            encmedia3 = JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media3 = await gura.downloadAndSaveMediaMessage(encmedia3)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media3} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media3)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            gura.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: dep })
		            fs.unlinkSync(ran)
		            })
					break   
		    case 'slow':
		            if (!isQuotedVideo) return reply('Reply videonya!')
		            encmedia4 = JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media4 = await gura.downloadAndSaveMediaMessage(encmedia4)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media4} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media4)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            gura.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: dep })
		            fs.unlinkSync(ran)
		            })
					break   
		case 'tupai':
var encmedia6 = JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var media6 = await gura.downloadAndSaveMediaMessage(encmedia6)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media6} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media6)
if (err) return reply('Error!')
let hah = fs.readFileSync(ran)
gura.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: dep})
fs.unlinkSync(ran)
})
					break   
						case 'wm':
						pll = `Nih Kak, Sama Sama 😊`
if (!q) return reply('Linknya?')
var { TiktokDownloader } = require('./lib/tiktokdl')
reply(mess.wait)
res = await TiktokDownloader(`${q}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,  `${res.result.nowatermark}`, pll)
break
									case 'nowm':
									pll = `Nih Kak, Sama Sama 😊`
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
							gura.sendMessage(_.jid, bc, sticker, {quoted:ftoko})
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
        if(!q) return reply(`Kirim perintah *${prefix}play query`)
        reply(mess.wait)
        let yut = await yts(q)
        yta(yut.videos[0].url)             
        .then(async(res) => {
        const { thumb, title, filesizeF, filesize } = res
        const capti = `*📥 Mendownload ${yut.all[0].title}*`      
        ya = await getBuffer(thumb)
        py =await gura.prepareMessage(from, ya, image)
        gbutsan = [{buttonId: `${prefix}p323 ${q}`, buttonText: {displayText: '📥AUDIO'}, type: 1},{buttonId: `${prefix}p424 ${q}`, buttonText: {displayText: '📥VIDEO'}, type: 1}]
        gbuttonan = {
        imageMessage: py.message.imageMessage,
        contentText: capti,
        footerText: '```Silahkan Pilih Medianya Kak```',
        buttons: gbutsan,
        headerType: 4
}
        await gura.sendMessage(from, gbuttonan, MessageType.buttonsMessage)})
        break
case 'scplay': 
       case 'soundcloud':
              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('soundcloud')) return reply('Linknya Eror Ngab')
              reply(mess.wait)
              anu = await fetchJson(`https://api.zeks.me/api/soundcloud?apikey=apivinz&url=${q}`)
             .then((data) => { sendMediaURL(from, data.result, ftoko) })
             .catch((err) => { reply('*Error Bang*') })
              break
        case 'joox':
if(!q)return reply(`Judul lagu nya mana?`)
reply(mess.wait)
jx = await fetchJson(`https://api.zeks.me/api/joox?apikey=apivinz&q=${q}`)
jxx = `🌹 *JOOX DOWNLOADER*

🔖 *Size* : ${jx.data[0].size}
🔖 *Judul* : ${jx.data[0].judul}
🔖 *Url* : ${jx.data[0].audio}
🔖 *Album* : ${jx.data[0].album}

_Tunggu Sebentar Bot Sedang Mengirimkan Audio_
`
sendMediaURL(from,jx.data[0].thumb,(jxx))
sendFileFromUrl(jx.data[0].audio, document, {mimetype: 'audio/mp3', filename: `${jx.data[0].judul}.mp3`, quoted: ftoko})
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