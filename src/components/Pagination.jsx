import React, { useState, useEffect } from "react";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handleNext = () => setPage((prevPage) => prevPage + 1);
  const handlePrevious = () =>
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));

  return (
    <div>
      <h3>Paginated List</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
      <div>
        <button onClick={handlePrevious} disabled={page === 1}>
          Previous
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
      <p>Page: {page}</p>
    </div>
  );
};

export default Pagination;
