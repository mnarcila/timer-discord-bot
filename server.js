const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = '-timer'
const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;

client.on('ready', () => {
  console.log(`BOT LISTO`);
});

client.on('message', message => {
  var args = message.content.substring(prefix.length).split(' ');
  var command = args[1];
  if (message.content.substring(0, prefix.length) == prefix) {
    
    if (command === 'hola') {
      message.reply('Hola amiguitos!');
    }
    if (command === 'init') {
      var intervalCount = 0, interval = 1;
      message.reply('bot iniciado.');
      setPart(interval);

      function setPart(interval) {
        intervalCount++;
        interval = 1;
        let timer = setTimeout(() => {
          message.channel.send(`Vuelta ${intervalCount},
            ${interval} minuto finalizado.`);
          setPart();
        }, interval * minute);
        if (intervalCount >= 10) {
            message.reply('Final ciclos');
            clearTimeout(timer);
            return;
        }
      }
    }
  }
});

client.login('TOKEN');