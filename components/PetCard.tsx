import Link from 'next/link';
import he from 'he';
import { Pets } from '../interfaces';

type Props = {
  data: Pets;
};

const PetCard = ({ data }: Props) => {
  return (
    <div className="flex max-w-xl flex-grow flex-col items-start justify-between rounded-md ring-1 ring-slate-900/10">
      <img
        className="aspect-square w-full rounded-t-md bg-gray-200 object-cover"
        src={data.primary_photo_cropped?.small}
      />
      <div className="flex flex-col flex-grow p-5">
        <Link href="/pets/[id]" as={`/pets/${data.id}`}>
          <h3 className="text-base font-semibold text-gray-900">{data.name}</h3>
        </Link>
        <p className="flex-grow">{data.description && he.decode(he.decode(data.description))} </p>
        <p className="self-start">{data.type}</p>
      </div>
    </div>
  );
};

export default PetCard;
