import { Link } from 'react-router-dom';
import Button from '@/components/Button';

function SignUp() {
  return (
    <section>
      <h2 className=" py-5 text-center text-xl font-black">회원가입</h2>
      <form className="flex flex-col items-center pb-[140px]">
        <div className="flex flex-col py-2">
          <label htmlFor="id">아이디</label>
          <input
            type="text"
            name="id"
            id="id"
            placeholder="아이디 입력"
            className="my-1 h-12 w-80 rounded-md border border-borderColor bg-secondary p-4"
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="nickName">닉네임</label>
          <input
            type="text"
            name="nickName"
            id="nickName"
            placeholder="닉네임 입력"
            className="my-1 h-12 w-80 rounded-md border border-borderColor bg-secondary p-4"
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="비밀번호 입력"
            className="my-1 h-12 w-80 rounded-md border border-borderColor bg-secondary p-4"
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="passwordConfirm">비밀번호 확인</label>
          <input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            placeholder="비밀번호 확인"
            className="my-1 h-12 w-80 rounded-md border border-borderColor bg-secondary p-4"
          />
        </div>
        <div className="justify-centerr flex gap-5 pt-12">
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
