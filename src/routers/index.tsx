import IndexLayout from "@/layout";
import HomeView from "@/views/home";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";

// 导入所有的router
const allRouters = import.meta.glob("./modules/*.tsx", { eager: true });
// 遍历modules里面的所有模块
export const routerArray: RouteObject[] = [];
Object.keys(allRouters).forEach(item => {
	// TODO 这里暂时有问题，暂时先屏蔽，问题是出现在ts校验上。
	// @ts-ignore
	Object.keys(allRouters[item]).forEach((key: any) => {
		// @ts-ignore
		routerArray.push(...allRouters[item][key]);
	});
});

// TODO 这里准备用自动导入生成路由，暂时没有思路，后续有思路在调整
const pages = import.meta.glob("../views/**/page.ts", { eager: true, import: "default" });

const routers = Object.entries(pages).map(([path, meta]) => {
	console.log(path);

	return {
		path: "/test",
		element: <HomeView />,
		meta
	};
});
console.log(routers);
export const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/home" />
	},
	{
		element: <IndexLayout />,
		children: [...routerArray]
	}
];

const Router = () => {
	return useRoutes(rootRouter);
};

export default Router;
