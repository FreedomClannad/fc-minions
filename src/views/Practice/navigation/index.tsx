import "./index.scss";
import { Icon } from "@iconify-icon/react";
import { useEffect, useRef } from "react";
const navigateView = () => {
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

	return <>{firstHTML()}</>;
};

export default navigateView;
