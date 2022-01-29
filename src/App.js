import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit() {}

  return (
    <div className="page">
      <div className="landing-page-container">
        <div className="left-side">
          <form className="form">
            <input className="input" value={username} placeholder="Github Username" onChange={(e) => setUsername(e.target.value)} />
            <button className="button" onClick={handleSubmit}>
              {loading ? "Searching... " : "Search"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
