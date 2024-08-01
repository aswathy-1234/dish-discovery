
import React, { useState } from 'react';
import RecipeSearch from './Recipisearch';
import StartPage from './startpage';
import './App.css';

function Super() {
  const [currentPage, setCurrentPage] = useState('start');

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === 'start' ? (
        <StartPage onPageChange={onPageChange} />
      ) : (
        <RecipeSearch onPageChange={onPageChange} />
      )}
    </div>
  );
}

export default Super;