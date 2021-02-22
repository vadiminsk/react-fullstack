import React from 'react';

const NewsListItem = ({ item }) => {
  const { title, feed } = item;
  return (
    <div className='news__item'>
      <h3>{title}</h3>
      <div>{feed}</div>
    </div>
  );
};

export default NewsListItem;
