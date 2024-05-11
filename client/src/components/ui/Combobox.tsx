import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { CheckIcon } from "@radix-ui/react-icons";

interface ComboboxOption {
	label: string;
	value: string;
}

interface ComboboxProps {
	options: ComboboxOption[];
	value?: string;
	onChange?: (value: string) => void;
	placeholder?: string;
	defaultValue?: string;
	parentClassProps?: string;
}

const Combobox: React.FC<ComboboxProps> = ({
	options,
	value,
	onChange,
	placeholder,
	defaultValue,
	parentClassProps
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState(value || "");
	const [selectedLabel, setSelectedLabel] = useState("");
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
		setSelectedLabel(option.label);
		if (onChange) {
			onChange(option.value);
		}
		setIsOpen(false);
	};

	console.log({ selectedValue, selectedLabel });

	return (
		<div className="relative" ref={comboboxRef}>
			<Button
				variant="outline"
				className={cn(
					"flex w-[205px] items-center justify-between rounded-md border border-gray-300 bg-backgroundAccent px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-backgroundAccent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
					isOpen ? "ring-2 ring-accent" : "",
					parentClassProps
				)}
				onClick={() => setIsOpen(!isOpen)}
			>
				{(placeholder || "") + "  " + selectedLabel}
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
									selectedValue === option.value ? "bg-backgroundAccent " : ""
								)}
								onClick={() => handleOptionClick(option)}
							>
								{option.label}
								{selectedValue === option.value && (
									<CheckIcon className="ml-auto h-5 w-5 text-gray-700" />
								)}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Combobox;
