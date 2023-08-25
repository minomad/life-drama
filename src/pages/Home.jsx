import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="bg-opacity- relative min-h-screen bg-hero bg-cover">
      <h1 className="sr-only">Home</h1>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary"></div>
      <div className="absolute left-1/2 top-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 transform flex-col">
        <div className="pb-20 text-center text-2xl font-black text-white">
          인생 드라마 추천 사이트
        </div>
        <div className="pb-3">
          <button type="submit" className="w-80 rounded-md bg-kakaoColor p-3 font-black text-black">
            카카오로 시작하기
          </button>
        </div>
        <div className="flex justify-center gap-5 font-black text-white">
          <Link to="/signin" className="border-r px-5 hover:text-hoverColor">
            로그인
          </Link>
          <Link to="/signup" className=" hover:text-hoverColor">
            회원가입
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Home;
