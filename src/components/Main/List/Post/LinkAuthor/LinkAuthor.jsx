import React from 'react';
import style from './LinkAuthor.module.css';
import PropTypes from 'prop-types';

export const LinkAuthor = ({author}) => (
  <a className={style.linkAuthor} href="#autor">
    {author}
  </a>
);

LinkAuthor.propTypes = {
  author: PropTypes.string,
};
