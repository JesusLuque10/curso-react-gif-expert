import { fireEvent, render, screen } from '@testing-library/react';
import GifExpertApp from '../src/GifExpertApp';

describe('Pruebas sobre el componente <GifExpertApp/>', () => {
  test('Debe añadir la categoria si no existe ', () => {
    render(<GifExpertApp />);
    //screen.debug();

    const inputValue = 'Pokemon';

    const input = screen.getByRole('textbox');
    //console.log(input);
    fireEvent.input(input, { target: { value: inputValue } });
    //console.log(input);
    //screen.debug();

    const form = screen.getByRole('form');
    fireEvent.submit(form);
    //screen.debug();

    expect(screen.getByText(inputValue)).toBeTruthy();
  });

  test('No debe de incluir la categoria si ya existe ', () => {
    render(<GifExpertApp />);

    const inputValue = 'One Punch';

    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: inputValue } });
    //screen.debug();

    const form = screen.getByRole('form');
    fireEvent.submit(form);
    //screen.debug();

    expect(screen.getAllByText(inputValue).length).toBe(1);
  });
});
