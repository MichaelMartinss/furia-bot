import { useEffect } from "react";

export default function FuriaLandingPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.setAttribute("data-telegram-login", "oDevMichael_Bot"); // ← Substitua aqui
    script.setAttribute("data-size", "large");
    script.setAttribute("data-userpic", "false");
    script.setAttribute("data-radius", "10");
    script.setAttribute("data-auth-url", "https://localhost:"); // ← Ou um endpoint da sua API
    script.async = true;
    document.getElementById("telegram-widget")?.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold mb-6">FURIA CS:GO</h1>
      <p className="text-xl mb-4 max-w-2xl text-center">
        Acompanhe tudo sobre o time de CS da FURIA em tempo real! Notícias, próximos jogos, elenco e muito mais direto do Telegram.
      </p>

      <div id="telegram-widget" className="my-6"></div>

      <section className="grid md:grid-cols-3 gap-8 mt-12 w-full max-w-6xl">
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">🔥 Próximo Jogo</h2>
          <p>FURIA x NAVI - 28/04 às 16h</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">👥 Elenco</h2>
          <ul className="list-disc pl-4">
            <li>KSCERATO</li>
            <li>yuurih</li>
            <li>FalleN</li>
            <li>chelo</li>
            <li>arT</li>
          </ul>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">🦊 Curiosidade</h2>
          <p>A FURIA foi o primeiro time brasileiro a montar uma gaming house nos EUA!</p>
        </div>
      </section>
    </div>
  );
}
