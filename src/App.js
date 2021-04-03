import { Notifier } from './Notifier.js';

const App = {
  async start() {
   try {
    await Notifier.init();
    Notifier.notify({ 
      title: "Hora do post",
      body: "Post algum conteúdo"
     })

   } catch (e) {
     console.log(e.message);
   }
  }
}

export { App };