import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePocketData } from '@/api/usePocketData';
import { getPbImageURL } from '@/utils/getPbImageURL';
import Spinner from '@/components/Spinner';
import Button from '@/components/Button';
import Review from '@/components/Review';

function Drama() {
  const { id } = useParams();
  const { data: dramaData, status: dramaState, getIdData: getDramaId } = usePocketData({ collection: 'drama' });
  const { data: reviewData, status: reviewState, getList: getReviewList } = usePocketData({ collection: 'review' });

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
          <figcaption className="pt-4 text-center text-lg font-semibold">{dramaData.title}</figcaption>
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
        <Review id={id} reviewData={reviews} />
      </section>
    );
  }
}

export default Drama;
