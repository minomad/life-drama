import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { usePocketData } from '@/api/usePocketData';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Form from '@/components/Form';

function SignUp() {
  const { createData } = usePocketData({ collection: 'users' });
  const idRef = useRef(null);
  const nickNameRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    const username = idRef.current.value;
    const nickName = nickNameRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirm = passwordConfirmRef.current.value;

    const userInfo = {
      username,
      nickName,
      password,
      passwordConfirm,
    };
    
    try {
      await createData(userInfo);
      alert('회원가입 성공');
      window.history.back();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h2 className=" py-5 text-center text-xl font-black">회원가입</h2>
      <Form onSubmit={handleRegister} addStyle={'pb-[140px]'}>
        <Input label="아이디" type="text" id="id" placeholder="아이디 입력" inputRef={idRef} />
        <Input label="닉네임" type="text" id="nickName" placeholder="닉네임 입력" inputRef={nickNameRef} />
        <Input label="비밀번호" type="password" id="password" placeholder="비밀번호 입력" inputRef={passwordRef} />
        <Input
          label="비밀번호 확인"
          type="password"
          id="passwordConfirm"
          placeholder="비밀번호 확인"
          inputRef={passwordConfirmRef}
        />
        <div className="justify-centerr flex gap-5 pt-8">
          <Button type={'submit'}>회웝가입</Button>
          <Link to="/">
            <Button hoverColor="hover:bg-rose-500">뒤로가기</Button>
          </Link>
        </div>
      </Form>
    </section>
  );
}
export default SignUp;
