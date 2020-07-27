import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import BackIcon from '@material-ui/icons/KeyboardBackspace';
import SearchBar from './searchbar';

const styles = () => ({
  heading: {
    color: '#FFF',
    fontSize: 19,
    flexGrow: 1,
    padding: '14px 0px',
  },
  container: {
    display: 'flex',
  },
  buttonSearch: {
    color: '#FFF',
    paddingRight: 15,
  },
  buttonBack: {
    color: '#FFF',
    paddingLeft: 0,
  },
  searchBar: {

  },
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: false,
    };
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggleSearch() {
    this.setState(state => ({ showSearch: !state.showSearch }));
  }

  render() {
    const { classes, onSearch } = this.props;
    const { showSearch } = this.state;
    return (
      <React.Fragment>
        <div className={classes.container}>
          <IconButton className={classes.buttonBack}>
            <BackIcon />
          </IconButton>
          <Typography variant="h1" className={classes.heading}>Romantic Comedy</Typography>
          <IconButton className={classes.buttonSearch} onClick={this.toggleSearch}>
            <SearchIcon />
          </IconButton>
        </div>
        { showSearch && <SearchBar onSearch={onSearch} className={classes.searchBar} />}
      </React.Fragment>
    );
  }
}


export default withStyles(styles)(Header);
