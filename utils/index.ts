export const mapOptionsWithDefault = (
  items: string[] = [],
  defaultOption: { id: number; name: string; icon: string } = { id: 0, name: '', icon: '' }
) => [
  defaultOption,
  ...items.map((item, index) => ({
    id: index + 1, // Offset ID to prevent duplicates
    name: item,
    icon: '',
  })),
];

export const mapOptionsWithDefaultNested = <T extends object>(items: T[]): (T & { id: number; icon: string })[] => {
  const defaultOption = { id: 0, icon: '', name: '', ...({} as T) };

  return [defaultOption, ...items.map((item, index) => ({ id: index + 1, icon: '', ...item }))];
};
