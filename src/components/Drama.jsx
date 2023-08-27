import { AnimatePresence, motion } from 'framer-motion';
import { getPbImageURL } from '@/utils/getPbImageURL';
import { array, string } from 'prop-types';
import { Link } from 'react-router-dom';

function Drama({ data, selectedGenre }) {
  const filterData = selectedGenre === '전체' ? data : data.filter((drama) => drama.genre === selectedGenre);

  return (
    <div className="mb-40 grid min-h-screen grid-cols-4 grid-rows-4 gap-4 pt-4 max-sm:grid-cols-3 max-sm:grid-rows-3 max-[480px]:grid-cols-2 ">
      <AnimatePresence>
        {filterData.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Link to={`/drama/${item.id}`}>
              <figure className="shadow-lg">
                <img src={getPbImageURL(item, 'img')} alt={item.title} className="rounded-t-md hover:scale-105" />
                <figcaption className="rounded-b-md bg-secondary py-2 text-center font-semibold">
                  {item.title}
                </figcaption>
              </figure>
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

Drama.propTypes = {
  data: array.isRequired,
  selectedGenre: string.isRequired,
};
export default Drama;
