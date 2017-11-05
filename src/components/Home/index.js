import React from 'react';

// custom components
import Header from './partial/Header';
import SearchForm from './partial/SearchForm';
import SearchResult from './partial/SearchResult';

const Home = () => (
  <div className="body">
    <Header />
    <main className="main">
      <div className="contiainer">
        <div className="row">
          <SearchForm />
          <SearchResult />
        </div>
      </div>
    </main>
  </div>
);

export default Home;
