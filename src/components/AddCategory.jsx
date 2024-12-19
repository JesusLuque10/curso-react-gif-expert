import { useState } from 'react';

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
    <form onSubmit={OnSubmit}>
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
