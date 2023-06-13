import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "./views/Hero";
import DataTable from "./views/DataTable";

function App() {
  const [reset, setReset] = useState(false);

  const handleReset = () => setReset((e) => !e);

  return (
    <div>
      <Hero handleReset={handleReset} />
      <DataTable refetch={reset} />
    </div>
  );
}

export default App;
