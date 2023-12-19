import React from "react";
import axios from "axios";

const DeleteMusicForm = ({ songId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`https://localhost:7183/api/MusicLibrary/${songId}`);
      onDelete();
    } catch (error) {
      console.error("Error deleting song:", error);
    }
  };

  return (
    <button className="btn btn-danger" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteMusicForm;