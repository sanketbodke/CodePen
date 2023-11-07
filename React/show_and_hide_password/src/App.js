import React, { useState } from "react";
import "../src/App.css";

export default function App() {
  const [password, setPassword] = useState(true);

  const handleHideShow = () => {
    setPassword(!password);
  };

  return (
    <div>
      <form action="">
        <input type={password ? "password" : "text"} />
        <input
          type="button"
          value={password ? "Show" : "Hide"}
          onClick={handleHideShow}
        />
      </form>
    </div>
  );
}
