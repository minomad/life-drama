import { AnimatePresence, motion } from 'framer-motion';
import { getPbImageURL } from '@/utils/getPbImageURL';
import { Link } from 'react-router-dom';

function Drama({ data }) {
  return (
    <div className="mb-40 grid min-h-screen grid-cols-4 gap-5 max-sm:grid-cols-3 max-[480px]:grid-cols-2 ">
      <AnimatePresence>
        {data.map((item) => (
          <motion.div
            key={item.id}
            className="overflow-hidden"
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
export default Drama;
