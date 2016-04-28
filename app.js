/**
 * load js
 * @authors Orz
 * @date    2016-04-28 09:30:58
 * @version $Id$
 */

require("babel-register");
require('./views/loading');
require('./views/disp');
require('./views/functions');
setTimeout(
  function(){
    require('./lib/do')
    require('./views/head');
  },2000)
