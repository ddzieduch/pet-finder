import * as React from "react";

import { Pets } from "../interfaces";

type ListDetailProps = {
  item: Pets;
};

const ListDetail = ({ item: pet }: ListDetailProps) => (
  <div>
    <h1>Detail for {pet.name}</h1>
    <p>ID: {pet.id}</p>
  </div>
);

export default ListDetail;
