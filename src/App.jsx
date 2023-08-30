import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Suspense } from 'react';
import router from './routes';

const querClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={querClient}>
        <Suspense>
          <RouterProvider router={router} />
        </Suspense>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </HelmetProvider>
  );
}
export default App;
