import { useNavigate } from 'react-router-dom';
import { arrayOf, shape, string } from 'prop-types';
import Button from '@/components/Button';
import useStorage from '@/hook/useStorage';

function Review({ id, reviewData }) {
  const { storageData } = useStorage('pocketbase_auth');
  const navigate = useNavigate();

  const handleReview = () => {
    if (!storageData) {
      alert('로그인 시 가능합니다');
      return;
    }
    navigate(`/review/${id}`);
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
  id: string,
  reviewData: arrayOf(
    shape({
      id: string,
      reviewText: string,
    })
  ),
};
export default Review;
