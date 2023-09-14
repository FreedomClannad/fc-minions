import { RouteObject } from '@/routers/interface';
import IndexLayout from '@/layout';
import Home from '@/views/home';

const homeRoute: Array<RouteObject> = [
  {
    element: <IndexLayout />,
    children: [
      {
        path: '/home',
        element: <Home />,
        meta: {
          title: '首页',
          key: 'Home',
        },
      },
    ],
  },
];

export default homeRoute;
