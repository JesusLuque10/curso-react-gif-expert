export const getGifs = async (category) => {
  const apiKey = 'dWVpwqSX7AgG8KYuFVjx6t9i88r4o8r6';
  const url = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const result = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return result;
};
