import React from 'react';
import useTitle from '../hooks/useTitle';

const SingleNews = ({ n }) => {
  console.log(n);
  const { title, details, author, total_view } = n;
  useTitle('internal news')
  return (
    <div className='py-1'>
      <div class="card">
        <h5 class="card-header">Published: {author.published_date}</h5>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{details}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        <h5 class="card-header">Total view: {total_view
        }</h5>
      </div>
    </div>
  );
};

export default SingleNews;