import { func, string } from 'prop-types';

function Category({ selectedGenre, setSelectedGenre }) {
  const genre = ['전체', '판타지', '스릴러', '멜로', '코미디', '드라마'];

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
  setSelectedGenre: func,
};
export default Category;
