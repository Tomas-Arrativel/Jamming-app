import { useState } from 'react';
import style from './Searchbar.module.css';

const Searchbar = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
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
