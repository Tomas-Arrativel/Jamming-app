import Track from '../Track/Track';
import styles from './Tracklist.module.css';

const Tracklist = () => {
  return (
    <div className={styles['selected']}>
      <input
        type='text'
        placeholder='Playlist name'
        className={styles['playlist__name']}
      />
      <div className={styles['selected__songs']}>
        <Track
          album={'nose'}
          artist={"Guns 'n Roses"}
          title={"Sweet Child 'o Mine"}
        />
      </div>
      <button className={styles['saveto__btn']}>Save to Spotify</button>
    </div>
  );
};

export default Tracklist;
