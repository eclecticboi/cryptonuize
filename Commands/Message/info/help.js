const { Client, Message, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "help",
  description: "get avatar of user",
  category: "info",

  /**
   *
   * @param {Client} client
   * @param {Message} message
   */
  run: async (client, message) => {
    const helpBed = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle('Usage')
      .setDescription(`Here are the bots current supported features: \n\n Vigenere Cipher, usage  >decrypt vigenere keyword cipherText\n Rot13, usage  >decrypt rot13 cipherText\n Rot18, usage  >decrypt rot18 cipherText\n Rot47, usage  >decrypt rot47 cipherText\n Rot5, usage  >decrypt rot5 cipherText\n\n **Every day there will be a new cipher added!**\n\n Examples: \n\nOSWO HDS UZRY\nUbyq gur Qbbe\nUbyq gur Qbbe\nw@=5 E96 s@@C]]]cbahPPPn\n5678901234`)
      .setFooter({ text: 'Made by 01100011#5227' })

    console.log("ok")

    message.reply({ embeds: [helpBed] })
  }
}
