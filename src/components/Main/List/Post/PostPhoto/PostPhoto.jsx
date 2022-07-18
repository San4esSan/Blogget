import React from 'react';
import style from './PostPhoto.module.css';
import PropTypes from 'prop-types';

export const PostPhoto = ({notphoto}) => (
  <img className={style.img} src={notphoto} alt="" />
);

PostPhoto.propTypes = {
  notphoto: PropTypes.string,
};
