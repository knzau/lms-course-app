import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export function SearchInput({ placeHolder, wrapperClass }: { placeHolder?: string; wrapperClass?: string }) {
	return (
		<div className={cn("flex w-full items-center space-x-2 relative", wrapperClass)}>
			<label className="relative block w-full ">
				<span className="sr-only">Search</span>
				<span className="absolute inset-y-0 left-0 flex items-center pl-2">
					<MagnifyingGlassIcon className="h-5 w-5" />
				</span>
				<input
					className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
					placeholder={placeHolder}
					type="text"
					name="search"
				/>
			</label>
		</div>
	);
}
