import React, { useState } from 'react';

const MusicItem = ({title, activeInedex: activeIndex, setActiveIndex, index}) => {
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
         <div onClick={handleActive} className={`music-item ${activeClass}`}>
        <span>{title}</span>
        <button className= {btnClass} onClick={handleFavorite}>favorite</button>
    </div> );
}
 
export default MusicItem;