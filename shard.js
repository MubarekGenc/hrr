const Discord = require('discord.js');
const bot = new Discord.Client()
const express = require('express');
const app = express();
const http = require('http');
const scarew = new Discord.ShardingManager('./index.js', {  //Ana dosyanızın adını buraya yazacaksınız.
    totalShards: 1,
    token: "NTYzNzgxMDA2NDU3NTY5Mjkx.XPBSdQ.h46YQl9mbfpwy9HPvI8M7PRXfUs"// Botun tokenini buraya yazacaksınız.
});

scarew.spawn(); 

scarew.on('launch', shard => {
  console.log(`**${shard.id}** shard başarıyla başlatıldı! `)
});

setTimeout(() => {
    scarew.broadcastEval("process.exit()");
}, 21600000);