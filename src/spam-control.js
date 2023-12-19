const PASS_DELAY = 2000

export const spamControl = (ctx, next) => {
  const now = Date.now()
  const timeFromLastMessage = now - ctx.session.lastMessageTime

  ctx.session.lastMessageTime = now

  if (timeFromLastMessage > PASS_DELAY) {
    next()
  }
}
