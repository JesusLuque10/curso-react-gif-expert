import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas del componente <GifGrid/>', () => {
  var category = 'One Punch';

  test('Debe mostrar el loading', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    //screen.debug();
    expect(screen.getByText('...Cargando'));
    expect(screen.getByText(category));
  });

  test('Deben cargarse las imagenes al hacer el useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'http:ofgofign',
      },
      {
        id: '54654',
        title: 'Pokemon',
        url: 'http:ofgofign',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    //screen.debug();
    expect(screen.getAllByRole('img').length).toBe(2);
  });

  test('Debe hacer match con el Snapshot', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'http:ofgofign',
      },
      {
        id: '54654',
        title: 'Pokemon',
        url: 'http:ofgofign',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    const container = render(<GifGrid category={category} />);
    expect(container).toMatchSnapshot();
  });
});
