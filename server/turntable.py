from ttapi import Bot
import config

bot = Bot(config.auth, config.userid, config.roomid)

def speak(data):
   name = data['name']
   text = data['text']
   print bot.playlistAll("Electro")
   if text == '/hello':
      bot.speak('Hey! How are you %s ?' % name)

def playlistAll(data):
	print data

bot.on('speak', speak)
bot.on('playlistAll', playlistAll)

bot.start()