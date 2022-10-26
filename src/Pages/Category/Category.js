import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
  const news = useLoaderData();
  return (
    <div>
      <h2>This is category {news.length}</h2>
    </div>
  );
};

export default Category;