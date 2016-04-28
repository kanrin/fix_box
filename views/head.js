/**
 * react head
 * @authors Orz
 * @date    2016-04-28 09:30:58
 * @version $Id$
 */

var Head = React.createClass({
  render: function() {
    return <div className="list-unstyled title-message" onMouseOver={this.tips}>&nbsp;&nbsp;{this.props.title}</div>;
  }
});

ReactDOM.render(
  <Head title="FIX BOX" />,
  document.getElementById('head')
);
console.log('head OK  '+ new Date());
