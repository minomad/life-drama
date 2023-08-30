import { memo } from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="fixed bottom-0 z-50 w-full bg-primary py-3 text-center font-semibold text-white">
      <ul className="mx-auto flex max-w-3xl">
        <li className="flex flex-1 flex-col items-center">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'font-semibold text-blue-500' : '')}
          >
            <img src="/home.svg" alt="홈" />홈
          </NavLink>
        </li>
        <li className="flex flex-1 flex-col items-center">
          <NavLink
            to="/dramalist"
            className={({ isActive }) => (isActive ? 'font-semibold text-blue-500' : '')}
          >
            <img src="/drama.svg" alt="드라마" className="px-1" />
            드라마
          </NavLink>
        </li>
        <li className="flex flex-1 flex-col items-center">
          <NavLink
            to="/write"
            className={({ isActive }) => (isActive ? 'font-semibold text-blue-500' : '')}
          >
            <img src="/pencil.svg" alt="글쓰기" className="px-2" />
            글쓰기
          </NavLink>
        </li>
        <li className="flex flex-1 flex-col items-center">
          <NavLink
            to="/user"
            className={({ isActive }) => (isActive ? 'font-semibold text-blue-500' : '')}
          >
            <img src="/user.svg" alt="유저" />
            유저
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default memo(Navigation);
