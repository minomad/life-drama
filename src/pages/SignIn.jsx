import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { usePocketData } from '@/api/usePocketData';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Form from '@/components/Form';

function SignIn() {
  const { signIn } = usePocketData('users');
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const loginInfo = {
      username,
      password,
    };

    try {
      await signIn(loginInfo);
      alert('로그인 성공');
      window.history.back();
    } catch (error) {
      alert('로그인 실패 (아이디 / 비밀번호가 일치하는지 확인해주세요)');
      console.error(error);
    }
  };

  return (
    <section className="py-32">
      <Helmet>
        <title>로그인</title>
      </Helmet>
      <h2 className="pb-10 text-center text-xl font-black">로그인</h2>
      <Form onSubmit={handleSignIn}>
        <Input
          label="아이디"
          type="text"
          id="id"
          placeholder="아이디 입력"
          inputRef={usernameRef}
        />
        <Input
          label="비밀번호"
          type="password"
          id="password"
          placeholder="비밀번호 입력"
          inputRef={passwordRef}
        />
        <div className="justify-centerr flex gap-5 pt-5">
          <Button
            type="submit"
            className="h-12 w-auto rounded-lg bg-secondary p-3 font-semibold hover:bg-hoverColor"
          >
            로그인
          </Button>
          <Link to="/">
            <Button className="h-12 w-auto rounded-lg bg-secondary p-3 font-semibold hover:bg-rose-500">
              뒤로가기
            </Button>
          </Link>
        </div>
      </Form>
    </section>
  );
}
export default SignIn;
