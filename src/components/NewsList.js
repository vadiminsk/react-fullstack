import React from 'react';
import NewsListItem from './NewsListItem';

const NewsList = (props) => {
  const news = props.news.map((item) => (
    <NewsListItem key={item.id} item={item} />
  ));

  return (
    <div>
      {news}
      {props.children}
    </div>
  );
};

export default NewsList;
