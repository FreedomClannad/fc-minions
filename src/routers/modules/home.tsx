import { RouteObject } from "@/routers/interface";
import Home from "@/views/home";

const homeRoute: Array<RouteObject> = [
	{
		path: "/home",
		element: <Home />,
		meta: {
			title: "首页1",
			key: "Home"
		}
	}
];

export default homeRoute;
