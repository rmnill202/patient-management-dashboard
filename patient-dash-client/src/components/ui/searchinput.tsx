import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"

type Entry = {
  value: string;
  label: string;
}

type SearchInputInterface = {
  selectedEntry: Entry | null;
  setValue: (value: string) => void;
  entries: Entry[];
  label: string;
  noResultString?: string;
  searchPlaceholder?: string;
}



const SearchInput = ({selectedEntry, setValue, entries, noResultString = 'No results', searchPlaceholder = 'Search...', label}: SearchInputInterface):JSX.Element => {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {selectedEntry ? selectedEntry.label : label}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>{noResultString}</CommandEmpty>
            <CommandGroup>
              {entries.map((entry) => (
                <CommandItem
                  key={entry.value}
                  value={entry.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === selectedEntry?.value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedEntry?.value === entry.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {entry.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
};

export default SearchInput;
