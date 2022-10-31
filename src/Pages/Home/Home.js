import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import SingleNews from '../../SingleNews/SingleNews';
import NewsCart from '../Shared/NewsCart/NewsCart';

const Home = () => {
  const Allnews = useLoaderData();
  useTitle('Home')
  return (
    <div>
      {
        Allnews.map(n => <SingleNews n={n._id} n={n}></SingleNews>)
      }
    </div>
  );
};

export default Home;