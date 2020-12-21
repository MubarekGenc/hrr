const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args, ) => {

  const erkek = message.guild.roles.find(r => r.id === "701890884077224087")
  let user = message.guild.roles.find(e => e.id === "701890884643455026")
  let kayitsiz = message.guild.roles.find(e => e.id === "701902459425128459")
 

if(!message.member.roles.find(r => r.id === "701902539209179249")) return message.reply(`<a:carpix:702640596115914853> Bu komutu kullanabilmek için yeterli yetkin yok!!`).then(x => x.delete(10000))
 let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send(new Discord.RichEmbed().setColor('BLUE').setDescription("<a:carpix:702640596115914853> Bir kullanıcı girin.")).then(x => x.delete(10000))
      
          const kayıt = message.guild.member(member)
    let isim = args[1]
let yas = args[2]
let kişi = message.mentions.members.first();
 if(!kişi) return 

      if (!isim) return message.channel.send(new Discord.RichEmbed().setColor('BLUE').setDescription("<a:carpix:702640596115914853> Bir isim girin.")).then(x => x.delete(10000))
      if (!yas) return message.channel.send(new Discord.RichEmbed().setColor('BLUE').setDescription("<a:carpix:702640596115914853> Bir yaş girin.")).then(x => x.delete(10000))
     kayıt.addRole(erkek)
     kayıt.addRole(user)
     kayıt.removeRole(kayitsiz)
      kayıt.setNickname(`ゃ ${isim} | ${yas}`)
      var kanalid = message.guild.channels.find(`id`, "701895257717080136")
      var embed = new Discord.RichEmbed()
      .setDescription(`<@${member.id}> aramıza ${isim} adıyla katıldı ve kendisine <@&701890884077224087> rolü verildi.`)
      kanalid.send(embed).then(x => x.delete(10000))
	  message.delete();
      return message.channel.sendEmbed(new Discord.RichEmbed().setColor('BLUE').setDescription(`<a:tikc:702619376649633905> ${kişi} adlı kullanıcı sunucuya kayıt edildi!\n<a:hyper:702175901986848920> Kaydı yapan yetkili: <@${message.member.id}>`)
      )
}
      
      exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ['erkek-kayıt','erkekkayıt'],
      permLevel: 2, 
      }
      
      exports.help = {
      name: 'erkek',
      description: 'Erkek Kaydı yapar.',
      usage: 'erkek'
      }