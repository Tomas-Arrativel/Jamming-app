import styles from './Track.module.css';

const Track = ({ title, artist, album, setAddedSongs, id }) => {
  const handleOnClick = () => {
    setAddedSongs((prevSongs) => {
      if (!prevSongs.some((song) => song.id == id)) {
        return [...prevSongs, { name: title, artist, album, id }];
      } else return [...prevSongs];
    });
  };

  return (
    <div className={styles['track']}>
      <div className={styles['track__info']}>
        <h3>{title}</h3>
        <p>
          {artist}
          <span>|</span>
          {album}
        </p>
      </div>
      <button className={styles['track__btn']} onClick={handleOnClick}>
        +
      </button>
    </div>
  );
};

export default Track;
