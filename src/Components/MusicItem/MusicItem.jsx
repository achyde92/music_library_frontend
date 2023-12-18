import React, { useState } from 'react';

const MusicItem = ({title, album, artist, genre, releaseDate, activeInedex: activeIndex, setActiveIndex, index}) => {
    const [isFavorite, setIsFavortite] = useState(false);

    const handleFavorite = (e) => {
        setIsFavortite(!isFavorite);
    };

    const handleActive = () => {
        setActiveIndex(index)
    };

    const btnClass = isFavorite ? "btn btn-success" : "btn btn-secondary"
    const activeClass = index === activeIndex ? "active-movie" : ""

    return (
    <tr onClick={handleActive} className={`music-item ${activeClass}`}>
        <td>{title}</td>
        <td>{album}</td>
        <td>{artist}</td>
        <td>{genre}</td>
        <td>{releaseDate}</td>
        <td>
        <button className= {btnClass} onClick={handleFavorite}>favorite</button>
        </td>
    </tr> );
}
 
export default MusicItem;