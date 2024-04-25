"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button, ButtonProps, buttonVariants } from "@/components/ui/Button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/Command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover";
import { VariantProps } from "class-variance-authority";
import { ClassProp } from "class-variance-authority/types";

type Framework = {
	value: string;
	label: string;
};

type SearchComboBoxProps = {
	frameworks: Framework[];
	defaultValue?: string;
};

export function SearchComboBox({ frameworks = [], defaultValue = "" }: SearchComboBoxProps) {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("");

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
					{value ? frameworks.find((framework) => framework.value === value)?.label : defaultValue}
					<CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput placeholder="Search framework..." className="h-9" />
					<CommandEmpty>No framework found.</CommandEmpty>
					<CommandGroup>
						{frameworks.map((framework) => (
							<CommandItem
								key={framework.value}
								value={framework.value}
								onSelect={(currentValue) => {
									console.log({ currentValue });

									setValue(currentValue === value ? "" : currentValue);
									setOpen(false);
								}}
							>
								{framework.label}
								<CheckIcon
									className={cn(
										"ml-auto h-4 w-4",
										value === framework.value ? "opacity-100" : "opacity-0"
									)}
								/>
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
