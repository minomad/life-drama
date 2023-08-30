import { memo } from 'react';
import Navigation from './Navigation';


function Header() {
  return (
    <header>
      <h1 className="sr-only">메뉴</h1>
      <Navigation />
    </header>
  );
}
export default memo(Header);
