import React from 'react';
import style from './PostTitle.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../Ui/Text/Text';

export const PostTitle = ({title}) => (
  <Text As='h2' className={style.title}>
    <Text As='a' size={18} tsize={24} a className={style.linkPost} href="#post">
      {title}
    </Text>
  </Text>
);

PostTitle.propTypes = {
  title: PropTypes.string,
};
