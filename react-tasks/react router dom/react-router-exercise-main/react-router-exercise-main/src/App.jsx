import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { SharedLayout, ProtectedRoute } from './components';

import { Home, AddProduct, Product, EditProduct, NotFound } from './pages';
import { user, products } from './mock/mockData.js';

const routes = [
  {
    path: '/',
    element: <SharedLayout user={user} />,
    children: [
      {
        index: true,
        element: <Home products={products} />,
      },
      {
        path: 'add',
        element: (
          <ProtectedRoute user={user}>
            <AddProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: 'products',
        children: [],
      },
    ],
  },
];

const App = () => {
  return <></>;
};
export default App;
