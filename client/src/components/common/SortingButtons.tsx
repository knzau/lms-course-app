"use client";

import { CheckIcon, DashboardIcon, DragHandleHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/Button";
import Combobox from "../ui/Combobox";
import { cn } from "@/lib/utils";
import { GRID, LIST } from "@/utils/constants";

type SortOption = {
	label: string;
	value: string;
};

type SortingButtonsProps = {
	sortOptions: SortOption[];
	onSort: (value: string) => void;
	sortSelected: string;
	handleViewChange: (view: string) => void;
	selectedView: string;
};

const SortingButtons = ({ sortOptions, onSort, sortSelected, handleViewChange, selectedView }: SortingButtonsProps) => {
	return (
		<div className="flex justify-between items-center pb-5">
			<h3 className="text-xl font-semibold">25 results</h3>
			<div className="flex gap-2">
				<div className="flex gap-0 items-center">
					<Button
						className={cn("bg-white border-[1px] border-input rounded-l-lg rounded-r-none px-4 py-1 ", {
							"bg-backgroundAccent": selectedView === LIST
						})}
						onClick={() => handleViewChange("list")}
					>
						<DragHandleHorizontalIcon className="text-input" />
						<CheckIcon className="text-input" />
					</Button>
					<Button
						className={cn("bg-white border-[1px] border-input rounded-r-lg rounded-l-none px-4 py-2", {
							"bg-backgroundAccent": selectedView === GRID
						})}
						onClick={() => handleViewChange("grid")}
					>
						<DashboardIcon className="text-input" />
					</Button>
				</div>
				<Combobox options={sortOptions} onChange={onSort} placeholder="Sort by" value={sortSelected} />
			</div>
		</div>
	);
};

export default SortingButtons;
