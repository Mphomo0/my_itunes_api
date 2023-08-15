import React from 'react';
import Search from '../components/Search';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className='text-center'>Itunes Search</h1>
      <Search className="text-center"/>
    </div>
  );
};

export default Home;