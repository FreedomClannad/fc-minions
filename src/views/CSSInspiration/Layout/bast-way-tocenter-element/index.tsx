import "./index.scss";
// @ts-ignore
import md from "./About.md";
import MarkDown from "@/components/markdown";

const BashWayTenterElement = () => {
	return (
		<div>
			<div>实现水平垂直居中最便捷的方法</div>
			<MarkDown url={md} />
			<div className="g-container">
				<div className="g-box"></div>
			</div>
		</div>
	);
};

export default BashWayTenterElement;
