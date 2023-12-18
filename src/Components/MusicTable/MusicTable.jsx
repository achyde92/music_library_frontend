import MusicItem from "../MusicItem/MusicItem";

const MusicTable = ({songs= [], activeIndex, setActiveIndex}) => {
  const musicItems = songs.map((song, i) => 
  <MusicItem 
    key={song.id}
    title={song.title}
    album={song.album}
    artist={song.artist}
    genre={song.genre}
    releaseDate={song.releaseDate}
    activeIndex={activeIndex} 
    setActiveIndex={setActiveIndex}
    index={i}
  />);
  return (
    <div className="flex-item">
      <h4>Playlist:</h4>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, i) => (
            <MusicItem
              key={song.id}
              title={song.title}
              album={song.album}
              artist={song.artist}
              genre={song.genre}
              releaseDate={song.releaseDate}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              index={i}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MusicTable;