import { Content, content } from "../../data/content";

type MainContentProps = {
	currentPage: number;
	curContent: Content[];
};

export const MainContent = ({ currentPage, curContent }: MainContentProps) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				marginBottom: "20px"
			}}
		>
			{curContent.map((item) => (
				<div key={item.id}>
					<h2>{item.title}</h2>
					<p>{item.body}</p>
					<img src={item.img} alt={item.title} />
				</div>
			))}
		</div>
	);
};
