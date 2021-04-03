import { Notifier } from "./Notifier.js";
import { Timer } from "./Timer.js";

const App = {
  async start() {
    try {
      const time = 25 * 60;
      Timer.init(time);

      await Notifier.init();
      Notifier.notify({
        title: "Hora do post",
        body: "Post algum conteúdo",
      });
    } catch (e) {
      console.log(e.message);
    }
  },
};

export { App };
