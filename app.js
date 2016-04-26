require("babel-register");
require('./views/disp');
require('./views/functions');
setTimeout(
  function(){
    require('./lib/do')
  },500)
