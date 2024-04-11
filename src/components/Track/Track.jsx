import styles from './Track.module.css';

const Track = ({ title, artist, album }) => {
  return (
    <div className={styles['track']}>
      <h3 className={styles['track__title']}>{title}</h3>
      <p>
        {artist}
        <span>|</span>
        {album}
      </p>
    </div>
  );
};

export default Track;
