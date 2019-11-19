async def on_message(message):
    if message.content.upper().startswith('-SAY'):
        if message.author.id == "608511451736571914":
        userID = message.author.id
            args = message.content.split(" ")
            await client.send_message(message.channel, "%s" % (" ".join(args[1:])))
        else:
            await client.send_message(message.channel, "You do not have permission")


client.login(process.env.BOT_TOKEN);

