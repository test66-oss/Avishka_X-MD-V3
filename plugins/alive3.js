const {cmd , commands} = require('../command')
const os = require("os")
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, Func, fetchJson} = require('../lib/functions')
const axios = require('axios')
cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    react: "🛠️",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const msr =await fetchJson('https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/Mreply.json')

const voice = {
    alive: 'https://github.com/athulakumara604/ASITHA-MD-DATABASE/raw/main/Alivevoice/0909.MP3'
}
const config = await readEnv();
const aliveMsg = config.ALIVE_MSG 
let aliveMessage = ` 
*╭─「 ALIVE 」──────●●►*
*│◈ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 -* ${runtime(process.uptime())}
*│◈ 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 -* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*╰────────────────●●►*
 *${msr.ALIVE_NEWS}*
*╰────────────────●●►*
 ${aliveMsg}

`

const ownerdata = (await axios.get('https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/ditels/ditels.json')).data
            let LOGO = ownerdata.imageurl;
            let BTN = ownerdata.button;
            let FOOTER = ownerdata.footer;
            let BTNURL = ownerdata.buttonurl;
            let HEADER = ownerdata.header;
               
let prefix = config.PREFIX;

let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: BTN,
                        url: BTNURL,
                        merchant_url: BTNURL
                    }),
                },
                 {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
            display_text: "GITHUB",
            url: "https://github.com/Koyeb-LK/ARROW-MD",
            merchant_url: "https://github.com/Koyeb-LK/ARROW-MD"
        }),},
             
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "PING 🚀",
                    id: prefix + "ping"
                }),
            } ,
            
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "MENU 📑",
                    id: prefix + "menu"
                }),
            } 

              ]

let message = {
                    image: LOGO,
                    header: `*HELLO* ${pushname}`,
                    footer: FOOTER,
                    body: aliveMessage

}
await conn.sendMessage(from, { audio: { url: voice.alive }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })

return conn.sendButtonMessage(from, buttons, m, message)
} catch (e) {
const msr = (await fetchJson('https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/ditels/ditels.json'))
await conn.sendMessage(from, { react: { text: `❌`, key: mek.key } })
console.log(e)
reply(msr.replyMsg.erro)
}
})
