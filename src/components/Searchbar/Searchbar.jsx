import { useState } from 'react';
import style from './Searchbar.module.css';

//get the tracks from the app component
import { data } from '../../App';

const Searchbar = ({ setSearchResults }) => {
  const [value, setValue] = useState('');

  const getResults = (search) => {
    setSearchResults([]);
    data.map((track) =>
      track.name.toLowerCase().includes(search.toLowerCase())
        ? setSearchResults((prevResults) => [...prevResults, track])
        : '',
    );
  };

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    getResults(value);
    setValue('');
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
