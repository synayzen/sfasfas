const Discord = require('discord.js');

exports.run = (client, message, args) => {
if(message.author.id !== "595903529898737664") return message.channel.send("<:var_boneless:835181063650279445> | Bu Komutu Sadece \`𝗦𝘆𝗻𝗮𝘆𝘇𝗲𝗻 𝗜𝘃𝗮𝗿²⁴\` Kullanabilir");
message.delete();
message.channel.send(new Discord.MessageEmbed().setColor('d402db').setTitle('Reboot;').setDescription('**KAPTAN ASSASSİNS! 🛠 Eğer Kabul Ediyorsan** => `tamam cnm` <=').setFooter('15 Saniye İçinde İptal!', client.user.avatarURL()).setTimestamp())
.then(() => {
message.channel.awaitMessages(response => response.content === 'tamam cnm', {
max: 1,
time: 15000,
errors: ['time'],
})
.then((collected) => {
  message.channel.send(new Discord.MessageEmbed().setColor('d402db').setTitle('Reboot;').setDescription('**KAPTAN ASSASSİNS! 🛠 Onay Verildi! Yeniden Başlatılıyorum...**').setFooter('HAZIR KAPTAN ASSASSİNS! 🛠', client.user.avatarURL()).setTimestamp()).then(msg => {
console.log(`BOT | KAPTAN ASSASSİNS! 🛠 YENİDEN BAŞLATILIYOR...`);
process.exit(0);
})
})
.catch(() => {
  message.channel.send(new Discord.MessageEmbed().setColor('d402db').setTitle('Yeniden Başlatma;').setDescription('**Komut İptal Edildi! KAPTAN ASSASSİNS! 🛠**').setFooter('KAPTAN ASSASSİNS! 🛠', client.user.avatarURL()).setTimestamp())
});
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
 name: 'reboot',
  description: 'Botu Yeniden Başlatır.',
  usage: 'reboot'
};
