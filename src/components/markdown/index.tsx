import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

interface Props {
	url: string;
}

const MarkDown = (props: Props) => {
	const { url } = props;
	const [content, setContent] = useState<string>("");
	useEffect(() => {
		if (url) {
			fetch(url)
				.then(res => res.text())
				.then(content => {
					setContent(content);
				});
		}
	}, [url]);

	return <ReactMarkdown children={content} />;
};

export default MarkDown;
