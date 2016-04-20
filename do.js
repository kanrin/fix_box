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
    var ping = require('ping');
    var host = document.getElementById('ips').value
    console.log(host);
    if (host != '') {
        ping.sys.probe(host, function(isAlive) {
            var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
            console.log(msg);
            del_div();
            add_div('ping : ' + msg);
        });
    } else {
        del_div();
        add_div('please input host');
    }

}

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
