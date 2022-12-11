const fs = require('fs')
const chalk = require('chalk')

global.autorecording = false //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.autoavailable = false //status online (online)
global.wlcm = []
global.ntnsfw = []
global.ntnsfww = []


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
//=================================================//
global.youtube = 'https://www.youtube.com/channel/UCOVW4A7rywiqR9Ud24WqrNw' // ubah aia
global.ig = '@fy.real' // ubah aja
global.email = 'fitricalista0@gmail.com'
global.region = 'indonesia'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'FYVVIP.☆' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = 'FYVVIP.☆' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'FYVVIP.☆' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
// Other
global.owner = ['6283117773323'] // ubah aja pake nomor lu
global.premium = ['6283117773323'] // ubah aja pake nomor lu
global.packname = 'FYVVIP.☆' // ubah aja
global.ownerr = ['FYVVIP.☆'] // ubaha aja
global.author = 'FYVVIP.☆' //ubah aja
global.sessionName = './system/ui' //Gausaj Di Ubah
global.prefa = ['','!','.',',','🐤','🗿'] // Gausah Mendingan
global.sp = '⭔' // Gausah Juga

// Terserah
global.mess = {
    nsfw: '*Fitur NSFW tidak diaktifkan, chat admin grup supaya diaktifkan*_',
    wait: '*Loading... Sabar Wibu*_',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',    
}
//=================================================//
//Gausah Di Apa2 in
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
//=================================================//
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
//Terserah Kalau Paham 
global.thumb = fs.readFileSync("./data/image/hw.jpg")
global.log0 = fs.readFileSync("./data/image/haikal.jpg")
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})