import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Form from '@/components/Form';

function SignUp() {
  return (
    <section>
      <h2 className=" py-5 text-center text-xl font-black">회원가입</h2>
      <Form addStyle={'pb-[140px]'}>
        <Input label="아이디" type="text" id="id" placeholder="아이디 입력" />
        <Input label="닉네임" type="text" id="nickName" placeholder="닉네임 입력" />
        <Input label="비밀번호" type="password" id="password" placeholder="비밀번호 입력" />
        <Input label="비밀번호 확인" type="password" id="passwordConfirm" placeholder="비밀번호 확인" />
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
