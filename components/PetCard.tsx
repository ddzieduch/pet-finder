import Link from 'next/link';
import he from 'he';
import { Pets } from '../interfaces';

type Props = {
  data: Pets;
};

const PetCard = ({ data }: Props) => {
  return (
    <Link
      href="/pets/[id]"
      as={`/pets/${data.id}`}
      className="flex max-w-xl flex-grow flex-col items-start justify-between rounded-2xl ring-10 ring-charcoal-house/10 drop-shadow-xl"
    >
      <img
        className="aspect-square w-full rounded-t-2xl bg-soft-silver object-cover"
        src={data.primary_photo_cropped?.small}
      />
      <div className="w-full flex flex-col flex-grow p-5 cherry-blaze rounded-b-2xl bg-charcoal-house">
        <h3 className="text-base font-semibold text-golden-block">
          {data.type}, {data.name}
        </h3>
        <p className="flex-grow text-soft-silver">{data.description && he.decode(he.decode(data.description))}</p>
        <div className="self-start flex flex-wrap gap-4 mt-4 text-golden-block">
          <div>Age: {data.age}</div>
          <div>Gender: {data.gender}</div>
          <div>Size: {data.size}</div>
        </div>
      </div>
    </Link>
  );
};

export default PetCard;
