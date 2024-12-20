import { getGifs } from '../../src/helpers/GetGifByCategory';

describe('Pruebas en el helper GetGifByCategory', () => {
  test('debe devolver un array de gifs ', async () => {
    const gifs = await getGifs('Pokemon');
    //console.log(gifs);
    expect(gifs).toBeTruthy();
    expect(gifs.length).toBeGreaterThan(0);

    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
