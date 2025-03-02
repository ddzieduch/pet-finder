import * as React from 'react';
import { Pets } from '../interfaces';
import PetCard from './PetCard';

type Props = {
  items: Pets[];
};

const List = ({ items }: Props) => (
  <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    {items.map((item) => (
      <PetCard key={item.id} data={item} />
    ))}
  </div>
);

export default List;
