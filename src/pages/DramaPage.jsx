import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePocketData } from '@/api/usePocketData';
import { getPbImageURL } from '@/utils/getPbImageURL';
import Spinner from '@/components/Spinner';
import Button from '@/components/Button';

function Drama() {
  const { id } = useParams();
  
  const {
    data: dramaData,
    status: dramaState,
    getIdData: getDramaId,
  } = usePocketData({ collection: 'drama' });

  const {
    data: reviewData,
    status: reviewState,
    getList: getReviewList,
  } = usePocketData({ collection: 'review' });

  useEffect(() => {
    getDramaId(id);
    getReviewList();
  }, []);

  const handleBack = () => {
    window.history.back();
  };

  const handleLikeClick = () => {};

  if (dramaState === 'loading' || reviewState === 'loading') {
    return <Spinner />;
  }

  if (dramaData) {
    const imgURL = getPbImageURL(dramaData);
    const reviews = reviewData.filter((review) => review.reviewId === id);
    return (
      <section className="relative flex flex-col items-center gap-4 px-5 pt-1">
        <h2 className="sr-only">드라마</h2>
        <figure className="">
          <img src={imgURL} alt={dramaData.title} className="h-80" />
          <figcaption className="pt-4 text-center text-lg font-semibold">
            {dramaData.title}
          </figcaption>
        </figure>
        <div className="max-w-xl">
          <p className="line-clamp-3 text-ellipsis">{dramaData.desc}</p>
        </div>
        <div className="flex gap-3">
          <Button onClick={handleLikeClick}>
            좋아요 <span>{dramaData.like}</span>
          </Button>
          <Button hoverColor="hover:bg-rose-500">
            싫어요 <span>{dramaData.dislike}</span>
          </Button>
        </div>
        <div className="absolute left-5 top-4">
          <button onClick={handleBack}>
            <img src="/back.svg" alt="뒤로가기" />
          </button>
        </div>

        {reviewState === 'success' && (
          <article className="flex w-full max-w-xl flex-col gap-3 pb-[150px] pt-4 ">
            <div className="flex justify-between pb-2">
              <h2 className="pt-5 text-lg font-semibold">모든 리뷰</h2>
              <Link to={`/review/${id}`}>
                <Button>리뷰 작성하기</Button>
              </Link>
            </div>
            {reviews.map((review) => (
              <div key={review.id} className="w-ful h-28 rounded-lg bg-secondary p-4">
                <p className="font-semibold">{review.nickName}</p>
                <p className="line-clamp-2 text-ellipsis pt-2">{review.reviewText}</p>
              </div>
            ))}
          </article>
        )}
      </section>
    );
  }
}

export default Drama;
