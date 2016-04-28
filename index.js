'use strict';
var $=require("jquery");
const ipcRenderer = require('electron').ipcRenderer;
// close window mode
var closeEl = document.getElementById('close');
closeEl.addEventListener('click', function() {
    ipcRenderer.send('close-main-window');
});
// minimize window mode
var miniEl = document.getElementById('minisize');
miniEl.addEventListener('click', function() {
    ipcRenderer.send('minimize-main-window');
});

// developtool button
// var miniEl = document.getElementById('dev');
// miniEl.addEventListener('click', function() {
//     ipcRenderer.send('open-develop');
// });

console.log('load index ok');
require('./app');
