import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

// 导入所有的router
const allRouters = import.meta.glob('./modules/*.tsx', { eager: true });
// 遍历modules里面的所有模块
const routerArray: RouteObject[] = [];
Object.keys(allRouters).forEach((item) => {
  // TODO 这里暂时有问题，暂时先屏蔽，问题是出现在ts校验上。
  // @ts-ignore
  Object.keys(allRouters[item]).forEach((key: any) => {
    // @ts-ignore
    routerArray.push(...allRouters[item][key]);
  });
});

export const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  ...routerArray,
];

const Router = () => {
  return useRoutes(rootRouter);
};

export default Router;
