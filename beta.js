try {
var irc = require('irc');
var client = new irc.Client('irc.libera.chat', 'LittleCow-Beta', {
    port: 6697,
    secure: true,
    channels: ['#cowgrassland','##cowgrassland'],
    userName: 'LittleCowBeta@littlecow/beta',
    realName: '牛牛',
});
/*async function awaitMSG(nick,time){
    var totaltime = 0
    client.addListener('message', function (from, to, message) {
    while (!from==nick){
        setTimeout(function(){
            totaltime = totaltime+1
            }, 1);
            if (totaltime == time){
                return ''
                }
            if (nick==from){
            return message
            }
            }
        });
}*/
client.addListener('pm', function (from, message) {
    console.log(from + ' => ME: ' + message);
if (message.startsWith('#')){
console.log('join')
try {
client.join(message,function(){})
} catch (joinerr) {
client.say(from, joinerr);
}
}
});
client.addListener('message', function (from, to, message) {
if (message=='🍀'){
client.say(to,'謝謝!')
}
//client.send('MODE', '#cowgrassland', '+o', 'Charlie_Moomoo');    
//console.log(from + ' => ' + to + ': ' + message);
if (message == 'Hey,牛牛!' || message == 'hey,牛牛' || message == 'hey牛牛' || message == '/cow'|| message == '牛' || message == '牛牛' || message == '🐮' || message == 'LittleCow'){
    client.say(to,'哞!有什麼事嗎?')
    while (!message == 'Hey,牛牛!' || !message == 'hey,牛牛' || !message == 'hey牛牛' || !message == '/cow'|| !message == '牛' || !message == '牛牛' || !message == '🐮' || !message == 'LittleCow'){
console.log('awaiting')
    }
    console.log(message)
    console.log('cmd');
    }
   /*awaitMSG(from,500)
.then((awaited) => {
if (awaited=='hi'){
console.log('hi')
}
if (awaited==''){
console.log('nope')
}
});*/
        })
} catch {}
process.on('exit', (code) => {
require('beta.js')
  console.log(`About to exit with code: ${code}`);
});