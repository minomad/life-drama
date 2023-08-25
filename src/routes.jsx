import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layout/Layout';
import UserPage from './pages/UserPage';
import WritePage from './pages/WritePage';
import DramaListPage from './pages/DramaListPage';
import DramaPage from './pages/DramaPage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ReviewEdit from './pages/ReviewEdit';

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
      { path: 'user', element: <UserPage /> },
      { path: 'review/:id', element: <ReviewEdit /> },
    ],
  },
]);

export default router;
