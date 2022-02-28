const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.ibb.co/h7MPTrS/image.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Pikachu bot created by Ameer Suhail*
*Creator number : wa.me/212691420825?text=Hi%20Ameer%20Suhail.%20*

*Bot setting video : https://youtube.com/channel/UCNmgUxKMXqyTZD9YpX3_noA*

*Githublink (Setup)  :    https://github.com/abdo000ho/zhsigsost*

*Audio commads :   https://github.com//abdo000ho/zhsigsos/tree/master/uploads*

*Sticker commads : https://github.com//abdo000ho/zhsigsos/tree/master/uploads*

*Video For Setting Bot : https://youtube.com/channel/UCNmgUxKMXqyTZD9YpX3_noA* 

*For More Updates Subscribe The Channel ☝*
`}) 

}));
