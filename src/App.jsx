import style from './App.module.css';
import Searchbar from './components/Searchbar/Searchbar';
import SearchResults from './components/SearchResults/SearchResults';
import Tracklist from './components/Tracklist/Tracklist';

function App() {
  return (
    <>
      <header className={style['header']}>
        <h1 className={style['header__title']}>
          Ja<span>mmm</span>ing
        </h1>
      </header>
      <main className={style['main']}>
        <Searchbar />
        <div className={style['main__container']}>
          <SearchResults />
          <Tracklist />
        </div>
      </main>
      <footer className={style['footer']}>
        <p>Copyright 2024 Tomás Arrativel</p>
      </footer>
    </>
  );
}

export default App;
