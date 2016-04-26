/**
 * react function
 * @authors Orz
 * @date    2016-04-18 15:30:58
 * @version $Id$
 */

// function main
var Fncs = React.createClass({
  render: function() {
    return (
      <div>
        <Inputhost />
        <RepoList promise = { $.getJSON('./views/functions.json') } />
      </div>
    );
  }
});

// json function mode
var RepoList = React.createClass({
    getInitialState: function() {
        return {
            loading: true,
            error: null,
            data: null
        };
    },

    componentDidMount() {
      // console.log(this.props.promise.then);
        this.props.promise.then(
            value => this.setState({ loading: false, data: value }),
            error => this.setState({ loading: false, error: error }));
    },

    render: function() {
        if (this.state.loading) {
            return <span> Loading Functions... </span>;
        } else if (this.state.error !== null) {
            return <span> Error: { this.state.error.message } </span>;
        } else {
            var repos = this.state.data.funs;
            var repoList = repos.map(function(repo) {
                return ( <button key={repo.key} className = {repo.class} onClick={repos.map.bind(this)}> { repo.fname } </button>);
            });
            return ( <div> { repoList } </div>);
        }
    }
});
// input mode
var Inputhost = React.createClass({
  render: function() {
    return <input placeholder="please input domian" type="text" name="ips" id="ips" className="form-control"></input>;
  }
});

ReactDOM.render(
  <Fncs />,
  document.getElementById('fncs')
);
