type NavigationProps = {
	nextPage: () => void;
	prevPage: () => void;
	goToPage: (page: number) => void;
	numPages: number;
	currentPage: number;
};

export const Navigation = ({
	nextPage,
	prevPage,
	goToPage,
	numPages,
	currentPage
}: NavigationProps) => {
	return (
		<div>
			<button
				onClick={() => {
					goToPage(1);
				}}
			>
				{"< |"}
			</button>
			<button
				onClick={() => {
					prevPage();
				}}
			>
				{"<"}
			</button>
			<button
				onClick={() => {
					goToPage(1);
				}}
			>
				{"1"}
			</button>
			<button
				onClick={() => {
					goToPage(2);
				}}
			>
				{"2"}
			</button>
			<button
				onClick={() => {
					goToPage(3);
				}}
			>
				{"3"}
			</button>
			<button
				onClick={() => {
					nextPage();
				}}
			>
				{">"}
			</button>
			<button
				onClick={() => {
					goToPage(numPages);
				}}
			>
				{"| >"}
			</button>
		</div>
	);
};
