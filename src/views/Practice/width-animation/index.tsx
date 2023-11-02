import styles from "./width.module.scss";
import { useEffect, useState } from "react";
const WidthAnimation = () => {
	const [isShow, setIsShow] = useState<boolean>(false);
	const handleClick = () => {
		setIsShow(!isShow);
	};
	useEffect(() => {
		if (isShow) {
			const dom1 = document.getElementById("dom1");
			if (dom1) {
				dom1.style.width = "32px";
				dom1.style.padding = "0";
				// console.log(dom1.firstElementChild);
				// console.log(dom1);

				// const span1 = dom1.firstElementChild;
			}
		} else {
			const dom1 = document.getElementById("dom1");
			if (dom1) {
				dom1.style.width = "auto";
				const { width } = dom1.getBoundingClientRect();
				dom1.style.width = "32px";
				requestAnimationFrame(() => {
					dom1.style.width = width + "px";
					dom1.style.padding = "";
				});
			}
		}
	}, [isShow]);
	return (
		<div className={styles["width-body"]}>
			<div id="dom1" className={styles["width-box"]} onClick={handleClick}>
				{isShow ? <span>i</span> : <span>一键解析</span>}
			</div>
		</div>
	);
};

export default WidthAnimation;
