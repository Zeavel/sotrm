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
            client2.users.get(usees[i]).send("HØUST8N\nНачал трансляцию\nhttps://www.twitch.tv/h0ust8n")
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
    f.send(embed)
})


client.login(process.env.BOT_TOKEN);
client2.login(process.env.BOT_TOKEN2);
