/**
 * envent listener and do
 * @authors Orz
 * @date    2016-04-26 18:37:37
 * @version $Id$
 * If you add a new function, it must increase the listener items and functions
 */

// listener
document.getElementById('flushdns').addEventListener('click', flushdns);
document.getElementById('clear_flash').addEventListener('click', clear_flash);
document.getElementById('get_ping').addEventListener('click', get_ping);
document.getElementById('get_sysinfo').addEventListener('click', get_sysinfo);
document.getElementById('clearscreen').addEventListener('click', clearscreen);
console.log('load listener OK  ' + new Date());


// functions

function add_div(data) {
    var parent = document.getElementById('txt');
    var div = document.createElement('div');
    div.setAttribute('id', 'ver');
    div.innerHTML = data;
    parent.appendChild(div);
}

function del_div() {
    var my = document.getElementById('ver');
    if (my != null)
        my.parentNode.removeChild(my);
}

function flushdns() {
    var exec = require('child_process').exec;
    fldns = exec('ipconfig /flushdns');
    fldns.on('exit', function(code, signal) {
        console.log('dns   ' + code);
        if (code == 0) {
            del_div();
            add_div('flush dns success');
        } else {
            del_div();
            add_div('flush dns faild');
        }
    });
}

function clear_flash() {
    var exec = require('child_process').exec;
    clflash = exec('del *.sol/s');
    clflash.on('exit', function(code, signal) {
        console.log('flash   ' + code);
        if (code == 0) {
            del_div();
            add_div('clear cache success');
        } else {
            del_div();
            add_div('clear cache faild');
        }
    });
}

function get_ping() {
    // Use the jjg-ping library.
    var ping = require('./jjg-ping');
    var inhost = document.getElementById('ips').value
    if (inhost) {
      // Ping host
      ping.system.ping(inhost, function(latency, status) {
          if (status) {
              // Host is reachable/up. Latency should have a value.
              del_div();
              add_div(host + ' is reachable (' + latency + ' ms ping).');
          }
          else {
              // Host is down. Latency should be 0.
              del_div();
              add_div('host unreachable.');
          }
      });
    } else {
      del_div();
      add_div('please input the domian or ip');
    }


}

function get_sysinfo(argument) {
    var os = require('os');
    del_div();
    add_div('CPU : ' + os.cpus()[0]['model']);
    del_div();
    mem = os.totalmem() / 1024 / 1024 / 1024
    add_div('MEM : ' + mem.toFixed(2) + 'Gb');
    del_div();
    add_div('OS  : ' + os.platform() + " " + os.type() + " " + os.release());
}

function clearscreen() {
  for (var i = 0; i < 10; i++) {
    del_div();
    add_div('&nbsp;')
  }
}
console.log('load do OK  ' + new Date());
