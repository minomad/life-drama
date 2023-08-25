import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import Input from '@/components/Input';

function SignUp() {
  return (
    <section>
      <h2 className=" py-5 text-center text-xl font-black">회원가입</h2>
      <form className="flex flex-col items-center pb-[140px] gap-4">
        <Input label="아이디" type="text" id="id" placeholder="아이디 입력" />
        <Input label="닉네임" type="text" id="nickName" placeholder="닉네임 입력" />
        <Input label="비밀번호" type="password" id="password" placeholder="비밀번호 입력" />
        <Input label="비밀번호 확인" type="password" id="passwordConfirm" placeholder="비밀번호 확인" />
        <div className="justify-centerr flex gap-5 pt-8">
          <Button>회웝가입</Button>
          <Link to="/">
            <Button hoverColor="hover:bg-rose-500">취소하기</Button>
          </Link>
        </div>
      </form>
    </section>
  );
}
export default SignUp;
