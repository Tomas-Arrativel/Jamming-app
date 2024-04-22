import { useState } from 'react';
import style from './App.module.css';
import Searchbar from './components/Searchbar/Searchbar';
import SearchResults from './components/SearchResults/SearchResults';
import Tracklist from './components/Tracklist/Tracklist';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [addedSongs, setAddedSongs] = useState([]);

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
          <Tracklist addedSongs={addedSongs} setAddedSongs={setAddedSongs} />
        </div>
      </main>
      <footer className={style['footer']}>
        <p>Copyright 2024 Tomás Arrativel</p>
      </footer>
    </>
  );
}

export default App;
