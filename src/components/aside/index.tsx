import { n_routers } from "@/routers";
import { RouteObject } from "@/routers/interface";
import "./index.scss";
import { usePath } from "@/routers/utils";

const menuList = (menu: RouteObject) => {
	console.log(menu);
	const { toPath } = usePath();
	// 菜单点击事件
	const menuClick = (path: string = "") => {
		toPath(path);
	};
	if (menu.children) {
		return menu.children.map(value => {
			return (
				<div>
					<span className="menu-title">{menu.meta?.title}</span>
					<div style={{ marginLeft: 10 }}>{menuList(value)}</div>
				</div>
			);
		});
	} else {
		return (
			<div>
				<span
					className="menu-title menu-click"
					onClick={() => {
						menuClick(menu.path);
					}}
				>
					{menu.meta?.title}
				</span>
			</div>
		);
	}
};

const Aside = () => {
	return (
		<div className="aside-body">
			{n_routers.map(menu => {
				console.log(menu);

				return menuList(menu);
			})}
		</div>
	);
};

export default Aside;
