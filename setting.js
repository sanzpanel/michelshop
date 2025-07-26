//Pairing Code
global.pairingCode = true //true = gausah scan qr cukup 1 hp || false = harus scan qr dan 2 hp

//Setting velzz.shop
global.api_id = "9a7cbdcc"
global.api_key = "VS-8dc29292ac1a48"

//Database mongodb || Jika ingin menggunakan database lokal tidak perlu diisi
global.mongoURL = ""

//Persentase fee deposit
global.feeDepo = 2

//Type profit
global.type = "persen" //persen = profit menggunakan persentase || nominal = profit menggunakan nominal

//Persentase default || Jika type profit menggunakan persentase
global.bronze = 3.5 //Persentase keuntungan Bronze
global.silver = 2 //Persentase keuntungan Silver
global.gold = 1 //Persentase keuntungan Gold

//Profit nominal default || Jika type profit menggunakan nominal
global.nBronze = 800 //Nominal keuntungan Bronze
global.nSilver = 400 //Nominal keuntungan Silver
global.nGold = 200 //Nominal keuntungan Gold

//Harga upgrade role
global.uSilver = 50000
global.uGold = 100000

//Other
global.botName = "MichelShop" //Nama bot
global.owner = ["6283182257186", ""] //Ganti agar fitur owner bisa digunakan
global.ownerNomer = "6283182257186" //Nomor lu
global.ownerName = "sanznnnn" //Nama lu
global.packname = "MichelBotz" //Seterah
global.author = "Created By @sanznnnn" //Seterah
global.sessionName = "session" //Ngga usah di ganti
global.linkGroup = "https://chat.whatsapp.com/" //Link gc lu

//Image
global.thumbnail = "./options/image/thumbnail.jpg"

//Message
global.mess = {
  sukses: "Done🤗",
  admin: "Command ini hanya bisa digunakan oleh Admin Grup",
  botAdmin: "Bot Harus menjadi admin",
  owner: "Command ini hanya dapat digunakan oleh owner bot",
  prem: "Command ini khusus member premium",
  group: "Command ini hanya bisa digunakan di grup",
  private: "Command ini hanya bisa digunakan di Private Chat",
  wait: "⏳ Mohon tunggu sebentar...",
  error: {
    lv: "Link yang kamu berikan tidak valid",
    api: "Maaf terjadi kesalahan"
  }
}

//Payment
global.payment = {
  dana: {
    nope: "083182257186",
    an: "SAN*****"
  },
  gopay: {
    nope: "-",
    an: "-"
  },
  ovo: {
    nope: "-",
    an: "-"
  }
}

//Function buat menu
const fs = require("fs");
const chalk = require('chalk');
const moment = require("moment-timezone");
const { runtime } = require("./function/myfunc");

function toRupiah(angka) {
  var saldo = '';
  var angkarev = angka.toString().split('').reverse().join('');
  for (var i = 0; i < angkarev.length; i++)
    if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
  return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
    
//Tampilan menu
global.menu = (prefix, sender, pushname) => {
  return `*🤖 BOT INFO 🤖*
• Bot Name: ${botName}
• Runtime: ${runtime(process.uptime())}
• Owner: @${ownerNomer}

*👤 USER INFO 👤*
• Tag: @${sender.split("@")[0]}
• Name: ${pushname}
• Saldo: Rp${toRupiah(db.data.users[sender].saldo)}
• Role: ${db.data.users[sender].role.slice(0, 1).toUpperCase() + db.data.users[sender].role.slice(1)}

*📆 DATE INFO 📆*
• Masehi: ${moment.tz("Asia/Jakarta").format("DD MMMM YYYY")}

*⏰ TIME INFO ⏰*
• WIB: ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
• WITA: ${moment.tz('Asia/Makassar').format('HH:mm:ss')}
• WIT: ${moment.tz('Asia/Jayapura').format('HH:mm:ss')}`
}

global.allmenu = (prefix, sender, pushname) => {
  let more = String.fromCharCode(8206)
  let readmore = more.repeat(4001)
  return `*🤖 BOT INFO 🤖*
• Bot Name: ${botName}
• Runtime: ${runtime(process.uptime())}
• Owner: @${ownerNomer}

*👤 USER INFO 👤*
• Tag: @${sender.split("@")[0]}
• Name: ${pushname}
• Saldo: Rp${toRupiah(db.data.users[sender].saldo)}
• Role: ${db.data.users[sender].role.slice(0, 1).toUpperCase() + db.data.users[sender].role.slice(1)}

*📆 DATE INFO 📆*
• Masehi: ${moment.tz("Asia/Jakarta").format("DD MMMM YYYY")}

*⏰ TIME INFO ⏰*
• WIB: ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
• WITA: ${moment.tz('Asia/Makassar').format('HH:mm:ss')}
• WIT: ${moment.tz('Asia/Jayapura').format('HH:mm:ss')}
${readmore}
╭─────╼「 *GROUP MENU* 」
│☛ ${prefix}ceksewa
│☛ ${prefix}kick
│☛ ${prefix}open
│☛ ${prefix}close
│☛ ${prefix}tagall
│☛ ${prefix}hidetag
│☛ ${prefix}delete
│☛ ${prefix}revoke
│☛ ${prefix}antilink
│☛ ${prefix}antilinkv2
│☛ ${prefix}welcome
│☛ ${prefix}promote
│☛ ${prefix}demote
│☛ ${prefix}setdesc
│☛ ${prefix}linkgc
│☛ ${prefix}setppgc
╰─────╼

╭─────╼「 *INFO BOT* 」
│☛ ${prefix}creator
│☛ ${prefix}owner
│☛ ${prefix}ping
│☛ ${prefix}runtime
│☛ ${prefix}script
╰─────╼

╭─────╼「 *OWNER MENU* 」
│☛ ${prefix}cekip
│☛ ${prefix}profile
│☛ ${prefix}settype (Type profit)
│☛ ${prefix}setprofit
│☛ ${prefix}addsaldo
│☛ ${prefix}minsaldo
│☛ ${prefix}addsewa
│☛ ${prefix}delsewa
│☛ ${prefix}listsewa
│☛ ${prefix}block
│☛ ${prefix}unblock
│☛ ${prefix}backup
╰─────╼

╭─────╼「 *STALKER MENU* 」
│☛ ${prefix}cekdana
│☛ ${prefix}cekgopay
│☛ ${prefix}cekgopaydriver
│☛ ${prefix}cekgrab
│☛ ${prefix}cekgrabdriver
│☛ ${prefix}cekisaku
│☛ ${prefix}ceklinkaja
│☛ ${prefix}cekovo
│☛ ${prefix}cekshopeepay
│☛ ${prefix}cekpln
│☛ ${prefix}cekcod
│☛ ${prefix}cekff
│☛ ${prefix}cekgi
│☛ ${prefix}cekhok
│☛ ${prefix}cekla
│☛ ${prefix}cekml
│☛ ${prefix}cekpb
│☛ ${prefix}cekpubg
│☛ ${prefix}ceksm
│☛ ${prefix}ceksus
│☛ ${prefix}cekvalo
╰─────╼

╭─────╼「 *STORE MENU* 」
│☛ ${prefix}list
│☛ ${prefix}addlist
│☛ ${prefix}dellist
│☛ ${prefix}setlist
│☛ ${prefix}testi
│☛ ${prefix}addtesti
│☛ ${prefix}deltesti
│☛ ${prefix}settesti
│☛ ${prefix}kalkulator
│☛ ${prefix}done
│☛ ${prefix}setdone
│☛ ${prefix}deldone
│☛ ${prefix}changedone
│☛ ${prefix}proses
│☛ ${prefix}setproses
│☛ ${prefix}delproses
│☛ ${prefix}changeproses
╰─────╼

╭─────╼「 *TOPUP MENU* 」
│☛ ${prefix}deposit
│☛ ${prefix}saldo
│☛ ${prefix}listharga
│☛ ${prefix}upgrade
╰─────╼`
}

global.groupmenu = (prefix, sender, pushname) => {
  let more = String.fromCharCode(8206)
  let readmore = more.repeat(4001)
  return `*🤖 BOT INFO 🤖*
• Bot Name: ${botName}
• Runtime: ${runtime(process.uptime())}
• Owner: @${ownerNomer}

*👤 USER INFO 👤*
• Tag: @${sender.split("@")[0]}
• Name: ${pushname}
• Saldo: Rp${toRupiah(db.data.users[sender].saldo)}
• Role: ${db.data.users[sender].role.slice(0, 1).toUpperCase() + db.data.users[sender].role.slice(1)}

*📆 DATE INFO 📆*
• Masehi: ${moment.tz("Asia/Jakarta").format("DD MMMM YYYY")}

*⏰ TIME INFO ⏰*
• WIB: ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
• WITA: ${moment.tz('Asia/Makassar').format('HH:mm:ss')}
• WIT: ${moment.tz('Asia/Jayapura').format('HH:mm:ss')}
${readmore}
╭─────╼「 *GROUP MENU* 」
│☛ ${prefix}ceksewa
│☛ ${prefix}kick
│☛ ${prefix}open
│☛ ${prefix}close
│☛ ${prefix}tagall
│☛ ${prefix}hidetag
│☛ ${prefix}delete
│☛ ${prefix}revoke
│☛ ${prefix}antilink
│☛ ${prefix}antilinkv2
│☛ ${prefix}welcome
│☛ ${prefix}promote
│☛ ${prefix}demote
│☛ ${prefix}setdesc
│☛ ${prefix}linkgc
│☛ ${prefix}setppgc
│☛ ${prefix}setnamegc
╰─────╼`
}

global.infobot = (prefix, sender, pushname) => {
  let more = String.fromCharCode(8206)
  let readmore = more.repeat(4001)
  return `*🤖 BOT INFO 🤖*
• Bot Name: ${botName}
• Runtime: ${runtime(process.uptime())}
• Owner: @${ownerNomer}

*👤 USER INFO 👤*
• Tag: @${sender.split("@")[0]}
• Name: ${pushname}
• Saldo: Rp${toRupiah(db.data.users[sender].saldo)}
• Role: ${db.data.users[sender].role.slice(0, 1).toUpperCase() + db.data.users[sender].role.slice(1)}

*📆 DATE INFO 📆*
• Masehi: ${moment.tz("Asia/Jakarta").format("DD MMMM YYYY")}

*⏰ TIME INFO ⏰*
• WIB: ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
• WITA: ${moment.tz('Asia/Makassar').format('HH:mm:ss')}
• WIT: ${moment.tz('Asia/Jayapura').format('HH:mm:ss')}
${readmore}
╭─────╼「 *INFO BOT* 」
│☛ ${prefix}creator
│☛ ${prefix}owner
│☛ ${prefix}ping
│☛ ${prefix}runtime
│☛ ${prefix}script
╰─────╼`
}

global.ownermenu = (prefix, sender, pushname) => {
  let more = String.fromCharCode(8206)
  let readmore = more.repeat(4001)
  return `*🤖 BOT INFO 🤖*
• Bot Name: ${botName}
• Runtime: ${runtime(process.uptime())}
• Owner: @${ownerNomer}

*👤 USER INFO 👤*
• Tag: @${sender.split("@")[0]}
• Name: ${pushname}
• Saldo: Rp${toRupiah(db.data.users[sender].saldo)}
• Role: ${db.data.users[sender].role.slice(0, 1).toUpperCase() + db.data.users[sender].role.slice(1)}

*📆 DATE INFO 📆*
• Masehi: ${moment.tz("Asia/Jakarta").format("DD MMMM YYYY")}

*⏰ TIME INFO ⏰*
• WIB: ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
• WITA: ${moment.tz('Asia/Makassar').format('HH:mm:ss')}
• WIT: ${moment.tz('Asia/Jayapura').format('HH:mm:ss')}
${readmore}
╭─────╼「 *OWNER MENU* 」
│☛ ${prefix}cekip
│☛ ${prefix}profile
│☛ ${prefix}settype (Type profit)
│☛ ${prefix}setprofit
│☛ ${prefix}addsaldo
│☛ ${prefix}minsaldo
│☛ ${prefix}addsewa
│☛ ${prefix}delsewa
│☛ ${prefix}listsewa
│☛ ${prefix}block
│☛ ${prefix}unblock
│☛ ${prefix}backup
╰─────╼`
}

global.storemenu = (prefix, sender, pushname) => {
  let more = String.fromCharCode(8206)
  let readmore = more.repeat(4001)
  return `*🤖 BOT INFO 🤖*
• Bot Name: ${botName}
• Runtime: ${runtime(process.uptime())}
• Owner: @${ownerNomer}

*👤 USER INFO 👤*
• Tag: @${sender.split("@")[0]}
• Name: ${pushname}
• Saldo: Rp${toRupiah(db.data.users[sender].saldo)}
• Role: ${db.data.users[sender].role.slice(0, 1).toUpperCase() + db.data.users[sender].role.slice(1)}

*📆 DATE INFO 📆*
• Masehi: ${moment.tz("Asia/Jakarta").format("DD MMMM YYYY")}

*⏰ TIME INFO ⏰*
• WIB: ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
• WITA: ${moment.tz('Asia/Makassar').format('HH:mm:ss')}
• WIT: ${moment.tz('Asia/Jayapura').format('HH:mm:ss')}
${readmore}
╭─────╼「 *STORE MENU* 」
│☛ ${prefix}list
│☛ ${prefix}addlist
│☛ ${prefix}dellist
│☛ ${prefix}setlist
│☛ ${prefix}testi
│☛ ${prefix}addtesti
│☛ ${prefix}deltesti
│☛ ${prefix}settesti
│☛ ${prefix}kalkulator
│☛ ${prefix}done
│☛ ${prefix}setdone
│☛ ${prefix}deldone
│☛ ${prefix}changedone
│☛ ${prefix}proses
│☛ ${prefix}setproses
│☛ ${prefix}delproses
│☛ ${prefix}changeproses
╰─────╼`
}

global.stalkermenu = (prefix, sender, pushname) => {
  let more = String.fromCharCode(8206)
  let readmore = more.repeat(4001)
  return `*🤖 BOT INFO 🤖*
• Bot Name: ${botName}
• Runtime: ${runtime(process.uptime())}
• Owner: @${ownerNomer}

*👤 USER INFO 👤*
• Tag: @${sender.split("@")[0]}
• Name: ${pushname}
• Saldo: Rp${toRupiah(db.data.users[sender].saldo)}
• Role: ${db.data.users[sender].role.slice(0, 1).toUpperCase() + db.data.users[sender].role.slice(1)}

*📆 DATE INFO 📆*
• Masehi: ${moment.tz("Asia/Jakarta").format("DD MMMM YYYY")}

*⏰ TIME INFO ⏰*
• WIB: ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
• WITA: ${moment.tz('Asia/Makassar').format('HH:mm:ss')}
• WIT: ${moment.tz('Asia/Jayapura').format('HH:mm:ss')}
${readmore}
╭─────╼「 *STALKER MENU* 」
│☛ ${prefix}cekdana
│☛ ${prefix}cekgopay
│☛ ${prefix}cekgopaydriver
│☛ ${prefix}cekgrab
│☛ ${prefix}cekgrabdriver
│☛ ${prefix}cekisaku
│☛ ${prefix}ceklinkaja
│☛ ${prefix}cekovo
│☛ ${prefix}cekshopeepay
│☛ ${prefix}cekpln
│☛ ${prefix}cekcod
│☛ ${prefix}cekff
│☛ ${prefix}cekgi
│☛ ${prefix}cekhok
│☛ ${prefix}cekla
│☛ ${prefix}cekml
│☛ ${prefix}cekpb
│☛ ${prefix}cekpubg
│☛ ${prefix}ceksm
│☛ ${prefix}ceksus
│☛ ${prefix}cekvalo
╰─────╼`
}

global.topupmenu = (prefix, sender, pushname) => {
  let more = String.fromCharCode(8206)
  let readmore = more.repeat(4001)
  return `*🤖 BOT INFO 🤖*
• Bot Name: ${botName}
• Runtime: ${runtime(process.uptime())}
• Owner: @${ownerNomer}

*👤 USER INFO 👤*
• Tag: @${sender.split("@")[0]}
• Name: ${pushname}
• Saldo: Rp${toRupiah(db.data.users[sender].saldo)}
• Role: ${db.data.users[sender].role.slice(0, 1).toUpperCase() + db.data.users[sender].role.slice(1)}

*📆 DATE INFO 📆*
• Masehi: ${moment.tz("Asia/Jakarta").format("DD MMMM YYYY")}

*⏰ TIME INFO ⏰*
• WIB: ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
• WITA: ${moment.tz('Asia/Makassar').format('HH:mm:ss')}
• WIT: ${moment.tz('Asia/Jayapura').format('HH:mm:ss')}
${readmore}
╭─────╼「 *TOPUP MENU* 」
│☛ ${prefix}deposit
│☛ ${prefix}saldo
│☛ ${prefix}listharga
│☛ ${prefix}upgrade
╰─────╼`
}

let time = moment(new Date()).format('HH:mm:ss DD/MM/YYYY')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.greenBright(`[ ${botName} ]  `) + time + chalk.cyanBright(` "${file}" Telah diupdate!`))
  delete require.cache[file]
  require(file)
})
