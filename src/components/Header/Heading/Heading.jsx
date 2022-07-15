import React from 'react';
import style from './Heading.module.css';
import propTypes from 'prop-types';

export class ClassComponent extends React.Component {
  Heading = ({text}) => {
    return (
      <div className={style.heading}>
        <h1>{text}</h1>
      </div>
    );
  };
}

ClassComponent.propTypes = {
  text: propTypes.string,
};
