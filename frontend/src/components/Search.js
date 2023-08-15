import React, { useState } from "react";
import axios from "axios";
import { Row, Dropdown, ButtonGroup, DropdownButton, Card, Button, Col } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Result from "./Result";

const Search = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("allTrack");
  const [results, setResults] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (result) => {
    if (favorites.includes(result)) {
      setFavorites(favorites.filter((item) => item !== result));
    } else {
      setFavorites([...favorites, result]);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const categories = {
    "CATEGORIES": "allTrack",
    "MUSIC": "song",
    "MUSIC VIDEOS": "musicVideo",
    "APPS": "software",
    "EBOOKS": "ebook",
    "AUDIO BOOKS": "audiobook",
    "PODCASTS": "podcast",
    "MOVIES": "movie",
    "TV SHOWS": "tvSeason",
    "SHORT FILMS": "shortFilm",
  };

  const handleCategorySelect = (selectedCategory) => {
    setType(categories[selectedCategory]);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();

    axios
      .get(`https://mpho-search-api.onrender.com/search/?name=${name}&type=${type}`, {
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then((res) => {
        console.log("Response from API:", res.data);
        const queryAdded = res.data.results || [];
        setResults(queryAdded);
      })
      .catch((err) => {
        console.log(err.toJSON());
      });
  };

  return (
    <div id="searchcontainer">
      <div id="searchcontent">
        <DropdownButton
          className="mb-5"
          as={ButtonGroup}
          variant="info"
          id="dropdown-basic"
          drop="right"
          title="CATEGORIES"
          size="md"
        >
          {Object.keys(categories).map((category, i) => (
            <Dropdown.Item
              as="button"
              key={i}
              type="button"
              name="category"
              title={category}
              id="searchcategories"
              value={category}
              active={type === categories[category]}
              onClick={() => handleCategorySelect(category)} // Use the category name as parameter
            >
              {category}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <div id="searchinput" className="text-center">
          <input
            type="text"
            placeholder="Search..."
            name="name"
            value={name}
            onChange={handleNameChange}
          />
          <button
            id="searchbutton"
            type="submit"
            onClick={handleSubmitSearch}
          >
            <FaSearch title="Search" />
          </button>
        </div>
      </div>

      <div className="search-page">
        <div className="container-fluid text-center">
          <Row md={4}>
            {results.length > 0 ? (
              results.map((result, index) => (
                <Result
                  key={index}
                  result={result}
                  isFavorite={favorites.includes(result)}
                  toggleFavorite={() => toggleFavorite(result)}
                />
              ))
            ) : (
              <p className="centered-text">No results found.</p>
            )}
          </Row>
        </div>

        {results.length > 0 && (
          <div className="search-container">
            <h2>
              <strong>Favorites</strong>
            </h2>
            <Row>
              {favorites.map((favorite, index) => (
                <Col key={index} md={5}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={favorite.artworkUrl100.replace("100x100", "150x150")}
                    />
                    <Card.Body>
                      <Card.Title>{favorite.trackName}</Card.Title>
                      <Card.Text>{favorite.artistName}</Card.Text>
                      <Button onClick={() => toggleFavorite(favorite)}>
                        Remove from Favorites
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;