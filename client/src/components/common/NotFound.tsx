export default function NotFound({ message }: { message: string }) {
	return (
		<div className="text-popover-foreground flex flex-col items-center justify-center h-full">
			<h1 className="text-3xl bold">{message || ""}</h1>
		</div>
	);
}
