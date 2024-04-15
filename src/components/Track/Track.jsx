import styles from './Track.module.css';

const Track = ({ title, artist, album }) => {
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
      <button className={styles['track__btn']}>+</button>
    </div>
  );
};

export default Track;
