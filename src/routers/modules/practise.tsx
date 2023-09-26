import UnderlineAnimation from "@/views/Practice/underline_animation";
import { RouteObject } from "../interface";
const practiceRouter: Array<RouteObject> = [
	{
		path: "/practice",
		children: [
			{
				path: "underline-animation",
				element: <UnderlineAnimation />,
				meta: {
					title: "下划线从左到右滚动出来动画",
					key: "underline-animation"
				}
			}
		],
		meta: {
			title: "个人寻找",
			key: "practice",
			menuNum: 3
		}
	}
];

export default practiceRouter;
