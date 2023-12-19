import "./App.css";
import Header from "./Components/Header/Header";
import MusicTable from "./Components/MusicTable/MusicTable";
import NewMusicForm from "./Components/NewMusicForm/NewMusicForm";
import SearchBarForm from "./Components/SearchBar/SearchBarForm";
import DeleteMusicForm from "./Components/DeleteMusicForm/DeleteMusicForm";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchSongs = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7183/api/MusicLibrary"
      );
      // console.log(response);
      setSongs(response.data);
    } catch (error) {
      console.warn("Error in fetchsongs request:", Error);
    }
  };
  useEffect(() => {
    fetchSongs();
  }, []);

  const filterSongs = () => {
    console.log("Filter Songs triggered:");
    const filteredSongs = songs.filter(
      (song) =>
        song.title.includes(searchTerm) ||
        song.album.includes(searchTerm) ||
        song.genre.includes(searchTerm) ||
        song.artist.includes(searchTerm) ||
        song.releaseDate.includes(searchTerm)
    );
    setSongs(filteredSongs);
  };

  return (
    <div className="App">
      <Header />
      <SearchBarForm
        onSearchChange={filterSongs}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <div className="flex-container">
        <MusicTable
          songs={songs}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <NewMusicForm onNewMusic={fetchSongs} />
        <DeleteMusicForm />
      </div>
    </div>
  );
}

export default App;
