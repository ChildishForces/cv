export type ValueGetter<T = unknown> = (item: T) => string | number;

type SortingOrder = 'ascending' | 'descending';

export type SortGroup<T = unknown> = {
  key: string | number;
  items: T[];
};

/**
 * Generic sorting predicate
 * @param key
 * @param order
 */
export function sortBy<T>(key: ValueGetter<T>, order: SortingOrder = 'ascending') {
  if (order === 'ascending') return (a: T, b: T) => (key(a) > key(b) ? 1 : -1);
  return (a: T, b: T) => (key(a) > key(b) ? -1 : 1);
}

/**
 * Generic grouping predicate
 * @param key
 * @param array
 */
export function groupBy<T>(key: ValueGetter<T>, array: T[]): SortGroup<T>[] {
  return array.reduce((acc: SortGroup<T>[], cv) => {
    const group = acc.find((group) => group.key === key(cv));
    if (!group) return [...acc, { key: key(cv), items: [cv] }];
    return [...acc.filter((g) => g.key !== group.key), { ...group, items: [...group.items, cv] }];
  }, []);
}
