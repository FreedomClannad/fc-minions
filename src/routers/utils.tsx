import { useNavigate } from "react-router-dom";
import { routerArray } from ".";
import { RouteObject } from "./interface";

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

export const PathObject = () => {
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
