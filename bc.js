const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "#";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return message.channel.send("u dont have premission");
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== '').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== '').size}\` : message send to `); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`WOLF Bot- Script By : AymaneRH`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : AymaneRH ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`By AymaneRH`,"https://www.twitch.tv/zaenabidine")
client.user.setStatus("dnd")
});



client.login("NjczMTU4MDExOTM3NzUxMDQz.XjWYvQ.NEMPDNIMW9HXzfIj9bEtCiv7E04");
