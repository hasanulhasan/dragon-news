import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCart from '../Shared/NewsCart/NewsCart';

const Home = () => {
  const Allnews = useLoaderData();
  return (
    <div>
      {
        Allnews.map(news => <NewsCart key={news.id} news={news}></NewsCart>)
      }
    </div>
  );
};

export default Home;