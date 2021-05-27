const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {

    let codework2 = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL({dynamic:true}))
    .setTimestamp()
    .setFooter(`${message.author.tag} Tarafından İstendi.`)
    .addField(`**Komutlar**`, `
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**
    b!rol-koruma \`aç/kapat\`
    b!kanal-koruma \`aç/kapat\`
    `)
    .addField(`**Diğer Komutlar**`, `
    **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**
    b!koruma \`aç/kapat #logkanal\` Tüm sistemleri açar veya kapatır.
    b!rolekle \`@rol\` Koruma sistemlerinden etkilenmeyecek rolü ayarlar.
    b!sistemlog \`#kanal\` Koruma mesajlarının gönderileceği kanal.
    \`b!komutbilgi\` komutların ne işe yaradığını gösterir.
    `)
    message.channel.send(codework2)
}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["yardım","help","komutlar"],
 permLevel: 0,
};
exports.help = {
 name: 'yardım'
};