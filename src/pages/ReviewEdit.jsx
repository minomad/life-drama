import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { usePocketData } from '@/api/usePocketData';
import { useParams } from 'react-router-dom';
import TextArea from '@/components/TextArea';
import Button from '@/components/Button';
import Form from '@/components/Form';
import useStorage from '@/hook/useStorage';

function ReviewEdit() {
  // const { updateData } = usePocketData('users');
  const { createData } = usePocketData('review');
  const { storageData } = useStorage('pocketbase_auth');
  const username = storageData?.model?.username || '익명';
  const nickName = storageData?.model?.nickName || '익명';
  const { id: title } = useParams();
  const reviewRef = useRef(null);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const reviewText = reviewRef.current.value;

    if (!reviewText || reviewText.trim() === '') {
      alert('리뷰를 작성해주세요');
      return;
    }
    const reviewData = {
      username,
      nickName,
      title,
      reviewText,
    };

    try {
      if (confirm('리뷰를 등록하시겠습니까?')) {
        await createData(reviewData);
        //작성된 리뷰의 ID를 유저 ID의 relation(reviews)에 추가/삭제 성공
        // if (storageData?.model?.id) {
        //   const createdReview = await createData(reviewData);
        //   const reviewId = createdReview.id;
        //   await updateData(storageData?.model?.id, {
        //     'reviews+': reviewId,
        //   });
        // }
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
      <Helmet>
        <title>리뷰 작성</title>
      </Helmet>
      <Form addStyle="pt-28" onSubmit={handleReviewSubmit}>
        <h2 className="pt-text-center py-5 text-xl font-black">리뷰 작성하기</h2>
        <label htmlFor="review" className="sr-only">
          리뷰 내용
        </label>
        <TextArea
          textareaRef={reviewRef}
          id="review"
          placeholder="작품에 대한 감상을 짧게 남겨주세요."
        />
        <div className="flex gap-5 pt-5">
          <Button
            type="submit"
            className="h-12 w-auto rounded-lg bg-secondary p-3 font-semibold hover:bg-hoverColor"
          >
            리뷰 등록
          </Button>
          <Button
            className="h-12 w-auto rounded-lg bg-secondary p-3 font-semibold hover:bg-rose-500"
            onClick={handleReviewCancel}
          >
            취소하기
          </Button>
        </div>
      </Form>
    </section>
  );
}

export default ReviewEdit;
