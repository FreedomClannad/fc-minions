import styles from "./floating.module.scss";
import { Icon } from "@iconify-icon/react";
const floatingMenu = () => {
	return (
		<div className={styles["floating-body"]}>
			<ul>
				<li>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span>
						<Icon icon="fa-brands:weixin"></Icon>
					</span>
				</li>
			</ul>
		</div>
	);
};

export default floatingMenu;
