try {
var irc = require('irc');
var client = new irc.Client('irc.libera.chat', 'LittleCow-Beta', {
    port: 6697,
    secure: true,
    channels: ['#cowgrassland','##cowgrassland'],
    userName: 'LittleCowBeta@littlecow/beta',
    realName: '็็',
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
if (message=='๐'){
client.say(to,'่ฌ่ฌ!')
}
//client.send('MODE', '#cowgrassland', '+o', 'Charlie_Moomoo');    
//console.log(from + ' => ' + to + ': ' + message);
if (message == 'Hey,็็!' || message == 'hey,็็' || message == 'hey็็' || message == '/cow'|| message == '็' || message == '็็' || message == '๐ฎ' || message == 'LittleCow'){
    client.say(to,'ๅ!ๆไป้บผไบๅ?')
    while (!message == 'Hey,็็!' || !message == 'hey,็็' || !message == 'hey็็' || !message == '/cow'|| !message == '็' || !message == '็็' || !message == '๐ฎ' || !message == 'LittleCow'){
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