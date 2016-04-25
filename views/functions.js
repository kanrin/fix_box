/**
 * react function
 * @authors Orz
 * @date    2016-04-18 15:30:58
 * @version $Id$
 */

import $ from "jquery";


var RepoList = React.createClass({
    getInitialState: function() {
        return {
            loading: true,
            error: null,
            data: null
        };
    },

    componentDidMount() {
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
                return ( <button className = {repo.class} > { repo.fname } </button>);
            });
            return ( <div> { repoList } </div>);
        }
    }
});

ReactDOM.render(
    <RepoList promise = { $.getJSON('../views/functions.json') }/>,
    document.getElementById('fncs')
);
