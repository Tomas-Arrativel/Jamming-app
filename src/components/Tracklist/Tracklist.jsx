import Track from '../Track/Track';
import styles from './Tracklist.module.css';

const Tracklist = ({ addedSongs }) => {
  return (
    <div className={styles['selected']}>
      <input
        type='text'
        placeholder='Playlist name'
        className={styles['playlist__name']}
      />
      <div className={styles['selected__songs']}>
        {addedSongs.length > 0 ? (
          addedSongs.map((song) => (
            <Track
              title={song.name}
              artist={song.artist}
              album={song.album}
              id={song.id}
              key={song.id}
            />
          ))
        ) : (
          <p>Add some songs by clicking the + button</p>
        )}
      </div>
      <button className={styles['saveto__btn']}>Save to Spotify</button>
    </div>
  );
};

export default Tracklist;
