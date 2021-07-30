import React from 'react';
import { useSelector } from 'react-redux';


function ShelfPage() {
  const userData = useSelector(store => store.user);
  console.log(userData);

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <p>{userData.id}</p>
    </div>
  );
}

export default ShelfPage;
