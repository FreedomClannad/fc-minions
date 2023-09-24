import BashWayTenterElement from "@/views/CSSInspiration/Layout/bast-way-tocenter-element";
import { RouteObject } from "../interface";

const cssInspiration: Array<RouteObject> = [
	{
		path: "/cssInspiration",
		children: [
			{
				path: "layout",
				children: [
					{
						path: "bast-way-tocenter-element",
						element: <BashWayTenterElement />,
						meta: {
							title: "实现水平垂直居中最便捷的方法",
							key: "bast-way-tocenter-element"
						}
					}
				],
				meta: {
					title: "布局（Layout）",
					key: "layout"
				}
			}
		],
		meta: {
			title: "CSS Inspiration",
			key: "cssInspiration"
		}
	}
];
export default cssInspiration;
