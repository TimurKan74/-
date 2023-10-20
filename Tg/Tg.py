import telebot
bot = telebot.TeleBot('6572621682:AAHnZoYmxwNjfUaustiqYvNeXiViDVfqnuQ')

@bot.message_handler(commands=['start'])
def start(message):
    bot.send_message(message.chat.id, 'Здраствуйте вы находитесь в телеграм боте для аренд яхт')

@bot.message_handler(commands=['help'])
def start(message):
    bot.send_message(message.chat.id, message.chat)

@bot.message_handler(commands=['id'])
def start(message):
    bot.send_message(message.chat.id, message.chat.id)

bot.polling(none_stop=True)