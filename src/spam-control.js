import { ANTI_SPAM_DELAY } from './constants.js'

export const spamControl = (ctx, next) => {
  const now = Date.now()
  const timeFromLastMessage = now - ctx.session.lastMessageTime

  ctx.session.lastMessageTime = now

  if (timeFromLastMessage > ANTI_SPAM_DELAY) {
    next()
  }
}
