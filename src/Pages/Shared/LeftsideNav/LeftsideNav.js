import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftsideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/news-categories')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])
  return (
    <div>
      <h4 className='fw-bolder bg-light p-2 w-100 text-center'>Categories</h4>
      {
        categories.map(ct => <Link style={{ textDecoration: 'none' }} key={ct.id} to={`/category/${ct.id}`}><button type="button" class="btn btn-info d-block mt-2 p-2 fw-bolder w-100">{ct.name}</button></Link>)
      }
    </div>
  );
};

export default LeftsideNav;