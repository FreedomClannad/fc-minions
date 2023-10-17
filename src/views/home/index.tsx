import styles from "./home.module.scss";
const HomeView = () => {
	return (
		<div>
			<div>本项目是练习CSS练习项目项目</div>
			<div className={styles.test}>CSS新世界</div>
			<div className={[styles.test1, styles.test2].join(" ")}>Test</div>
		</div>
	);
};

export default HomeView;
