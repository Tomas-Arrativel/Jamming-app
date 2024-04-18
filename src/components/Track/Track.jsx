import styles from './Track.module.css';

const Track = ({
  title,
  artist,
  album,
  setAddedSongs,
  id,
  uri,
  inPlaylist,
}) => {
  const handleAddSong = () => {
    setAddedSongs((prevSongs) => {
      if (!prevSongs.some((song) => song.id == id)) {
        return [...prevSongs, { name: title, artist, album, id, uri }];
      } else return [...prevSongs];
    });
  };

  const handleDeleteSong = () => {
    setAddedSongs((prevSongs) =>
      [...prevSongs].filter((song) => song.id !== id),
    );
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
      {inPlaylist ? (
        <button className={styles['track__btn']} onClick={handleDeleteSong}>
          -
        </button>
      ) : (
        <button className={styles['track__btn']} onClick={handleAddSong}>
          +
        </button>
      )}
    </div>
  );
};

export default Track;
