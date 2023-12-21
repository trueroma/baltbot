import { getRandomImages } from './images.js'

import { MEMES_DELAY, START_TEXT, MEMES_NOT_READY_TEXT } from './constants.js'

export const setHandlers = bot => {
  bot.chatType('private').command('start', ctx => {
    ctx.reply(START_TEXT)
  })

  bot.chatType('private').command('sendmemes', async ctx => {
    const now = Date.now()

    if (ctx['session'].lasMemesTime + MEMES_DELAY > now) {
      ctx.reply(MEMES_NOT_READY_TEXT)

      return
    }

    ctx['session'].lasMemesTime = now

    await Promise.all(
      ctx['session'].lastMemesGroup
        .map(id => ctx.api.deleteMessage(ctx.chat.id, id))
    )

    const memes = await ctx.replyWithMediaGroup(getRandomImages())

    ctx['session'].lastMemesGroup = [
      ctx.message.message_id,
      ...memes.map(({ message_id }) => message_id),
    ]
  })
}
