const {app, BrowserWindow, ipcMain} = require('electron');
const fs = require('fs');
let win;


require('electron-reload')(`${__dirname}/..`, {
    electron: require(`${__dirname}/../node_modules/electron`)
});

ipcMain.handle('initialDeckLoad', () => {
    fs.readFile(`${__dirname}/Text_Files/decks.json`, 'utf-8', (err, data) => {
        if (err) {
            console.log('There was an error reading the file: ', err);
            return;
        }

        win.webContents.send('finish-loading', data);
    })

})

ipcMain.handle('saveDecks', (_, decks) => {
    fs.writeFile(`${__dirname}/Text_Files/decks.json`, decks, (err) => {
        if (err) {
            console.log('There was an error saving the file: ', err);
            return;
        }
    })
})

function createWindow()  {
    win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('./public/index.html');
    
}

app.whenReady().then(createWindow);