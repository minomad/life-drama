import { useRef } from 'react';
import { usePocketData } from '@/api/usePocketData';
import { useParams } from 'react-router-dom';
import Button from '@/components/Button';

function ReviewEdit() {
  const { createData } = usePocketData({ collection: 'review' });
  const { id: reviewId } = useParams();
  const reviewRef = useRef(null);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const reviewText = reviewRef.current.value;

    if (!reviewText || reviewText.trim() === '') {
      alert('리뷰를 작성해주세요');
      return;
    }

    const reviewData = {
      nickName: '익명',
      reviewId,
      reviewText,
    };

    try {
      await createData(reviewData);
      if (confirm('리뷰를 등록하시겠습니까?')) {
        window.history.back();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleReviewCancel = () => {
    window.history.back();
  };

  return (
    <section>
      <form
        className="absolute left-1/2 top-1/3 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-4 "
        onSubmit={handleReviewSubmit}
      >
        <h2 className="py-5 text-center text-xl font-black">리뷰 작성하기</h2>
        <label htmlFor="review" className="sr-only">
          리뷰 내용
        </label>
        <textarea
          ref={reviewRef}
          name="review"
          id="review"
          maxLength="400"
          className="h-40 w-80 resize-none p-2 text-black"
          placeholder="작품에 대한 감상을 짧게 남겨주세요."
        ></textarea>
        <div className="flex gap-5 pt-5">
          <Button type="submit">리뷰 등록</Button>
          <Button hoverColor="hover:bg-rose-500" onClick={handleReviewCancel}>
            취소하기
          </Button>
        </div>
      </form>
    </section>
  );
}

export default ReviewEdit;
