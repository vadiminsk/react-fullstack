import React from 'react';

const NewsList = (props) => {
  const news = props.news.map((item) => (
    <div key={item.id}>
      <h3>{item.title}</h3>
      <div>{item.feed}</div>
    </div>
  ));

  return <div>{news}</div>;
};

export default NewsList;
