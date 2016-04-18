/**
 * react views
 * @authors Orz
 * @date    2016-04-18 15:30:58
 * @version $Id$
 */

var React=require('react');
var ReactDOM=require('ReactDOM')

require('node-jsx').install({
    extension:'.jsx'
});

data = {'class':'btn btn-success' 'style':'width:49.8%;' ,'onClick':'flushdns()', 'text':'刷新dns缓存'};
var reactHtml=React.renderToString(fncs(data));
