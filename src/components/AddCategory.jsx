import { useState } from 'react';
import Proptypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const OnInputChange = ({ target }) => {
    //el event esta desestructurado y sacamos el target
    setInputValue(target.value);
  };

  const OnSubmit = (event) => {
    event.preventDefault(); //para que no recargue
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={OnSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        //onChange={(event) => OnInputChange(event)}
        onChange={OnInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: Proptypes.func.isRequired,
};
