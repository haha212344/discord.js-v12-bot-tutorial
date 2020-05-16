const Discord = require('discord.js');

const client = new Discord.Client();

const { token } = require('./config.json');

client.on('ready', () => {
    console.log('I am ready');
});


client.login(token);