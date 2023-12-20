import { Bot, session } from 'grammy'

import { token } from './src/constants.js'
import { initial } from './src/session.js'
import { launchBot } from './src/launcher.js'
import { setHandlers } from './src/handlers.js'
import { spamControl } from './src/spam-control.js'

const bot = new Bot(token)

bot.use(session({ initial }))
bot.use(spamControl)

setHandlers(bot)
launchBot(bot)
