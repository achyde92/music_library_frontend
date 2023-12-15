import MusicItem from "../MusicItem/MusicItem";

const MusicList = ({songs= [], activeIndex, setActiveIndex}) => {
  const musicItems = songs.map((song, i) => 
  <MusicItem 
    key={song.title}
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
      <div>{musicItems}</div>
    </div>
  );
};

export default MusicList;