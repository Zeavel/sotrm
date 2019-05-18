const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();


var fs = require("fs");

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("." + str);
}

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role)
{
    if (pluck(mem.roles).includes(role))
    {
        return true;
    }
    else
    {
        return false;
    }
}
client.on("message", message=>{
    if(message.channel.id == "579293533995794444")
    {
        var uses = client2.users.size
        var usees = client2.users.map(g=>g.id)
       for(i=0;i<uses;i++)
{
    var embed = new Discord.RichEmbed()
    .setColor("#9932CC")
    .setTitle("Оповещение о трансляции")
    .setDescription("HØUST8N\nНачал трансляцию\n[Перейти](https://www.twitch.tv/h0ust8n)")
    .setThumbnail("https://cdn.discordapp.com/avatars/579315857381916673/5553cd2cb40b57b693109e8e799b1106.png?size=128")
    client2.users.get(usees[i]).send(embed)
}
    }
})

   
 
client2.on("guildMemberAdd", f=>{
    var embed = new Discord.RichEmbed()
    .setColor("#9932CC")
    .setTitle("Здравствуй!")
    .setDescription("<@"+f.id+">, приветствую тебя на сервере **"+f.guild.name+"**!\n\n**"+f.guild.name+"** - это закрытый сервер.\nВсе наши участники - адекватные и взрослые люди.\n\n**_Строгая и справедливая администрация\nЖивое и приятное общение\nИнсайдерская информация\nТрансляция магазина Королевской битвы\nОповещения о легендарных PvE миссиях\nУникальная система званий\nЕженедельные топы и конкурсы\nАвторский бот для максимальной автоматизации и удобства_**\n\n          **Добро пожаловать!**")
    .setImage("https://media.discordapp.net/attachments/579293533995794444/579301934670938125/logo.png")
    .setFooter("DØNUT", "https://triche-generateur.fr/wp-content/uploads/2018/10/unnamed.jpg")
    .setThumbnail(f.guild.iconURL)
    f.send(embed)
})


client.login(process.env.BOT_TOKEN);
client2.login(process.env.BOT_TOKEN2);
