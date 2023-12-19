import MusicItem from "../MusicItem/MusicItem";
import DeleteMusicForm from "../DeleteMusicForm/DeleteMusicForm";

const MusicTable = ({ songs = [], activeIndex, setActiveIndex, onDelete }) => {
  const musicItems = songs.map((song, i) => (
    <tr key={song.id}>
      <MusicItem
        title={song.title}
        album={song.album}
        artist={song.artist}
        genre={song.genre}
        releaseDate={song.releaseDate}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        index={i}
      />
      <td>
        <DeleteMusicForm songId={song.id} onDelete={onDelete} />
      </td>
    </tr>
  ));

  return (
    <div className="flex-item">
      <h4>Playlist:</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>{musicItems}</tbody>
      </table>
    </div>
  );
};

export default MusicTable;