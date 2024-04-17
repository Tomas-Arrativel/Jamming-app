import { useState } from 'react';
import style from './App.module.css';
import Searchbar from './components/Searchbar/Searchbar';
import SearchResults from './components/SearchResults/SearchResults';
import Tracklist from './components/Tracklist/Tracklist';
import Playlist from './components/Playlist/Playlist';

export const data = [
  {
    name: 'Flaca',
    artist: 'Andres Calamaro',
    album: 'Alta suciedad',
    id: 1,
  },
  {
    name: 'Loco',
    artist: 'Andres Calamaro',
    album: 'Alta suciedad',
    id: 2,
  },
  {
    name: 'Tan solo',
    artist: 'Los Piojos',
    album: 'Chac tu chac',
    id: 3,
  },
  {
    name: 'Mirenla',
    artist: 'Ciro y los persas',
    album: '27',
    id: 4,
  },
  {
    name: 'Bicho de ciudad',
    artist: 'Los Piojos',
    album: 'Civilización',
    id: 5,
  },
  {
    name: 'ASTROS',
    artist: 'Ciro y Los Persas',
    album: '27',
    id: 6,
  },
  {
    name: 'A Las Nueve',
    artist: 'No Te Va Gustar',
    album: 'El Calor Del Pleno Invierno',
    id: 7,
  },
];

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [addedSongs, setAddedSongs] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  return (
    <>
      <header className={style['header']}>
        <h1 className={style['header__title']}>
          Ja<span>mmm</span>ing
        </h1>
      </header>
      <main className={style['main']}>
        <Searchbar setSearchResults={setSearchResults} />
        <div className={style['main__container']}>
          <SearchResults
            searchResults={searchResults}
            setAddedSongs={setAddedSongs}
          />
          <Tracklist
            addedSongs={addedSongs}
            setAddedSongs={setAddedSongs}
            setPlaylists={setPlaylists}
          />
        </div>
        <Playlist playlists={playlists} />
      </main>
      <footer className={style['footer']}>
        <p>Copyright 2024 Tomás Arrativel</p>
      </footer>
    </>
  );
}

export default App;
