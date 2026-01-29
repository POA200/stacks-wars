import Header from "@/components/main/header";

export default function GameLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}
