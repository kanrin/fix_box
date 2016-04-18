'use strict';
global.ROOT = __dirname;
var app = require('app');
var BrowserWindow = require('browser-window');
var mainWindow = null;
var ipc = require('ipc');


app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        autoHideMenuBar: true,
        useContentSize: true,
        frame: false,
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});

ipc.on('close-main-window', function() {
    app.quit();
});


var appdata = app.getPath('appData');
var temp = app.getPath('temp');
var desktop = app.getPath('desktop');
var user = app.getPath('userData')
console.log('appdata:'+appdata);
console.log('temp:'+temp);
console.log('desktop:'+desktop);
console.log('user:'+user);