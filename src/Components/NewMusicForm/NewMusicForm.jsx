import React, { useState } from "react";
import axios from "axios";
import TextField from "../TextField/TextField";

const NewMusicForm = ({ onNewMusic }) => {
  const [title, setTitle] = useState("");
  const [album, setAlbum] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      album,
      artist,
      genre,
      releaseDate,
    };
    try {
      const response = await axios.post(
        "https://localhost:7276/api/movies",
        formData
      );
      if (response.status === 201) {
        onNewMusic();
      }
    } catch (error) {
      console.warn("Error Submitting new movie form: ");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex item">
      <h4>Add Movie</h4>
      <div className="p-2">
        <TextField label="Title" value={title} onChange={setTitle} />
        <TextField label="Album" value={album} onChange={setAlbum} />
        <TextField label="Artist" value={artist} onChange={setArtist} />
        <TextField label="Genre" value={genre} onChange={setGenre} />
        <TextField
          label="Release Date"
          value={releaseDate}
          onChange={setReleaseDate}
        />
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary" type="submit">
            Add Song
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewMusicForm;
