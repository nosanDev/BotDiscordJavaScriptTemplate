//---------------------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------- main.js for template ---------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------------//



//-----IMPORT-----//

const Discord = require("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadCommands = require("./Loaders/loadCommands")
const loadEvents = require("./Loaders/loadEvents")
const config = require("./config")
const loadSlashCommands = require("./Loaders/loadSlashCommands")



//----VARIABLES----//

bot.commands = new Discord.Collection()

//--COMMANDS--//
loadCommands(bot)
loadEvents(bot)
loadSlashCommands(bot)


bot.login(config.token)