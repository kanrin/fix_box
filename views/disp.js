/**
 * react views
 * @authors Orz
 * @date    2016-04-18 15:30:58
 * @version $Id$
 */

var arr = [
  <div key="0" id="ver">&nbsp;</div>,
  <div key="1" id="ver">&nbsp;</div>,
  <div key="2" id="ver">&nbsp;</div>,
  <div key="3" id="ver">&nbsp;</div>,
  <div key="4" id="ver">&nbsp;</div>,
  <div key="5" id="ver">&nbsp;</div>,
  <div key="6" id="ver">&nbsp;</div>,
  <div key="7" id="ver">&nbsp;</div>,
  <div key="8" id="ver">&nbsp;</div>,
];

ReactDOM.render(
  <div id="txt" className="alert alert-info">{arr}</div>,
  document.getElementById('disp')
);

ReactDOM.render(
  <hr />,
  document.getElementById('horizontal')
);

console.log('disp ready  '+ new Date());
