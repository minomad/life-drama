import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import { arrayOf, shape, string } from 'prop-types';

function Review({ id, reviewData }) {
  return (
    <article className="flex w-full max-w-xl flex-col gap-3 pb-[150px] pt-4 ">
      <div className="flex justify-between pb-2">
        <h2 className="pt-5 text-lg font-semibold">모든 리뷰</h2>
        <Link to={`/review/${id}`}>
          <Button>리뷰 작성하기</Button>
        </Link>
      </div>
      {reviewData.map((review) => (
        <div key={review.id} className="w-ful h-28 rounded-lg bg-secondary p-4">
          <p className="font-semibold">{review.nickName}</p>
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
      id: string.isRequired,
      nickName: string.isRequired,
      reviewText: string.isRequired,
    })
  ).isRequired,
};
export default Review;
