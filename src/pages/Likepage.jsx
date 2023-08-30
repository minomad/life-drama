import { usePocketData } from '@/api/usePocketData';
import { useQuery } from '@tanstack/react-query';

function Likepage() {
  const { getListData } = usePocketData('users');

  // const options = {
  //   "expand": 'like',
  // };

  //유저 아이디랑 비교해서 일치하는 유저의 데이터를 가져오자
  //expadn의 데이터는 어떻게 가져올까

  const { data } = useQuery(['users'], () => getListData({ "expand": 'review'}));
  console.log(data);
  return (
    <div className="flex flex-col items-center">
      <div>
        <h3>좋아하는 드라마</h3>
        <ul>
          {data?.map((item, index) => (
            <li key={index}>
              <h4>{item.review}</h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Likepage;
