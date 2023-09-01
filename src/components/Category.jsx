import { func, string, arrayOf } from 'prop-types';

function Category({ genre, selectedGenre, setSelectedGenre, icon  }) {
  return (
    <div className="sticky top-0 z-10 flex justify-center bg-primary py-2">
      <ul className="flex cursor-pointer flex-nowrap overflow-x-auto whitespace-nowrap">
        {genre.map((item, index) => {
          const isActive = selectedGenre === item;
          return (
            <li
              key={index}
              className={`mr-2 rounded bg-hoverColor px-3 py-2 hover:bg-hoverColor ${
                isActive ? 'font-semibold' : 'bg-secondary'
              }`}
              onClick={() => {
                setSelectedGenre(item);
                window.scrollTo({ top: 0 });
              }}
            >
              {icon && <img src={icon} alt={item} />}
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Category.propTypes = {
  selectedGenre: string,
  genre: arrayOf(string),
  setSelectedGenre: func,
};
export default Category;
