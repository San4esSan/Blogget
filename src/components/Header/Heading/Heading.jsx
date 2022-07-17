import React from 'react';
import style from './Heading.module.css';
import propTypes from 'prop-types';

export const Heading = ({ text }) => {
  return (
    <div className={style.heading}>
      <h1>{text}</h1>
    </div>
  );
};

Heading.propTypes = {
  text: propTypes.string,
};
