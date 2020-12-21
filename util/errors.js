const Discord = require("discord.js");
const fs = require("fs");
let config = require("../ayarlar.json");

module.exports.noPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("Yetersiz yetki")
        .setColor("RED")
        .addField("Şu yetkiye ihtiyacın var", perm);

    message.channel.send(embed).then(m => m.delete(5000));
}

module.exports.equalPerms = (message, user, perms) => {

    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor("RED")
        .setTitle("Hata")
        .addField(`${user} has perms`, perms);

    message.channel.send(embed).then(m => m.delete(5000));

}

module.exports.botuser = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Hata")
        .setDescription(":x: Botu banlayamazsınız.")
        .setColor("RED");

    message.channel.send(embed).then(m => m.delete(5000));
}

module.exports.cantfindUser = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Hata")
        .setDescription(":x: Kullanıcı bulunamadı.")
        .setColor("RED");

    channel.send(embed).then(m => m.delete(5000));
}

module.exports.noReason = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Hata")
        .setDescription(":x: Lütfen şiakyet sebebi belirtin.")
        .setColor("RED");

    channel.send(embed).then(m => m.delete(5000));
}