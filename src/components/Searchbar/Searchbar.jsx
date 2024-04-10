import { useState } from 'react';
import styles from './Searchbar.module.css';
import SearchBtn from '../SearchBtn/SearchBtn';

const Searchbar = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={value} onChange={handleChange} />
      <input type='submit' value='Search' />
    </form>
  );
};

export default Searchbar;
