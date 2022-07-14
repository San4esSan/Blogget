import React from 'react';
import style from './Heading.module.css';

// eslint-disable-next-line react/prop-types
export const Heading = ({text}) => {
  return (
    <div className={style.heading}>
      <h1>{text}</h1>
    </div>
  );
};
