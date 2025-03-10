import { useEffect, useState } from 'react';
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

interface Props {
  label: string;
  options: { id: number; name: string; icon: string }[];
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
}

const Search = ({ label, options, value, onChange, disabled }: Props) => {
  const [selected, setSelected] = useState(options[value]);

  useEffect(() => {
    setSelected(options[value]);
  }, [options]);

  return (
    <Listbox value={value} onChange={onChange} disabled={disabled}>
      <div>
        <Label className="block text-sm/6 font-medium text-charcoal-house">{label}: </Label>
        <div className="relative mt-2">
          <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-charcoal-house outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-golden-block sm:text-sm/6">
            <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
              <img alt="" src={selected.icon} className="size-5 shrink-0 rounded-full" />
              <span className="block truncate">{selected.name}</span>
            </span>
            <ChevronUpDownIcon
              aria-hidden="true"
              className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            />
          </ListboxButton>

          <ListboxOptions
            transition
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
          >
            {options.map((option) => (
              <ListboxOption
                key={option.id}
                value={option.id}
                className="group relative cursor-default py-2 pr-9 pl-3 text-charcoal-house select-none data-focus:bg-golden-block data-focus:text-white data-focus:outline-hidden"
              >
                <div className="flex items-center">
                  <img alt="" src={option.icon} className="size-5 shrink-0 rounded-full" />
                  <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">
                    {option.name}
                  </span>
                </div>

                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-golden-block group-not-data-selected:hidden group-data-focus:text-white">
                  <CheckIcon aria-hidden="true" className="size-5" />
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </div>
    </Listbox>
  );
};

export default Search;
