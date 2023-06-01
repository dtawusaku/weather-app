import React, { useState } from "react";
import Header from "./components/Header";
import Box1 from "./components/Box1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <div className="m mt-4">
        <Box1 />
      </div>
    </>
  );
}

export default App;
