import React from 'react';
import style from './Rating.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../Ui/Text/Text';

export const Rating = ({ups}) => (
  <Text As={'div'} className={style.rating}>
    <button className={style.up} aria-label="Повысить рейтинг" />
    <Text As={'p'} fontWeight={'bold'}>{ups}</Text>
    <button className={style.down} aria-label="Понизить рейтинг" />
  </Text>
);

Rating.propTypes = {
  ups: PropTypes.number,
};
