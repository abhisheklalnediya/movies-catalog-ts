import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';
import actions from '../actions';
import MovieItem from './movie-item';
import Header from './header';
import './App.css';

const styles = () => ({
  root: {
    flexGrow: 1,
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  catalog: {
    flexGrow: 1,
    overflowX: 'hidden',
    overflowY: 'auto',
    paddingTop: 64,
  },
  header: {
    // height: 100,
    padding: '0px 30px 30px 30px',
    flexGrow: 0,
    flexBasis: 'auto',
    // boxShadow: '0px 30px 42px #000',
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    background: 'linear-gradient(#000, #000 54%, transparent)',
  },
  group: {
    margin: 0,
    marginBottom: 90,
    width: '100%',
    padding: '0px 15px',
    '& > div.grid': {
      padding: 15,
      paddingBottom: 0,
      paddingTop: 0,
    },
  },
});

function isBottom(e) {
  return (e.target.scrollHeight - e.target.scrollTop - 50) < e.target.clientHeight;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.trackScrolling = this.trackScrolling.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    const container = document.getElementById('catalog-contatiner');
    container.addEventListener('scroll', this.trackScrolling);
    this.fetchMovies();
  }

  componentWillUnmount() {
    const container = document.getElementById('catalog-contatiner');
    container.removeEventListener('scroll', this.trackScrolling);
  }

  fetchMovies() {
    const {
      dispatch, movie,
    } = this.props;
    const { page, totalPages, fetching } = movie;
    console.log(movie)
    if (!fetching && ((totalPages && page < totalPages) || totalPages === null)) {
      dispatch(actions.fetch_movies(movie.page + 1));
    } else if (page === totalPages) {
      const container = document.getElementById('catalog-contatiner');
      container.removeEventListener('scroll', this.trackScrolling);
    }
  }

  trackScrolling(e) {
    if (isBottom(e)) {
      this.fetchMovies();
    }
  }

  renderMovies() {
    const { movie, classes } = this.props;
    const { searchResults } = movie;
    const items = searchResults.map((m, i) => <MovieItem key={i} {...m} />);
    return _.chunk(items, 3).map((i, j) => (
      <Grid key={j} container spacing={32} className={classes.group}>{i}</Grid>
    ));
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.header}>
          <Header onSearch={this.searchMovies} onSearchClear={() => this.searchMovies(null)} />
        </Grid>
        <Grid item xs={12} className={classes.catalog} id="catalog-contatiner">
          {this.renderMovies()}
        </Grid>
      </Grid>
    );
  }
}
export default connect(state => ({ movie: state.movie }))(withStyles(styles)(App));
