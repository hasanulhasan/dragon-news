import React from 'react';

const NewsCart = ({ news }) => {
  const { title, total_view } = news;
  return (
    <div>
      <h1>{title}</h1>
      <h6>Total view: {total_view}</h6>
    </div>
  );
};

export default NewsCart;