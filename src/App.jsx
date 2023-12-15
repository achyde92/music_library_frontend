import "./App.css";
import Header from "./Components/Header/Header";
import MusicList from "./Components/MusicList/MusicList";
import NewMusicForm from "./Components/NewMusicForm/NewMusicForm";
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
      <div className="flex-container">
        <MusicList
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
