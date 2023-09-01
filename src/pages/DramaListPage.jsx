import { useState } from 'react';
import { usePocketData } from '@/api/usePocketData';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import Spinner from '@/components/Spinner';
import Drama from '@/components/Drama';
import Category from '@/components/Category';

function DramaListPage() {
  const [selectedGenre, setSelectedGenre] = useState('전체');

  const { getListData } = usePocketData('drama');

  const {
    isLoading: isDramaLoading,
    isError: isDramaError,
    data: dramaList,
  } = useQuery(['drama'], () => getListData());

  console.log(dramaList);

  const genre = ['전체', '판타지', '스릴러', '멜로', '코미디', '드라마'];
  // const addIcon = '/back.svg';

  if (isDramaLoading) {
    return <Spinner />;
  }

  if (isDramaError) {
    return <div>서버 에러 발생</div>;
  }

  return (
    <section className="px-5">
      <Helmet>
        <title>드라마 리스트</title>
      </Helmet>
      <h2 className="py-5 text-center text-xl font-black">인생 드라마</h2>
      <Category genre={genre} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
      <Drama data={dramaList} selectedGenre={selectedGenre} />
    </section>
  );
}

export default DramaListPage;
