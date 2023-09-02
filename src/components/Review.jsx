import { useNavigate } from 'react-router-dom';
import { arrayOf, func, shape, string } from 'prop-types';
import Button from '@/components/Button';

function Review({ title, reviewData, handleDelete }) {
  const navigate = useNavigate();

  const handleReview = () => {
    navigate(`/review/${title}`);
  };

  return (
    <article className="flex w-full max-w-xl flex-col gap-3 pb-[150px] pt-4 ">
      <div className="flex justify-between pb-2">
        <h2 className="pt-5 text-lg font-semibold">모든 리뷰</h2>
        <Button
          className="h-12 w-auto rounded-lg bg-secondary p-3 font-semibold hover:bg-hoverColor"
          onClick={handleReview}
        >
          리뷰 작성하기
        </Button>
      </div>
      {reviewData.map((review) => (
        <div key={review.id} className="relative h-32 w-full rounded-lg bg-secondary p-4">
          <p className="font-semibold">{review.nickName}</p>
          <p className="line-clamp-2 text-ellipsis pt-4 ">{review.reviewText}</p>
          <Button
            type="submit"
            className="absolute right-2 top-2 w-auto rounded-lg bg-primary p-2 font-semibold hover:bg-rose-500"
            onClick={() => handleDelete(review)}
          >
            삭제하기
          </Button>
        </div>
      ))}
    </article>
  );
}

Review.propTypes = {
  title: string,
  handleDelete: func,
  reviewData: arrayOf(
    shape({
      id: string,
      reviewText: string,
    })
  ),
};
export default Review;
