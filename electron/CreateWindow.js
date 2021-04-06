const { BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 250,
    height: 310,
    show: false,
    frame: false,
    resizable: false,
    fullscreenable: false,
  })

  win.loadFile('index.html');

  // Blur da janela
  win.on('blur', () => win.hide());

  return win;
}

module.exports = createWindow();