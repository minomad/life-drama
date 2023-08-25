import { useLayoutEffect } from 'react';
import { usePocketData } from '@/api/usePocketData';
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
    return error;
  }

  if (status === 'success') {
    return (
      <section className="px-5">
        <h2 className="py-5 text-center text-xl font-black">인생 드라마</h2>
        <Drama data={data} />
      </section>
    );
  }
}
export default DramaListPage;
