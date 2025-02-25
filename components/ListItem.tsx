import React from "react";
import Link from "next/link";

import { Pets } from "../interfaces";

type Props = {
  data: Pets;
};

const ListItem = ({ data }: Props) => (
  <Link href="/pets/[id]" as={`/pets/${data.id}`}>
    {data.id}:{data.name}
  </Link>
);

export default ListItem;
