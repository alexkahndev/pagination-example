import { useState } from "react";

type UsePaginationProps = {
	numPerPage: number;
	content: any[];
};

export const usePagination = ({ numPerPage, content }: UsePaginationProps) => {
	const [currentPage, setCurrentPage] = useState(1);
	const curContent = content.slice(
		(currentPage - 1) * numPerPage,
		currentPage * numPerPage
	);
	const numPages = Math.ceil(content.length / numPerPage);

	const nextPage = () => {
		if (currentPage < numPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const goToPage = (page: number) => {
		if (page >= 1 && page <= numPages) {
			setCurrentPage(page);
		}
	};

	return { currentPage, curContent, nextPage, prevPage, goToPage, numPages };
};
