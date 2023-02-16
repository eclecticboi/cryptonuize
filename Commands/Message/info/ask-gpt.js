const { Client, Message, EmbedBuilder } = require("discord.js");

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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"
})

const openai = new OpenAIApi(configuration);

module.exports = {
  name: "ask-gpt",
  descripton: "ask gpt something",
  category: "info",

  run: async (client, message) => {
    const prefix = ">"
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const prompt = args.slice(0).join(" ")
    
    const res = await openai.createCompletion({
      model: "text-davinci-003",
      max_tokens: 2048,
      temperature: 0.5,
      prompt: prompt
    })

    message.reply(res.data.choices[0].text)
  }
}