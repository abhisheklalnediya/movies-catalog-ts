import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import BackIcon from '@material-ui/icons/KeyboardBackspace';
import SearchBar from './searchbar';
import classes from './app.module.css';

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
    const { onSearch } = this.props;
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
        {showSearch && <SearchBar onSearch={onSearch} className={classes.searchBar} />}
      </React.Fragment>
    );
  }
}


Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};


export default Header;
