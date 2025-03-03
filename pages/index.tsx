import { useState } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';

import { Types } from '../interfaces/types';
import { sampleTypeData } from '../utils/sample-types';
import Search from '../components/Search';
import { mapOptionsWithDefault, mapOptionsWithDefaultNested } from '../utils';

interface Props {
  items: Types[];
}

interface MappedTypes extends Types {
  id: number;
  name: string;
  icon: string;
}

const IndexPage = ({ items }: Props) => {
  const types = mapOptionsWithDefaultNested(items);

  const [selectedAnimal, setSelectedAnimal] = useState<MappedTypes>(types[0]);
  const [selectedCoat, setSelectedCoat] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<number>(0);
  const [selectedGender, setSelectedGender] = useState<number>(0);

  const handleAnimalChange = (value: number) => {
    const animal = types.find((a) => a.id === value) || null;
    setSelectedAnimal(animal);
    setSelectedCoat(0);
    setSelectedColor(0);
    setSelectedGender(0);
  };

  const animalOptions = mapOptionsWithDefault(items.map((item) => item.name));
  const coatOptions = mapOptionsWithDefault(selectedAnimal?.coats);
  const colorOptions = mapOptionsWithDefault(selectedAnimal?.colors);
  const genderOptions = mapOptionsWithDefault(selectedAnimal?.genders);

  const isDisabled = selectedAnimal.id === 0;

  return (
    <Layout title="Home">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Hello PetFinder 👋</h1>

      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        <Search label="Animal Type" options={animalOptions} value={selectedAnimal.id} onChange={handleAnimalChange} />

        <Search
          label="Coat"
          options={coatOptions}
          value={selectedCoat}
          onChange={setSelectedCoat}
          disabled={isDisabled}
        />

        <Search
          label="Color"
          options={colorOptions}
          value={selectedColor}
          onChange={setSelectedColor}
          disabled={isDisabled}
        />

        <Search
          label="Gender"
          options={genderOptions}
          value={selectedGender}
          onChange={setSelectedGender}
          disabled={isDisabled}
        />
      </div>
      <p>
        <Link href="/about">About</Link>
      </p>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.

  // const types = await fetchTypes()

  const items: Types[] = sampleTypeData;

  return { props: { items } };
};

export default IndexPage;
