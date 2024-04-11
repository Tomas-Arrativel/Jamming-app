import styles from './SearchResults.module.css';
import Track from '../Track/Track';

const SearchResults = () => {
  return (
    <div className={styles['results']}>
      <h2>Results</h2>
      <div className={styles['results__container']}>
        <Track title='Given up' artist='Linkin Park' album='Nose xd' />
        <Track
          title='Nothing Else Matters'
          artist='Metallica'
          album='Nose xd'
        />
        <Track title='Thunderstruck' artist='AcDc' album='Nose xd' />
      </div>
    </div>
  );
};

export default SearchResults;
