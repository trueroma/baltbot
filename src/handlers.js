export const setHandlers = bot => {
  bot.chatType('private').command('start', ctx => {
    ctx.reply('Привет! Я бот, умею то, сё и многое другое.')
  })
}
