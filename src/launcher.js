export const launchBot = bot => {
  process.once('SIGINT', () => bot.stop())
  process.once('SIGTERM', () => bot.stop())

  bot.start()

  bot.api.getMe().then(({ first_name, username }) => {
    console.log(`Hello! My name is ${first_name} and I am working.`)
    console.log(`Contact me at https://t.me/${username}`)
  })
}
