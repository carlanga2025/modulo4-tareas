import React, { useState, useEffect } from "react";

const RickAndMortyPagination = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchCharacters = async (page = 1) => {
    setLoading(true);
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();

      setCharacters(data.results);
      setTotalPages(data.info.pages);
    } catch (err) {
      setError("Error fetching characters");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Personajes Rick and Morty</h1>
      <div>
        {characters.map(character => (
          <div key={character.id}>
            <h3>{character.name}</h3>
            <h3>{character.status}</h3>
            <img src={character.image} alt={character.name} />
          </div>
        ))}
      </div>
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{` Page ${currentPage} of ${totalPages} `}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default RickAndMortyPagination;


