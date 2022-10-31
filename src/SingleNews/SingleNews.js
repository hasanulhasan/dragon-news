import React from 'react';
import useTitle from '../hooks/useTitle';

const SingleNews = ({ n }) => {
  console.log(n);
  const { title, details, author, total_view, thumbnail_url } = n;
  useTitle('internal news')
  return (
    <div className='py-1'>
      <div className="card">
        <h5 className="card-header">{title}</h5>
        <div className="card-body">
          {/* <h5 className="card-title">Published: {author.published_date}</h5> */}
          <div className='d-flex'>
            <img className="img-thumbnail rounded float-left me-2" src={thumbnail_url} alt="Card image cap" />
            <p className="card-text">{details}</p>
            {/* <div className="card" >
              <img className="card-img-top" src={thumbnail_url} alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div> */}
          </div>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        <h5 className="card-header"> Published: {author.published_date} Total view: {total_view
        } </h5>
      </div>
    </div >
  );
};

export default SingleNews;