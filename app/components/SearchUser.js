var React = require('react');
var GitHubUser = require('../services/GitHubUser');

var SearchUser = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();

    GitHubUser.getByUsername(this.refs.username.value).then(function(response){
      this.props.updateUser(response.data);
    }.bind(this));

    GitHubUser.getReposByUsername(this.refs.username.value).then(function(response){
      this.props.updateRepos(response.data);
    }.bind(this));
  },

  render: function() {
    return(
      <div className="jumbotron">
        <h1>GitHub Info</h1>
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                ref="username"
                className="form-control"
                placeholder="Ex: matheusml"
                />
            </div>
            <button
              type="submit"
              className="btn btn-primary">Buscar
            </button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = SearchUser;