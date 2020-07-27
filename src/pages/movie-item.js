import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const styles = () => ({
  imageBox: {
    flexGrow: 1,
    width: '100%',
    borderWidth: 1,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '148%',
  },
  movieBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    // borderWidth: 1,
    // borderColor: '#FFF',
    // borderStyle: 'solid',
  },
  title: {
    fontSize: 16,
    marginTop: 24,
    width: '100%',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
});


const imgUrl = image => (`images/${image}`);

const MovieItem = ({ name, 'poster-image': image, classes }) => (
  <Grid item xs={4} className="grid" title={name}>
    <div className={classes.movieBox}>
      <div className={classes.imageBox} style={{ backgroundImage: `url(${imgUrl(image)}), url(${imgUrl('poster_missing.png')})` }} />
      <span className={classes.title}>{name}</span>
    </div>
  </Grid>
);

MovieItem.propTypes = {
  name: PropTypes.string.isRequired,
  'poster-image': PropTypes.string.isRequired,
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(MovieItem);
