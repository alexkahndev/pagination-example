import { useState } from "react";
import { content } from "../../data/content";
import { MainContent } from "./MainContent";
import { Navigation } from "./Navigation";
import { usePagination } from "../../hooks/usePagination";

export const Container = () => {
	const { currentPage, curContent, nextPage, prevPage, goToPage, numPages } =
		usePagination({ numPerPage: 3, content });
	return (
		<div>
			<h1>Pagination Example</h1>
			<MainContent currentPage={currentPage} curContent={curContent} />
			<Navigation
				nextPage={nextPage}
				prevPage={prevPage}
				goToPage={goToPage}
				numPages={numPages}
				currentPage={currentPage}
			/>
		</div>
	);
};
