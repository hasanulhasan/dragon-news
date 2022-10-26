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
      <h4>All categories here {categories.length}</h4>
      {
        categories.map(ct => <p key={ct.id}><Link to={`/category/${ct.id}`}>{ct.name}</Link></p>)
      }
    </div>
  );
};

export default LeftsideNav;