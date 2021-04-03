import { Notifier } from "./Notifier.js";
import { Timer } from "./Timer.js";
import { Emitter } from "./Emitter.js";

const notify = Notifier.notify({
  title: "Hora do post",
  body: "Post algum conteúdo",
});

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
