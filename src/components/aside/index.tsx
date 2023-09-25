import { routerArray } from "@/routers";
import { RouteObject } from "@/routers/interface";
const Aside = () => {
	console.log(routerArray);
	const menuList = (menu: RouteObject) => {
		if (menu.children) {
			return menu.children.map(value => {
				return (
					<div>
						<span>{menu.meta?.title}</span>
						<div>{menuList(value)}</div>
					</div>
				);
			});
		} else {
			return <span>{menu.meta?.title}</span>;
		}
	};
	return (
		<div>
			{routerArray.map(menu => {
				console.log(menu);

				return menuList(menu);
			})}
		</div>
	);
};

export default Aside;
