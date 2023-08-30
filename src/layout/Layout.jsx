import AnimatedOutlet from '@/components/AnimateOutlet';
import AnimateTransition from '@/components/AnimateTransition';
import Header from './Header';

function Layout() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl">
        <AnimateTransition>
          <AnimatedOutlet />
        </AnimateTransition>
      </main>
    </>
  );
}
export default Layout;
