import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

interface ComboboxOption {
	label: string;
	value: string;
}

interface ComboboxProps {
	options: ComboboxOption[];
	value?: string;
	onChange?: (value: string) => void;
	placeholder?: string;
}

const Combobox: React.FC<ComboboxProps> = ({ options, value, onChange, placeholder }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState(value || "");
	const comboboxRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (comboboxRef.current && !comboboxRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleOptionClick = (option: ComboboxOption) => {
		setSelectedValue(option.value);
		if (onChange) {
			onChange(option.value);
		}
		setIsOpen(false);
	};

	return (
		<div className="relative" ref={comboboxRef}>
			<Button
				variant="outline"
				className={cn(
					"inline-flex w-[205px] items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
					isOpen ? "ring-2 ring-indigo-500" : ""
				)}
				onClick={() => setIsOpen(!isOpen)}
			>
				{"Sort By: " + selectedValue || placeholder}
				<svg
					className="-mr-1 ml-2 h-5 w-5"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fillRule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clipRule="evenodd"
					/>
				</svg>
			</Button>

			{isOpen && (
				<div className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						{options.map((option) => (
							<button
								key={option.value}
								type="button"
								className={cn(
									"flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
									selectedValue === option.value ? "bg-gray-200" : ""
								)}
								onClick={() => handleOptionClick(option)}
							>
								{option.label}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Combobox;
