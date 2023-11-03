import styles from "./menu.module.scss";
const floatingMenu = () => {
	return (
		<ul className={styles.body}>
			<li>
				<span className="iconfont icon-QQ"></span>
				<span className="iconfont icon-QQ"></span>
			</li>
			<li>
				<span className="iconfont icon-weixin"></span>
				<span className="iconfont icon-weixin"></span>
			</li>
			<li>
				<span className="iconfont icon-douyin"></span>
				<span className="iconfont icon-douyin"></span>
			</li>
			<li>
				<span className="iconfont icon-xinlangweibo"></span>
				<span className="iconfont icon-xinlangweibo"></span>
			</li>
			<li>
				<span className="iconfont icon-shouji"></span>
				<span className="iconfont icon-shouji"></span>
			</li>
		</ul>
	);
};

export default floatingMenu;
