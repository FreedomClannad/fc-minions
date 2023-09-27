import { useNavigate } from "react-router-dom";
import { routerArray } from ".";
import { MetaProps, RouteObject } from "./interface";
import React from "react";
import lazyLoad from "@/routers/lazyLoad.tsx";

// 创建路由数组并添加相应的Meta信息
export const addRouters = (pathList: string[], indexPath: any, meta: MetaProps): RouteObject => {
	const path = pathList.shift();
	if (pathList.length === 0) {
		return {
			path,
			meta,
			//element: lazyLoad(React.lazy(() => import(indexPath)))
			element: lazyLoad(React.lazy(indexPath))
		};
	} else {
		return {
			path,
			children: [addRouters(pathList, indexPath, meta)]
		};
	}
};
// 合并路由
export const mergeRoutes = (routerArray: RouteObject[]) => {
	const mergedMap = new Map<string, RouteObject>();

	for (const item of routerArray) {
		if (mergedMap.has(item.path as string)) {
			// 如果已存在相同路径的项目，合并meta信息
			const existingItem = mergedMap.get(item.path as string)!;
			if (item.meta) {
				existingItem.meta = { ...existingItem.meta, ...item.meta };
			}
			if (item.children && existingItem.children) {
				existingItem.children = mergeRoutes(existingItem.children.concat(item.children));
			}
		} else {
			// 否则将项目添加到映射中
			mergedMap.set(item.path as string, { ...item });
		}
	}

	return Array.from(mergedMap.values());
};

// 递归排序
export const routerSort = (routeList: RouteObject[]) => {
	for (const route of routeList) {
		if (route.children) {
			route.children = routerSort(route.children);
		}
	}
	return routeList.sort((a: RouteObject, b: RouteObject) => {
		if (a.meta && b.meta) {
			if (a.meta.menuOrder && b.meta.menuOrder) {
				return a.meta.menuOrder - b.meta.menuOrder;
			} else {
				return 0;
			}
		} else {
			return 0;
		}
	});
};

// 查找路由
const findFullPath = (routeList: RouteObject[], targetPath: string, currentPath = ""): string | null => {
	if (routeList.length > 0) {
		for (const route of routeList) {
			if (route.path === targetPath) {
				return currentPath + route.path;
			}
			if (route.children) {
				const fullPath: string | null = findFullPath(route.children, targetPath, currentPath + route.path + "/");
				if (fullPath) {
					return fullPath;
				}
			}
		}
	}

	return null;
};

export const usePath = () => {
	const navigate = useNavigate();
	const toPath = (path: string) => {
		if (path) {
			const jumpPath = findFullPath(routerArray, path);
			if (jumpPath) {
				navigate(jumpPath);
			}
		}
	};

	return {
		toPath
	};
};
