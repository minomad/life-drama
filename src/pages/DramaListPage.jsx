import { useLayoutEffect } from 'react';
import { usePocketData } from '@/api/usePocketData';
import { Helmet } from 'react-helmet-async';
import Spinner from '@/components/Spinner';
import Drama from '@/components/Drama';

function DramaListPage() {
  const { data, status, getList } = usePocketData({ collection: 'drama' });

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
        <Drama data={data} />
      </section>
    );
  }
}
export default DramaListPage;
