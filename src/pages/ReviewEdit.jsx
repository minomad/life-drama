import { useRef } from 'react';
import { usePocketData } from '@/api/usePocketData';
import { useParams } from 'react-router-dom';
import TextArea from '@/components/TextArea';
import Button from '@/components/Button';
import Form from '@/components/Form';

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
      if (confirm('리뷰를 등록하시겠습니까?')) {
        await createData(reviewData);
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
      <Form
        addStyle={'absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 transform'}
        onSubmit={handleReviewSubmit}
      >
        <h2 className="py-5 text-center text-xl font-black">리뷰 작성하기</h2>
        <label htmlFor="review" className="sr-only">
          리뷰 내용
        </label>
        <TextArea textareaRef={reviewRef} id={'review'} placeholder={'작품에 대한 감상을 짧게 남겨주세요.'} />
        <div className="flex gap-5 pt-5">
          <Button type="submit">리뷰 등록</Button>
          <Button hoverColor="hover:bg-rose-500" onClick={handleReviewCancel}>
            취소하기
          </Button>
        </div>
      </Form>
    </section>
  );
}

export default ReviewEdit;
