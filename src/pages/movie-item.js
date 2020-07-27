import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import classes from './app.module.css';


const imgUrl = image => (`/movies-catalog-ts/images/${image}`);

const MovieItem = ({ name, 'poster-image': image }) => (
  <Grid item xs={4} className={classes.grid} title={name}>
    <div className={classes.movieBox}>
      <div className={classes.imageBox} style={{ backgroundImage: `url(${imgUrl(image)}), url(${imgUrl('poster_missing.png')})` }} />
      <span className={classes.title}>{name}</span>
    </div>
  </Grid>
);

MovieItem.propTypes = {
  name: PropTypes.string.isRequired,
  'poster-image': PropTypes.string.isRequired,
};

export default MovieItem;
