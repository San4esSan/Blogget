import React from 'react';
import style from './PostDelete.module.css';
import {ReactComponent as CartIcon} from './img/delete.svg';

export const PostDelete = () => (
  <button className={style.delete} aria-label="Удалить пост">
    <CartIcon className={style.delete} aria-label="Удалить пост" />
  </button>
);
