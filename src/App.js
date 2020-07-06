import React, { useState } from "react";

import { Search, SearchResults } from "./components";

function App() {
  const [fetchedData, setFetchedData] = useState("");

  return (
    <div className="App">
      <h1 className="title">Wikipedia Viewer</h1>
      <Search setFetchedData={setFetchedData} />
      <SearchResults search={fetchedData} />
    </div>
  );
}

export default App;
