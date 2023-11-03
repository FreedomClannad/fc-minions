import "./index.scss";
const floatingMenu = () => {
	return (
		<div>
			<div>
				<div>默认值，以自身远点旋转45deg</div>
				<div className="outer">
					<div className="inner1"></div>
					<div className="inner1"></div>
				</div>
			</div>
			<div style={{ top: 20 }}>
				<div>以顶部旋转180deg</div>
				<div className="outer">
					<div className="inner2"></div>
					<div className="inner2"></div>
				</div>
			</div>

			<div style={{ top: 20 }}>
				<div>以右部旋转150deg</div>
				<div className="outer">
					<div className="inner3"></div>
					<div className="inner3"></div>
				</div>
			</div>

			<div style={{ top: 20 }}>
				<div>.左上角旋转20deg 红色为基点</div>
				<div className="outer">
					<div className="inner4"></div>
					<div className="inner4"></div>
				</div>
			</div>
		</div>
	);
};

export default floatingMenu;
