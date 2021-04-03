import { Notifier } from "./Notifier.js";
import { Timer } from "./Timer.js";
import { Emitter } from "./Emitter.js";

const notifyMessage = [
  "Crie um novo post", 
  "responda as mensagens do seu feed ou chat", 
  "Curta e compartilhe o conteúdo das páginas que segue"
];

const notify = () => {
  const randomMessage = notifyMessage[(Math.floor(Math.random() * notifyMessage.length))];
  
  const notification = Notifier.notify({
    title: "Hora do post",
    body: `${randomMessage}`,
  });

  notification();
} 
  
const App = {
  async start() {
    try {
      await Notifier.init();
      const time = 25 * 60;
      
      Emitter.on('countdown-start', notify);

      Emitter.on('countdown-end', Timer.init)

      Timer.init(time);

    } catch (e) {
      console.log(e.message);
    }
  },
};

export { App };
