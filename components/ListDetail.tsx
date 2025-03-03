import * as React from "react";

import { Pets } from "../interfaces";

type ListDetailProps = {
  item: Pets;
};

const ListDetail = ({ item: pet }: ListDetailProps) => (
  <div>
    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Detail for {pet.name}</h1>
    <p>ID: {pet.id}</p>
  </div>
);

export default ListDetail;
