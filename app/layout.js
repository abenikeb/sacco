import "./globals.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<div className="main-container">
				<div className="gradient" />
			</div>
			<main className="">{children}</main>
		</html>
	);
}
