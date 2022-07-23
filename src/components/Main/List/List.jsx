import React from 'react';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 77,
      date: '2022-02-21T00:45:00.000Z',
      id: '315',
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 24,
      date: '2022-02-24T00:45:00.000Z',
      id: '225',
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 124,
      date: '2022-02-14T00:30:00.000Z',
      id: '111',
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 58,
      date: '2022-02-21T00:10:00.000Z',
      id: '451',
    },
  ];

  return (
    <ul className={style.list}>
      {postsData.map((postData, index) => (
        <Post key={postData.id} postData={postData} />
      ))}
    </ul>
  );
};
