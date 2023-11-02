import styles from "./floating.module.scss";
const floatingMenu = () => {
	return (
		<div className={styles["floating-body"]}>
			<ul>
				<li>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span className="iconfont icon-douyin"></span>
				</li>
			</ul>
		</div>
	);
};

export default floatingMenu;
