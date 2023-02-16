const { Client, Message, PermissionFlagsBits, EmbedBuilder } = require("discord.js");

const crypto = require("text-cryptography");

module.exports = {
  name: "decrypt",
  description: "get ping of bot",
  category: "info",
  userPermissions: [PermissionFlagsBits.Administrator],
  botPermissions: [PermissionFlagsBits.Administrator],

  /**
   *
   * @param {Client} client
   * @param {Message} message
   */
  run: async (client, message) => {
    // code
    const prefix = ">"
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cipherUse = args[0]
    const key = args[1]
    const plainText = args.slice(1).join(" ")

    if (cipherUse === "affine") {
      const affine = new crypto.Affine(3, 5)

      const decrypted = affine.decrypt(plainText)

      const decBed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Affine Decryption')
        .setDescription(`Decrypted Text: ${decrypted}`)
        .addFields({ name: "affine", value: 'Key used for decryption: `3,  5`', inline: true })
              
      message.reply({ embeds: [encBed] })
    } else if (cipherUse === "vigenere") {
      const keyword = args[1]
      const plainText = args.slice(2).join(" ")

      let Vigenere = new crypto.Vigenere(keyword);

      const decrypted = Vigenere.decrypt(plainText);

      const decBed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Vigenere Decryption')
        .setDescription(`Decrypted Text: ${decrypted}`)
        .addFields({ name: "vigenere", value: `Keyword used for decryption: ${keyword}`, inline: true })

      message.reply({ embeds: [decBed] })
    } else if (cipherUse === "rot13") {
      const plainText = args.slice(1).join(" ")

      let rot13 = new crypto.Rot13();

      const decrypted = rot13.decrypt(plainText)

      const decBed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Rot13 Decryption')
        .setDescription(`Decrypted Text: ${decrypted}`)

      message.reply({ embeds: [decBed] })
    } else if (cipherUse === "rot18") {
      const plainText = args.slice(1).join(" ")

      let rot18 = new crypto.Rot18()

      const decrypted = rot18.decrypt(plainText)

      const decBed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Rot18 Decryption')
        .setDescription(`Decrypted Text: ${decrypted}`)

      message.reply({ embeds: [decBed] })
    } else if (cipherUse === "rot47") {
      const plainText = args.slice(1).join(" ")

      let rot47 = new crypto.Rot47();

      const decrypted = rot47.decrypt(plainText)

      const decBed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Rot47 Decryption')
        .setDescription(`Decrypted Text: ${decrypted}`)

      message.reply({ embeds: [decBed] })
    } else if (cipherUse === "rot5") {
      const plainText = args.slice(1).join(" ")

      let rot5 = new crypto.Rot5();

      const decrypted = rot5.decrypt(plainText)

      const decBed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Rot5 Decryption')
        .setDescription(`Decrypted Text: ${decrypted}`)

      message.reply({ embeds: [decBed] })
    }
  }
};
