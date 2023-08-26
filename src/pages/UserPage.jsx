import Button from '@/components/Button';
import { usePocketData } from '@/api/usePocketData';

function UserPage() {
  const { getIdData, deleteData } = usePocketData({ collection: 'users' });

  return (
    <section className="flex flex-col items-center gap-5 px-5">
      <h2 className=" py-5 text-center text-xl font-black">마이페이지</h2>
      <p>nickName님 환영합니다.</p>
      <ul className=" flex w-full max-w-lg flex-col gap-4 rounded-lg bg-secondary p-5">
        <li>작성한 글</li>
        <li className='border-y py-4'>작성한 리뷰</li>
        <li>관심 있는 드라마</li>
      </ul>
      <div className="flex gap-14 pt-5">
        <Button>로그아웃</Button>
        <Button hoverColor="hover:bg-rose-500">회원탈퇴</Button>
      </div>
    </section>
  );
}
export default UserPage;
