import React, { useRef } from "react";

import { fetchData } from "../../api/index";

import "./Search.css";

const Search = ({ setFetchedData }) => {
  const searchInput = useRef(null);

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchData(searchInput.current.value);

      setFetchedData(data.search.search);
    }
  };

  return (
    <div>
      <div className="random-article">
        <a
          href="https://en.wikipedia.org/wiki/Special:Random"
          target="_blank"
          className="random-article-link"
          rel="noopener noreferrer"
        >
          Click here for a random article!
        </a>
      </div>
      <input
        type="text"
        className="search-input"
        placeholder="Search for articles..."
        ref={searchInput}
        onKeyPress={search}
        autoFocus
      />
    </div>
  );
};

export default Search;
