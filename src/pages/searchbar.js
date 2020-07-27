import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Input } from '@material-ui/core';
import actions from '../actions';

const styles = () => ({
  container: {
    display: 'flex',
  },
  input: {
    color: '#333',
    width: '100%',
    background: '#DDD',
    padding: '4px 10px',
  },
});

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.searchMovies = this.searchMovies.bind(this);
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(actions.search_movies(''));
  }

  searchMovies(e) {
    const term = e.target.value;
    const { dispatch } = this.props;
    dispatch(actions.search_movies(term));
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Input placeholder="Title search" autoFocus fullWidth disableUnderline className={classes.input} onChange={this.searchMovies} />
      </div>
    );
  }
}


export default connect(state => ({ movie: state.movie }))(withStyles(styles)(SearchBar));
