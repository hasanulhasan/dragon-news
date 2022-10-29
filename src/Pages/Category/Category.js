import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import SingleNews from '../../SingleNews/SingleNews';

const Category = () => {
  const news = useLoaderData();
  useTitle('Category')
  return (
    <div>
      <small>{news.length} news found</small>
      {
        news.map(n => <SingleNews n={n._id} n={n}></SingleNews>)
      }
    </div>
  );
};

export default Category;