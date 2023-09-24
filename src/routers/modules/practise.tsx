import UnderlineAnimation from "@/views/Practice/underline_animation";
import { RouteObject } from "../interface";
const practiceRouter: Array<RouteObject> = [
	{
		path: "/practice",
		children: [
			{
				path: "underline-animation",
				element: <UnderlineAnimation />
			}
		]
	}
];

export default practiceRouter;
