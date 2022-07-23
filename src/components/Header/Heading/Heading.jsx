import React from 'react';
import style from './Heading.module.css';
import propTypes from 'prop-types';
import {Text} from '../../../Ui/Text/Text';

export const Heading = ({text}) => (
  <Text As={'h1'} size={50} tsize={26} center className={style.heading}>
    {text}
  </Text>
);

Heading.propTypes = {
  text: propTypes.string,
};
