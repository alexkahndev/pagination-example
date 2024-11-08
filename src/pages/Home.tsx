import { Navbar } from "../components/utils/Navbar";
import { Footer } from "../components/utils/Footer";
import { useState } from "react";
import { Container } from "../components/example/Container";

export const Home = () => {
	return (
		<html>
			<head>
				<meta charSet="utf-8" />
				<title>Elysia Starter SSR</title>
				<meta name="description" content="Bun, Elysia & React" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/assets/ico/favicon.ico" />
			</head>
			<body
				style={{
					display: "flex",
					flexDirection: "column",
					minHeight: "100vh",
					margin: "0"
				}}
			>
				<Navbar />
				<main
					style={{
						flex: "1",
						backgroundColor: "#fff",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						padding: "20px",
						textAlign: "center"
					}}
				>
					<Container />
				</main>
				<Footer />
			</body>
		</html>
	);
};
