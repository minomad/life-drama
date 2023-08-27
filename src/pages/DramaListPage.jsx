import { useLayoutEffect, useState } from 'react';
import { usePocketData } from '@/api/usePocketData';
import { Helmet } from 'react-helmet-async';
import Spinner from '@/components/Spinner';
import Drama from '@/components/Drama';
import Category from '@/components/Category';

function DramaListPage() {
  const { data, status, getList } = usePocketData({ collection: 'drama' });
  const [selectedGenre, setSelectedGenre] = useState('전체');

  useLayoutEffect(() => {
    getList();
  }, []);

  if (status === 'loading') {
    return <Spinner />;
  }

  if (status === 'error') {
    return console.log('에러');
  }

  if (status === 'success') {
    return (
      <section className="px-5">
        <Helmet>
          <title>드라마 리스트</title>
        </Helmet>
        <h2 className="py-5 text-center text-xl font-black">인생 드라마</h2>
        <Category selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
        <Drama data={data} selectedGenre={selectedGenre} />
      </section>
    );
  }
}
export default DramaListPage;
