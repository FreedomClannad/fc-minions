import IndexLayout from "@/layout";
import HomeView from "@/views/home";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import { addRouters, routerSort, mergeRoutes } from "./utils";
import { MetaProps } from "./interface";

// 导入所有的router
const allRouters = import.meta.glob("./modules/*.tsx", { eager: true });

const recordArray: RouteObject[] = [];
Object.keys(allRouters).forEach(item => {
	// TODO 这里暂时有问题，暂时先屏蔽，问题是出现在ts校验上。
	// @ts-ignore
	Object.keys(allRouters[item]).forEach((key: any) => {
		// @ts-ignore
		recordArray.push(...allRouters[item][key]);
	});
});
// 遍历modules里面的所有模块
export const routerArray = routerSort(recordArray);
console.log(routerArray);

// TODO 这里准备用自动导入生成路由，暂时没有思路，后续有思路在调整
const pages = import.meta.glob("../views/**/page.ts", { eager: true, import: "default" });
const pageComps = import.meta.glob("../views/**/index.tsx");
console.log(pageComps);

const routers = Object.entries(pages).map(([path, meta]) => {
	const n_path = path.replace("../views", "").replace("/page.ts", "");
	const index_path = path.replace("/page.ts", "/index.tsx");
	const pathArray = n_path.split("/").filter(Boolean);
	if (index_path) {
		console.log(index_path);
		console.log(pageComps[index_path]);
	}

	return addRouters(pathArray, pageComps[index_path], meta as MetaProps);
});
console.log(routers);

export const n_routers = mergeRoutes(routers);
console.log(n_routers);

export const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/home" />
	},
	{
		element: <IndexLayout />,
		// @ts-ignore
		children: [...n_routers]
	}
];

const Router = () => {
	return useRoutes(rootRouter);
};

export default Router;
