import { usePocketData } from '@/api/usePocketData';
import { useQuery } from '@tanstack/react-query';

function LikeDrama() {
  const { getListData } = usePocketData('users');

  const { data } = useQuery(['users'], () => getListData({ "expand": 'reviews'}));

  console.log(data);
  return (
    <div className="flex flex-col items-center">
      <div>
        <h3>좋아하는 드라마</h3>
        <ul>
          {data?.map((item, index) => (
            <li key={index}>
              <h4>{item.expand.reviews[0].title}</h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default LikeDrama;
