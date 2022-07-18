import React from 'react';
import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import formatDate from '../../../../utils/formatDate';
import Rating from './Rating';
import { PostTitle } from './PostTitle/PostTitle';
import { LinkAuthor } from './LinkAuthor/LinkAuthor';
import { PostPhoto } from './PostPhoto/PostPhoto';
import { PostDelete } from './PostDelete/PostDelete';
import { PostDate } from './PostDate/PostDate';

export const Post = ({ postData }) => {
  const { title, author, ups, date } = postData;
  // console.log('title, author, ups, date: ', title, author, ups, date);
  return (
    <li className={style.post}>
      <PostPhoto notphoto={notphoto} />
      <div className={style.content}>
        <PostTitle title={title} />
        <LinkAuthor author={author} />
        <PostDelete />
      </div>
      <Rating ups={ups} />
      <PostDate date={formatDate(date)} />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
