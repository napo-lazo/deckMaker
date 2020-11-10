const {app, BrowserWindow} = require('electron');

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