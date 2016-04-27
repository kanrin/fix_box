/**
 * electron load js
 * @authors Orz
 * @date    2016-04-18 15:30:58
 * @version $Id$
 */

'use strict';
global.ROOT = __dirname;
var app = require('app');
var BrowserWindow = require('browser-window');
var mainWindow = null;
const ipcMain = require('electron').ipcMain;


app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 532,
        width: 800,
        autoHideMenuBar: true,
        useContentSize: true,
        frame: false,
        resizable: false,
    });
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    mainWindow.center()

    ipcMain.on('close-main-window', function() {
        console.log('close');
        app.quit();
    });

    ipcMain.on('minimize-main-window', function() {
        console.log('mini');
        mainWindow.minimize();
    });

    // ipcMain.on('open-develop', function() {
    //     console.log('develop');
    //     mainWindow.openDevTools();
    // });

});

app.setName('FIX BOX')
