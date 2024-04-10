import style from './App.module.css';
import Searchbar from './components/Searchbar/Searchbar';
import SearchResults from './components/SearchResults/SearchResults';
import Tracklist from './components/Tracklist/Tracklist';

function App() {
  return (
    <>
      <header>
        <h1>
          Ja<span>mmm</span>ing
        </h1>
      </header>
      <main>
        <Searchbar />
        <div>
          <SearchResults />
          <Tracklist />
        </div>
      </main>
      <footer>
        <p>Copyright 2024 Tomás Arrativel</p>
      </footer>
    </>
  );
}

export default App;
