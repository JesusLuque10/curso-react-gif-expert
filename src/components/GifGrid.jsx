import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>...Cargando</h2>}
      <div className="card-grid">
        {
          //console.log(images)
          images.map((image) => (
            <GifItem key={image.id} {...image}></GifItem> //esparcimos todas las propiedades de la imagen con ...image, asi podemos consumirlas en el comp
          ))
        }
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
