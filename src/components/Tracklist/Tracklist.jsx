import { useState } from 'react';
import Track from '../Track/Track';
import styles from './Tracklist.module.css';

const Tracklist = ({ addedSongs, setAddedSongs, setPlaylist }) => {
  const [playlistName, setPlaylistName] = useState('');
  const [error, setError] = useState(false);

  const handleOnChange = (e) => {
    setPlaylistName(e.target.value);
  };

  let uris = [];

  const handleCreatePlaylist = () => {
    if (playlistName.trim() === '' || addedSongs.length < 1) {
      setError(true);
      return;
    }

    setPlaylist({ name: playlistName, songs: addedSongs });

    addedSongs.map((song) => uris.push(song.uri));
    console.log(uris);

    setAddedSongs([]);
    setPlaylistName('');
    setError(false);
  };

  return (
    <div className={styles['selected']}>
      <input
        type='text'
        value={playlistName}
        onChange={handleOnChange}
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
              inPlaylist={true}
              setAddedSongs={setAddedSongs}
            />
          ))
        ) : (
          <p>Add some songs by clicking the + button</p>
        )}
        {error ? (
          <p className={styles['error']}>
            Pass at least 1 song and a name to your playlist
          </p>
        ) : (
          ''
        )}
      </div>
      <button className={styles['saveto__btn']} onClick={handleCreatePlaylist}>
        Save to Spotify
      </button>
    </div>
  );
};

export default Tracklist;
