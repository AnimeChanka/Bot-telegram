const { Telegraf, Markup } = require('telegraf')
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN)
console.log('Bot launched!');
bot.use(Telegraf.log())

// 8ball

const ball = [
    "Бесспорно",
    "Предрешено",
    "Никаких сомнений",
    "Определённо да",
    "Можешь быть уверен в этом",
    "Мне кажется — «да»",
    "Вероятнее всего",
    "Хорошие перспективы",
    "Знаки говорят — «да»",
    "Да",
    "Пока не ясно, попробуй снова",
    "Спроси позже",
    "Лучше не рассказывать",
    "Сейчас нельзя предсказать",
    "Сконцентрируйся и спроси опять",
    "Даже не думай",
    "Мой ответ — «нет»",
    "По моим данным — «нет»",
    "Перспективы не очень хорошие",
    "Весьма сомнительно"
];



bot.command('8ball', (ctx) => {
    const ball2 = ball[Math.floor(Math.random()*(ball.length))];
    return ctx.reply(`🎱 | ${ball2}`)
})

// 8ball

// coinflip

const responsess = [
    "Орёл",
    "Решка"
];



bot.command('coinflip', (ctx) => {
    const Responsesss = responsess[Math.floor(Math.random()*(responsess.length))];
    return ctx.reply(`🎱 | ${Responsesss}`)
})

// coinflip

// rps

bot.command('onetime', (ctx) =>
  ctx.reply('Кнопка появилась возле значка скрепки', Markup
    .keyboard(['/scissors', '/rock', '/paper'])
    .oneTime()
    .resize()
  )
)

bot.command('scissors', (ctx) => {
    let a1 = "Камень"
    let a2 = "Ножницы"
    let a3 = "Бумага"
    let a4 = Math.floor(Math.random()*(3)+1)
    if (a4 == 1) a4 = "Камень"
    if (a4 == 2) a4 = "Ножницы"
    if (a4 == 3) a4 = "Бумага"
ctx.reply(`Твой выбор "**${a2}**", мой выбор "**${a4}**"`)
if (a4 == "Камень" ){
    ctx.reply("Ты проиграл(-а)!")
}
else if (a4 == "Бумага" ){
    ctx.reply("Ты выиграл(-а)!")
}
  
else {
    ctx.reply("Ничья!")
}

})

bot.command('paper', (ctx) => {
    let a1 = "Камень"
    let a2 = "Ножницы"
    let a3 = "Бумага"
    let a4 = Math.floor(Math.random()*(3)+1)
    if (a4 == 1) a4 = "Камень"
    if (a4 == 2) a4 = "Ножницы"
    if (a4 == 3) a4 = "Бумага"
ctx.reply(`Твой выбор "**${a3}**", мой выбор "**${a4}**"`)
if (a4 == "Ножницы" ){
    ctx.reply("Ты проиграл(-а)!")
}
else if (a4 == "Камень" ){
    ctx.reply("Ты выиграл(-а)!")
}
  
else {
    ctx.reply("Ничья!")
}

})

bot.command('rock', (ctx) => {
    let a1 = "Камень"
    let a2 = "Ножницы"
    let a3 = "Бумага"
    let a4 = Math.floor(Math.random()*(3)+1);
    if (a4 == 1) a4 = "Камень"
    if (a4 == 2) a4 = "Ножницы"
    if (a4 == 3) a4 = "Бумага"
ctx.reply(`Твой выбор "**${a1}**", мой выбор "**${a4}**"`)
if (a4 == "Бумага" ){
    ctx.reply("Ты проиграл(-а)!")
}
else if (a4 == "Ножницы" ){
    ctx.reply("Ты выиграл(-а)!")
}
else {
    ctx.reply("Ничья!")
}
})



//rps

//help

bot.command('help', (ctx) => {
    ctx.reply("Я могу выполнять эти команды: /quiz; /nggyu; /roll; /coinflip; /8ball; /help  \n Для игры 'Камень, Ножницы, Бумага:' \n Введите команду '/onetime' и в появшейся кнопке выбирайте камень, ножницы или бумагу ")
   
})

//help

//roll

const roll = [
    "⠁",
    "⠃",
    "⠇",
    "⠏",
    "⠟",
    "⠿"
];



bot.command('roll', (ctx) => {
    const roll2 = roll[Math.floor(Math.random()*(roll.length))];
    return ctx.reply(`${roll2}`)
})

//roll

//start

bot.command('start', (ctx) => {
    ctx.reply("Я могу выполнять эти команды: /quiz; /nggyu; /roll; /coinflip; /8ball; /help  \n Для игры 'Камень, Ножницы, Бумага:' \n Введите команду '/onetime' и в появшейся кнопке выбирайте камень, ножницы или бумагу ")
   
})


//start




//never gonna give you up

bot.command('nggyu', (ctx) => {
    ctx.reply("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
   
})

//never gonna give you up


//say

bot.command('quiz', (ctx) =>
  ctx.replyWithQuiz(
    'Сколько баллов получит мой создатель?',
    ['12 баллов', '12 баллов'],
    { correct_option_id: 0 }
  )
)

//say





bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))