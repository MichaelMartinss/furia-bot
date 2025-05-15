import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
dotenv.config();

const bot = new TelegramBot(process.env.TOKEN, { polling: true });

bot.onText(/\/iniciar/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "Olá, Seja muito bem-vindo ao bot da FURIA para fans! Espero poder lhe auxiliar em tudo oque procura.\n Digite /menu para ver as opções."
  );
});

bot.onText(/\/menu/, (msg) => {
  bot.sendMessage(msg.chat.id, "Escolha uma opção:", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "📅 Próximo Jogo", callback_data: "jogo" }],
        [{ text: "📅 Ultimos Jogos", callback_data: "historico" }],
        [{ text: "👥 Jogadores", callback_data: "jogadores" }],
        [{ text: "👥 highlights", callback_data: "highlights" }],
        [{ text: "🦊 Curiosidade", callback_data: "curiosidade" }],
      ],
    },
  });
});

bot.on("callback_query", (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data === "jogo") {
    // const info = getNextMatch();
    bot.sendMessage(
      chatId,
      "📅 Próximo jogo: Nenhuma jogo encontrado até o momento, volte mais tarde para mais novidades"
    );
  } else if (data === "historico") {
    bot.sendMessage(chatId, "histórico");
  } else if (data === "jogadores") {
    bot.sendMessage(
      chatId,
      "👥 Elenco Atual:\n- FalleN\n- yuurih\n- YEKINDAR\n- KSCERATO\n- moloday\n Banco de reservas:\n- Cheelo\n- skullz"
    );
  } else if (data === "highlights") {
    bot.sendMessage(
      chatId,
      "Para assistir os highlights, acesse o seguinte link: https://www.youtube.com/@FURIA"
    );
  } else if (data === "curiosidade") {
    bot.sendMessage(
      chatId,
      "🦊 Curiosidade: A FURIA foi o primeiro time BR a ter gaming house nos EUA!"
    );
  }
});
