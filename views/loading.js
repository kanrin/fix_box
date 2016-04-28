/**
 * react loading
 * @authors Orz
 * @date    2016-04-28 09:30:58
 * @version $Id$
 */

var Loading = React.createClass({
  render: function() {
    return (<div className="mv-head">
      <div id='loading-mask'></div>
<div id="loading">
       <div className="loading">
<img src="app/img/loading2.gif" />
       </div>
</div>
</div>
);
  }
});

ReactDOM.render(
  <Loading />,
  document.getElementById('head')
);

console.log('loading');
