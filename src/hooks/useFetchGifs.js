import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/GetGifByCategory';

export const useFetchGifs = (category) => {
  const [images, setIamges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setIamges(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []); //si esta vacio significa que solo se va a ejecutar la primera vez que se construye el componenete

  return {
    images,
    isLoading,
  };
};
