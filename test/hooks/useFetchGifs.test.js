//Los hooks se evaluan segun lo que retornan

import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {
  test('Debe regresar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs('Pokemon'));
    //console.log(result);
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('Debe retornar un array de imagenes e isLoading en false', async () => {
    const { result } = renderHook(() => useFetchGifs('Pokemon'));

    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0) //tiene un timeout.. espera a que suceda o hasta que se cumpla el timeout
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
