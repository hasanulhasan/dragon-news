import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import NewsCart from '../Shared/NewsCart/NewsCart';

const Home = () => {
  const Allnews = useLoaderData();
  useTitle('Home')
  return (
    <div>
      {
        Allnews.map(news => <NewsCart key={news.id} news={news}></NewsCart>)
      }
    </div>
  );
};

export default Home;