import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@/components/Button';
import Input from '@/components/Input';
import pb from '@/api/pocketbase';

function SignIn() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    try {
      await pb.collection('users').authWithPassword(username, password);
      alert('로그인 성공');
      navigate('/');
    } catch (error) {
      alert('로그인 실패 (아이디 / 비밀번호가 일치하는지 확인해주세요)');
      console.error(error);
    }
  };

  return (
    <section className="absolute left-1/2 top-1/3 flex -translate-x-1/2 -translate-y-1/2 transform flex-col">
      <h2 className="pb-10 text-center text-xl font-black">로그인</h2>
      <form onSubmit={handleSignIn} className="flex flex-col items-center gap-5">
        <Input label="아이디" type="text" id="id" placeholder="아이디 입력" inputRef={usernameRef} />
        <Input label="비밀번호" type="password" id="password" placeholder="비밀번호 입력" inputRef={passwordRef} />
        <div className="justify-centerr flex gap-5 pt-5">
          <Button type="submit">로그인</Button>
          <Link to="/">
            <Button hoverColor="hover:bg-rose-500">뒤로가기</Button>
          </Link>
        </div>
      </form>
    </section>
  );
}
export default SignIn;
