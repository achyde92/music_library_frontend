import "./App.css";
import Header from "./Components/Header/Header";
import MusicTable from "./Components/MusicTable/MusicTable";
import NewMusicForm from "./Components/NewMusicForm/NewMusicForm";
import SearchBarForm from "./Components/SearchBar/SearchBarForm";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const fetchSongs = async () => {
    try {
      const response = await axios.get("https://localhost:7183/api/MusicLibrary");
      // console.log(response);
      setSongs(response.data);
    } catch (error) {
      console.warn("Error in fetchsongs request:", Error);
    }
  };
  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchBarForm />
      <div className="flex-container">
        <MusicTable
          songs={songs}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <NewMusicForm onNewMusic={fetchSongs} />
      </div>
    </div>
  );
}

export default App;
