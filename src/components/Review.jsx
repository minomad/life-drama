import { useNavigate } from 'react-router-dom';
import { arrayOf, shape, string } from 'prop-types';
import Button from '@/components/Button';
import useStorage from '@/hook/useStorage';

function Review({ title, reviewData }) {
  const { storageData } = useStorage('pocketbase_auth');
  const navigate = useNavigate();

  const handleReview = () => {
    if (!storageData) {
      if(confirm('로그인이 필요합니다. 로그인 하시겠습니까?'))
      navigate('/')
      return;
    }
    navigate(`/review/${title}`);
  };

  return (
    <article className="flex w-full max-w-xl flex-col gap-3 pb-[150px] pt-4 ">
      <div className="flex justify-between pb-2">
        <h2 className="pt-5 text-lg font-semibold">모든 리뷰</h2>
        <Button onClick={handleReview}>리뷰 작성하기</Button>
      </div>
      {reviewData.map((review) => (
        <div key={review.id} className="w-ful h-28 rounded-lg bg-secondary p-4">
          <p className="font-semibold">익명</p>
          <p className="line-clamp-2 text-ellipsis pt-2 ">{review.reviewText}</p>
        </div>
      ))}
    </article>
  );
}

Review.propTypes = {
  title: string,
  reviewData: arrayOf(
    shape({
      id: string,
      reviewText: string,
    })
  ),
};
export default Review;
