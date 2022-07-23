import classNames from 'classnames';
import React from 'react';
import style from './Text.module.css';
import PropTypes from 'prop-types';

export const Text = (prop) => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    className,
    children,
    href,
    center,
    fontWeight = 'medium',
  } = prop;

  const classes = classNames(
    className,
    style[color],
    {[style.center]: center},
    {[style.fontWeight]: fontWeight},
    {[style[`fs${size}`]]: size},
    {[style[`fst${tsize}`]]: tsize},
    {[style[`fsd${dsize}`]]: dsize},
  );

  return <As className={classes} fontWeight={fontWeight} href={href}>{children}</As>;
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  fontWeight: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  href: PropTypes.string,
  center: PropTypes.bool,
};
