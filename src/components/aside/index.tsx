import { n_routers } from "@/routers";
import { RouteObject } from "@/routers/interface";
import "./index.scss";
import { usePath } from "@/routers/utils";

const menuList = (menu: RouteObject) => {
	const { toPath } = usePath();
	// 菜单点击事件
	const menuClick = (path: string = "") => {
		toPath(path);
	};
	if (menu.children) {
		return (
			<>
				<div className="menu-box">{menu.meta?.title}</div>
				{menu.children.map(value => {
					return (
						<div className="menu-box" style={{ marginLeft: 10 }}>
							{menuList(value)}
						</div>
					);
				})}
			</>
		);
	} else {
		return (
			<>
				<span
					className="menu-title menu-click"
					onClick={() => {
						menuClick(menu.path);
					}}
				>
					{menu.meta?.title}
				</span>
			</>
		);
	}
};

const Aside = () => {
	return (
		<div className="aside-body">
			{n_routers.map(menu => {
				return <div>{menuList(menu)}</div>;
			})}
		</div>
	);
};

export default Aside;
