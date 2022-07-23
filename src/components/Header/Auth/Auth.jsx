import React from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as UserIcon} from './img/login.svg';

export const Auth = ({auth}) => (

  <button className={style.button}>
    {auth ? auth : <UserIcon className={style.svg}/>}
  </button>
);

Auth.propTypes = {
  auth: PropTypes.bool,
};
