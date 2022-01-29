import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    searchRepos();
  }

  function searchRepos() {
    setLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/users/${username}/repos`,
    }).then((res) => {
      setLoading(false);
      setRepos(res.data);
    });
    console.log(repos);
  }

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
