import React from 'react';
import style from './PostDate.module.css';
import PropTypes from 'prop-types';

export const PostDate = ({date}) => (
  <time className={style.date} datatime={date}>
    {date}
  </time>
);

PostDate.propTypes = {
  date: PropTypes.string,
};
