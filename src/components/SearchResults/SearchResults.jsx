import styles from './SearchResults.module.css';
import Track from '../Track/Track';

const SearchResults = ({ searchResults }) => {
  return (
    <div className={styles['results']}>
      <h2>Results</h2>
      <div className={styles['results__container']}>
        {searchResults.length > 0 ? (
          searchResults.map((result) => (
            <Track
              title={result.name}
              artist={result.artist}
              album={result.album}
              key={result.id}
            />
          ))
        ) : (
          <p className={styles['results__container-noSearch']}>
            Search something to get some results
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
