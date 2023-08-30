import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const UserPage = lazy(() => import('./pages/UserPage'));
const WritePage = lazy(() => import('./pages/WritePage'));
const DramaListPage = lazy(() => import('./pages/DramaListPage'));
const DramaPage = lazy(() => import('./pages/DramaPage'));
const SignUp = lazy(() => import('./pages/SignUp'));
const SignIn = lazy(() => import('./pages/SignIn'));
const ReviewEdit = lazy(() => import('./pages/ReviewEdit'));
const Likepage = lazy(() => import('./pages/Likepage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'signin', element: <SignIn /> },
      { path: 'signup', element: <SignUp /> },
      { path: 'dramalist', element: <DramaListPage /> },
      { path: 'drama/:id', element: <DramaPage /> },
      { path: 'write', element: <WritePage /> },
      { path: 'review/:id', element: <ReviewEdit /> },
      { path: 'user', element: <UserPage /> },
      { path: 'user/like', element: <Likepage /> },
    ],
  },
]);

export default router;
