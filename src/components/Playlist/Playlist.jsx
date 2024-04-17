import styles from './Playlist.module.css';

const Playlist = ({ playlists }) => {
  return (
    <div className={styles['playlists']}>
      {playlists.map((playlist, i) => (
        <div key={playlist.name + i} className={styles['playlists__playlist']}>
          <h3>
            Playlist <span>{playlist.name}</span>
          </h3>
          <div className={styles['playlists__playlist-songs']}>
            <p>
              Songs:{' '}
              <span>
                {playlist.songs.map((song, i) => {
                  console.log(i + 1, playlist.songs.length);
                  if (
                    playlist.songs.length === 1 ||
                    i + 1 === playlist.songs.length
                  )
                    return song.name;
                  else return song.name + ', ';
                })}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Playlist;
