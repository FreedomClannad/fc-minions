import "./index.scss";
import { Icon } from "@iconify-icon/react";
import { log } from "console";
import { useEffect, useRef, useState } from "react";

interface menuInterface {
	value: string;
	icon: string;
}

const navigateView = () => {
	/*********** 第一种方式是参考别人主要是练习这些动画效果********/
	// 以下方式是为了练习其他方式绑定以及相关的js方式，正经不会这样写，
	const navigateRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (navigateRef.current) {
			const list = navigateRef.current.querySelectorAll("li");
			const activeLink = (li: HTMLLIElement) => {
				list.forEach(item => {
					console.log(item);

					item.classList.remove("active");
				});
				li.classList.add("active");
			};
			list.forEach(item => {
				item.addEventListener("click", () => {
					activeLink(item);
				});
			});
		}
	}, []);

	// 这是第一种渲染方式菜单动画
	const firstHTML = () => {
		return (
			<>
				<div ref={navigateRef} className="navigation">
					<ul>
						<li className="active">
							<a href="#">
								<span>
									<Icon icon="fa-brands:weixin" />
								</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span>
									<Icon icon="ant-design:weibo-outlined" />
								</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span>
									<Icon icon="basil:qq-solid" />
								</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span>
									<Icon icon="mingcute:twitter-line" />
								</span>
							</a>
						</li>
						<li>
							<a href="#">
								<span>
									<Icon icon="ant-design:aliwangwang-filled" />
								</span>
							</a>
						</li>
						<div className="indicator">
							<span></span>
						</div>
					</ul>
				</div>
			</>
		);
	};

	/******* 第一种方式结束 *************/

	/******** 第二种方式 尝试只使用react现有的方式进行处理 ***************/
	const menuList: menuInterface[] = [
		{
			value: "weixin",
			icon: "fa-brands:weixin"
		},
		{
			value: "weibo",
			icon: "ant-design:weibo-outlined"
		},
		{
			value: "qq",
			icon: "basil:qq-solid"
		},
		{
			value: "twitter",
			icon: "mingcute:twitter-line"
		},
		{
			value: "aliwangwang",
			icon: "ant-design:aliwangwang-filled"
		}
	];
	const [menuActive, setMenuActive] = useState<string>("weixin");

	const navigateRef2 = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (navigateRef2.current) {
			const index = menuList.findIndex(menu => menu.value === menuActive);
			const liActive = navigateRef2.current.getElementsByClassName("active")[0] as HTMLDivElement;
			const indicatorDiv = navigateRef2.current.getElementsByClassName("indicator")[0] as HTMLDivElement;
			const width = liActive.offsetHeight;
			requestAnimationFrame(() => {
				indicatorDiv.style.transform = `translateX(${index * width}px)`;
			});
		}
	}, [menuActive]);

	const handleLiClick = (menu: menuInterface) => {
		setMenuActive(menu.value);
	};

	const secondView = () => {
		return (
			<div style={{ marginTop: 50 }}>
				<div ref={navigateRef2} className="navigation2">
					<ul>
						{menuList.map(menu => {
							return (
								<li
									className={menuActive === menu.value ? "active" : ""}
									onClick={() => {
										handleLiClick(menu);
									}}
								>
									<div>
										<span>
											<Icon icon={menu.icon}></Icon>
										</span>
									</div>
								</li>
							);
						})}
						<div className="indicator">
							<span></span>
						</div>
					</ul>
				</div>
			</div>
		);
	};

	/******** 第二种方式结束 */

	return (
		<div>
			{firstHTML()} {secondView()}
		</div>
	);
};

export default navigateView;
