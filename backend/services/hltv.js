import axios from "axios";
import cheerio from "cheerio";

export default async function getNextMatch() {
  const { data } = await axios.get("https://www.hltv.org/team/8297/furia");
  const $ = cheerio.load(data);
  const match = $(".upcomingMatch .matchInfo").first().text().trim();
  return match || "Nenhum jogo encontrado";
}
