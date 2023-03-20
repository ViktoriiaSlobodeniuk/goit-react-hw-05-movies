import { useState } from 'react';
import { toast } from 'react-toastify';

const SearchForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (inputValue.trim() === '') {
      toast('Сформуйте запит для пошуку');
      console.log('write search value');
      return;
    }
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
