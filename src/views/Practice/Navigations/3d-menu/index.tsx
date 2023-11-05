import styles from "./menu.module.scss";
import { Icon } from "@iconify-icon/react";
const floatingMenu = () => {
	return (
		<ul className={styles.body}>
			<li>
				<span>
					<Icon icon="fa-brands:weixin" />
				</span>
				<span>
					<Icon icon="fa-brands:weixin" />
				</span>
			</li>
			<li>
				<span>
					<Icon icon="ant-design:weibo-outlined" />
				</span>
				<span>
					<Icon icon="ant-design:weibo-outlined" />
				</span>
			</li>
			<li>
				<span>
					<Icon icon="basil:qq-solid" />
				</span>
				<span>
					<Icon icon="basil:qq-solid" />
				</span>
			</li>
			<li>
				<span>
					<Icon icon="mingcute:twitter-line" />
				</span>
				<span>
					<Icon icon="mingcute:twitter-line" />
				</span>
			</li>
			<li>
				<span>
					<Icon icon="ant-design:aliwangwang-filled" />
				</span>
				<span>
					<Icon icon="ant-design:aliwangwang-filled" />
				</span>
			</li>
		</ul>
	);
};

export default floatingMenu;
