import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl">
        <Outlet />
      </main>
    </>
  );
}
export default Layout;
