import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ displayDirection }) {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  function handleChange(event) {
    setSearchInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const trimmedInput = searchInput.trim();
    if (trimmedInput) {
      console.log(`Navigating to /search?poet=${trimmedInput}`);
      navigate(`/search?poet=${trimmedInput}`);
      setSearchInput('');
    }
  }

  console.log("SearchBar render");

  return (
    <form onSubmit={handleSubmit} className={displayDirection}>
      <input
        type="text"
        aria-label="Search for a classic poet"
        value={searchInput}
        onChange={handleChange}
        id="searchInput"
        placeholder="Search for a classic poet"
        autoComplete="off"
      />
      <button variant="primary" size="lg" type="submit">
        Search
      </button>
    </form>
  );
}
