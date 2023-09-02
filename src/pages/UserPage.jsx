import { Helmet } from 'react-helmet-async';
import { useNavigate, Link } from 'react-router-dom';
import Button from '@/components/Button';
import useStorage from '@/hook/useStorage';
import { usePocketData } from '@/api/usePocketData';

function UserPage() {
  const { deleteData, signOut } = usePocketData('users');
  const { storageData, remove } = useStorage('pocketbase_auth');

  const navigate = useNavigate();

  const handleLogout = () => {
    if (confirm('로그아웃 하시겠습니까?')) {
      signOut();
      navigate('/');
    }
  };

  const handleDelete = () => {
    if (confirm('회원탈퇴 하시겠습니까?')) {
      deleteData(storageData?.model?.id);
      remove();
      navigate('/');
    }
  };

  return (
    <section className="flex flex-col items-center gap-5 px-5">
      <Helmet>
        <title>마이페이지</title>
      </Helmet>

      {!storageData && <div className="pt-40 text-xl font-semibold">로그인이 필요합니다</div>}

      {storageData && (
        <>
          <h2 className="py-5 text-center text-xl font-black">마이페이지</h2>
          <p>{storageData.model.nickName}님 환영합니다.</p>
          <ul className="flex w-full max-w-lg flex-col gap-4 rounded-lg bg-secondary p-5">
            <li>작성한 글</li>
            <li className="border-y py-4">작성한 리뷰</li>
            <li>
              <Link to="/user/likedrama">관심 있는 드라마</Link>
            </li>
          </ul>

          <div className="flex gap-14 pt-5">
            <Button
              className="h-12 w-auto rounded-lg bg-secondary p-3 font-semibold hover:bg-hoverColor"
              onClick={handleLogout}
            >
              로그아웃
            </Button>
            <Button
              className="h-12 w-auto rounded-lg bg-secondary p-3 font-semibold hover:bg-rose-500"
              onClick={handleDelete}
            >
              회원탈퇴
            </Button>
          </div>
        </>
      )}
    </section>
  );
}

export default UserPage;
