const { Tray } = require('electron');
const { resolve } = require('path');

const iconPath = resolve(__dirname, '../', 'assets', 'linkedin.png');

function createTray() {
  const tray = new Tray(iconPath);
  tray.setToolTip('LinkedIn Reminder')

  return tray;
}

console.log();

module.exports = createTray();