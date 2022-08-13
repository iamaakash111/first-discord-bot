require("dotenv").config();
const {Client, GatewayIntentBits, Partials } = require('discord.js')
const client = new Client({
  intents:[
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildPresences
  ],
  partials:[
    Partials.Message,
    Partials.User,
    Partials.Channel,
    Partials.GuildMember
  ]
})
const greetings =[
  'hi',
  'hello',
  'hey'
]

const PREFIX = '$';

client.on('ready',()=>{
    console.log("Another Bot is online")
})

client.on("messageCreate", (message)=>{
  if (message.author.bot){
    return;
  }
  if ( message.content.startsWith(PREFIX)){
    const [CMD_NAME, ...args] = message.content
    .trim()
    .substring(1)
    .split(/\s+/);

    if (CMD_NAME ==='info'){
      message.reply('https://www.pw.live/study')
    }
  }
  greetings.forEach((greet)=>{
    if(message.content.toLocaleLowerCase()===greet){
      message.reply(`Hello ${message.author}, How are you?`)
    }
  })
  

  if(message.content.includes("motivation")){
    message.reply("https://www.youtube.com/watch?v=HDX8BE2Pje8&ab_channel=WordsBeyondFiction")
  }
})

client.login(process.env.ANOTHER_BOT_TOKEN)