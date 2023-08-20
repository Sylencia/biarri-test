import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import "./Search.scss";

export const Search = ({ handleSearch, isLoading }) => {
  const inputRef = useRef();

  const onSearchSubmit = (e) => {
    e.preventDefault();

    if (inputRef.current.value) {
      handleSearch(inputRef.current.value);
    }
  };

  return (
    <form onSubmit={onSearchSubmit} className="search-container">
      <div className="search-pin">
        <FontAwesomeIcon icon={faLocationDot} />
      </div>
      <input
        type="text"
        className="search-input"
        ref={inputRef}
        disabled={isLoading}
      />
      <button type="submit" className="search-button" disabled={isLoading}>
        {isLoading ? (
          <FontAwesomeIcon icon={faSpinner} spin style={{ color: "black" }} />
        ) : (
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        )}
      </button>
    </form>
  );
};
