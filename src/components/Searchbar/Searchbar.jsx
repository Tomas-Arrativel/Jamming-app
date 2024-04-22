import { useState } from 'react';
import style from './Searchbar.module.css';

//get the tracks from the Spotify api
import { Spotify } from '../../util/Spotify';

const Searchbar = ({ setSearchResults }) => {
  const [value, setValue] = useState('');

  const getResults = async (search) => {
    setSearchResults([]);
    await Spotify.search(search).then((results) => setSearchResults(results));
  };

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value !== '') {
      getResults(value);
      setValue('');
    } else return;
  };

  return (
    <form onSubmit={handleSubmit} className={style['searchForm']}>
      <input
        type='text'
        className={style['searchForm__input']}
        value={value}
        onChange={handleChange}
      />
      <input
        type='submit'
        value='Search'
        className={style['searchForm__btn']}
      />
    </form>
  );
};

export default Searchbar;
