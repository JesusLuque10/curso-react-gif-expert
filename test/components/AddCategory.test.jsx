import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Test del componente <AddCategory/>>', () => {
  const inputValue = 'Saitama';

  test('Debe cambiar el vvalor de la caja de texto', () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox');
    screen.debug();
    fireEvent.input(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
  });

  test('Debe llamar onNewCategory si el imput tiene un valor', () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    //comprobamos que el onsubmit se llame
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    //si se hace el onSubmit se resetea el input, lo comprobamos
    expect(input.value).toBe('');

    //comprobamos si llama a la funcion de dentro del onsubmit
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('No debe de llamar el onNewCategory si el input esta vacio', () => {
    const onNewCategory = jest.fn();
    const notValidInputValue = 'a';

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    //comprobamos que el onsubmit se llame
    fireEvent.input(input, { target: { value: notValidInputValue } });
    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
