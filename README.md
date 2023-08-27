# 과제-03

> 꼭 봐야할 인생 드라마를 추천하고 리뷰를 쓰는 사이트

### URL - [life-drama.vercel.app](https://life-drama.vercel.app)

<br/>

### 구성

홈 - 드라마(리뷰-작성) - 글쓰기 - 마이페이지

<br/>

## 기능

- 로그인 / 회원가입
- 글쓰기 (드라마 추천 글)
- 드라마 리스트 렌더링
- 선택한 드라마의 리뷰 작성

## UI

### 글쓰기

## <img src="https://github.com/minomad/life-drama/assets/131448929/a4c560a3-1f55-454e-b212-234045316ec0" width="300px" />

### 리뷰 작성

<img src="https://github.com/minomad/life-drama/assets/131448929/eccb97ef-530f-4e0c-b127-78e111b637b2" width="300px" />

---

## 코드

### usePocketData.js (api)

```jsx
import { useState } from 'react';
import { number, oneOfType, string } from 'prop-types';
import pb from './pocketbase';

export function usePocketData({ collection }) {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('pending');

  async function getList() {
    setStatus('loading');
    try {
      const responseList = await pb.collection(collection).getFullList({ sort: '-created' });
      setData(responseList);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }

  async function getIdData(id) {
    setStatus('loading');
    try {
      const responseId = await pb.collection(collection).getOne(id);
      setData(responseId);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }

  async function createData(data) {
    setStatus('loading');
    try {
      const responseCreate = await pb.collection(collection).create(data);
      setData(responseCreate);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }

  async function userLogin(username, password) {
    setStatus('loading');
    try {
      const responseUser = await pb.collection('users').authWithPassword(username, password);
      setData(responseUser);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }

  return {
    data,
    status,
    getList,
    getIdData,
    createData,
    userLogin,
  };
}

usePocketData.propTypes = {
  collection: oneOfType([string, number]).isRequired,
};

```

포켓베이스의 데이터 요청을 커스텀 훅으로 만들었습니다.

### Review.jsx (components)

```jsx
import { Link } from 'react-router-dom';
import { arrayOf, shape, string } from 'prop-types';
import Button from '@/components/Button';

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
```

DramaPage.jsx에서 useParams로 가져온 드라마의 id값을 가진 ReviewEdit페이지로 이동합니다.

### ReviewEdit.jsx (pages)

```jsx
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>리뷰 작성</title>
      </Helmet>
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
```

선택한 드라마의 ID값을 reviewId로 reviewText와 함께 포켓베이스에 전송하고

DramaPage에서 드라마ID와 일치하는 reviewId의 reviewData를 Review컴포넌트에 전달해서 리스트 렌더링했습니다.

## 아쉬운 점

- toast 기능이 잘 안돼서 confirm으로 처리한 부분

- 코드 최적화가 필요한 것 같습니다.
- 학습이 많이 필요한 propTypes정의 (특히 ref 정의...)
- 기타 등등...
- 추가하지 못한 기능들 (나중에 추가할 예정?..)
- 로그인 인증 및 유효성검사
- 로그아웃 / 회원탈퇴
- 드라마,리뷰 수정/삭제
- 좋아요 / 싫어요
- 카카오로그인

그 외 부족한 부분들은 강의와 문서를 통해서 복습을 해야 할 것 같습니다.
