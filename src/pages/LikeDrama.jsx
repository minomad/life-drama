import { usePocketData } from '@/api/usePocketData';
import { useQuery } from '@tanstack/react-query';

function LikeDrama() {
  const { getListData } = usePocketData('users');

  const { data } = useQuery(['users'], () => getListData({ expand: 'reviews' }));

  // 찜기능이나 장바구니만 expand로 구현
  // const { updateData } = usePocketData('users');
  // if (storageData?.model?.id) {
  //   const createdReview = await createData(reviewData);
  //   const reviewId = createdReview.id;
  //   await updateData(storageData?.model?.id, {
  //     'reviews+': reviewId,
  //   });
  // }

  return (
    <div className="flex flex-col items-center">
      <div>
        <h3>좋아하는 드라마</h3>
        <ul>
          {data?.map((item, index) => (
            <li key={index}>
              {item?.expand?.reviews?.map((review, titleIndex) => (
                <h4 key={titleIndex}>{review.title}</h4>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default LikeDrama;
