const fs = require('fs');
const Discord = require("discord.js");
const request = require('request');
const config = require("./config.json");
let clients = [];
let tokens = fs.readFileSync('tokens.txt').toString().replace(/"/g, '').split("\n");

async function authorizate(i){
  let client = new Discord.Client();
  await client.login(tokens[i].replace(/\s+/g,'')).then(function(value) {
    request.post("https://discordapp.com/api/v7/invite/" + config.invite, {headers:{"authorization":tokens[i].replace(/\s+/g,'')},json:true},(er,re,body)=>{})
    clients.push(client);
    client.on("message", message => {
    })
  }).catch(function(e) {
    return "err"; //Будет использоваться в будущем.
  })
}

for (var i = 0; i < tokens.length; i++) {
    if(i+1==config.count) break;
    authorizate(i); 
}