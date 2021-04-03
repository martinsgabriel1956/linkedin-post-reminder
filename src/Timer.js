import { View } from './View.js';

const Timer = {
  // O tempo inicial do contador 
  time: 60 * 60,
  // Tempo decorrido
  currentTime: 0,
  // Intervalo do countdown
  interval: null,
  timeToMinutes: time => Math.floor(time / 60),
  timeToSeconds: time => time % 60,

  formatTime: time => String(time).padStart(2, '0'),

  init: time => {
    Timer.time = time || Timer.time;
    // O currentTime tem o valor de time atribuído nele
    Timer.currentTime = Timer.time;
    // O countdown executa a cada um segundo
    Timer.interval = setInterval(Timer.countdown, 1000)
  },
  countdown: () => {
    // Contagem diminuindo de um em um segundo
    Timer.currentTime -= 1;
    
    const minutes = Timer.formatTime(Timer.timeToMinutes (Timer.currentTime))
    const seconds = Timer.formatTime(Timer.timeToSeconds (Timer.currentTime))

    // Mandar os minutes e seconds para View
    View.render({ 
      minutes,
      seconds,
    })
    // Não deixa que o contador continue contando após zerar
    if(Timer.currentTime === 0) clearInterval(Timer.interval);
  }
}

export { Timer }