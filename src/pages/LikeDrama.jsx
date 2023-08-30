import { usePocketData } from '@/api/usePocketData';
import { useQuery } from '@tanstack/react-query';

function LikeDrama() {
  const { getListData } = usePocketData('users');

  //유저 아이디랑 비교해서 일치하는 유저의 데이터를 가져오자
  //식별하기 좋게 타이틀을 이용하기

  const { data } = useQuery(['users'], () => getListData({ "expand": 'like'}));
  console.log(data);
  return (
    <div className="flex flex-col items-center">
      <div>
        <h3>좋아하는 드라마</h3>
        <ul>
          {data?.map((item, index) => (
            <li key={index}>
              <h4>{item.expand.like[0].title}</h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default LikeDrama;
