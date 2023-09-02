import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { usePocketData } from '@/api/usePocketData';
import { getPbImageURL } from '@/utils/getPbImageURL';
import { useQuery } from '@tanstack/react-query';
import Spinner from '@/components/Spinner';
import Button from '@/components/Button';
import Review from '@/components/Review';
import useStorage from '@/hook/useStorage';

function Drama() {
  const { id } = useParams();
  const { getIdData: getDramaId } = usePocketData('drama');
  const { getListData: getReviewList, deleteData } = usePocketData('review');
  const { storageData } = useStorage('pocketbase_auth');
  const {
    isLoading: isDramaLoading,
    isError: isDramaError,
    data: dramaData,
  } = useQuery(['drama', id], () => getDramaId(id));

  const userId = storageData?.model?.username;

  const {
    isLoading: isReviewLoading,
    isError: isReviewError,
    data: reviewList,
  } = useQuery(['review'], getReviewList);

  const handleBack = () => {
    window.history.back();
  };

  const handleDelete = async (review) => {
    if (userId === review.username) {
      await deleteData(review.id);
      alert('삭제되었습니다.');
    } else {
      alert('권한이 없습니다.');
    }
  };

  if (isDramaLoading || isReviewLoading) return <Spinner />;

  if (isDramaError || isReviewError) return <div>알 수 없는 서버의 에러가 발생했습니다.</div>;

  const reviews = reviewList.filter((review) => review.title === dramaData.title);

  return (
    <section className="relative mx-auto flex max-w-2xl flex-col items-center gap-4 px-5 pt-1">
      <Helmet>
        <title>{dramaData.title}</title>
      </Helmet>
      <h2 className="sr-only">드라마 페이지</h2>
      <div className="sticky top-0 z-10 flex w-full justify-between bg-primary">
        <Button onClick={handleBack} className={'p-2'}>
          <img src="/back.svg" alt="뒤로가기" />
        </Button>
      </div>
      <figure>
        <img src={getPbImageURL(dramaData, 'img')} alt={dramaData.title} className="h-80" />
        <figcaption className="pt-4 text-center text-lg font-semibold">
          {dramaData.title}
        </figcaption>
      </figure>
      <div className="max-w-xl">
        <p className="line-clamp-3 text-ellipsis">{dramaData.desc}</p>
      </div>
      <div className="flex gap-3">
        <Button className="h-12 w-auto rounded-lg bg-secondary p-3 font-semibold hover:bg-hoverColor">
          좋아요
        </Button>
        <Button className="h-12 w-auto rounded-lg bg-secondary p-3 font-semibold hover:bg-rose-500">
          싫어요
        </Button>
      </div>
      <Review title={dramaData.title} reviewData={reviews} handleDelete={handleDelete} />
    </section>
  );
}

export default Drama;
