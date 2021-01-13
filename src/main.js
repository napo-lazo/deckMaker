const {app, BrowserWindow} = require('electron');

console.log(`${__dirname}\\..`)

require('electron-reload')(`${__dirname}/..`, {
    electron: require(`${__dirname}/../node_modules/electron`)
});

function createWindow()  {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('./public/index.html');
    
}

app.whenReady().then(createWindow);