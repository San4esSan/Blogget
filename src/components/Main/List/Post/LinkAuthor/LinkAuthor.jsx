import React from 'react';
import style from './LinkAuthor.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../Ui/Text/Text';

export const LinkAuthor = ({author}) => (
  <Text fontWeight={'bold'} As='a' size={12} tsize={14} color='orange' a className={style.linkAuthor} href="#autor">
    {author}
  </Text>
);

LinkAuthor.propTypes = {
  author: PropTypes.string,
};
