import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';

import { Types } from '../interfaces/types';
import { sampleTypeData } from '../utils/sample-types';
import Search from '../components/Search';
import { useState } from 'react';

interface Props {
  items: Types[];
}

interface MappedTypes extends Types {
  id: number;
  name: string;
  icon: string;
}

const IndexPage = ({ items }: Props) => {
  const types = items.map((item, id) => {
    return { id, icon: '', ...item };
  });

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

  return (
    <Layout title="Home">
      <h1>Hello PetFinder 👋</h1>

      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        <Search
          label="Animal Type"
          options={items.map((animal, index) => ({ id: index, name: animal.name, icon: '' }))}
          value={selectedAnimal.id}
          onChange={handleAnimalChange}
        />

        <Search
          label="Coat"
          options={(selectedAnimal?.coats || []).map((coat, index) => ({ id: index, name: coat, icon: '' }))}
          value={selectedCoat}
          onChange={setSelectedCoat}
          disabled={!selectedAnimal || selectedAnimal.coats.length === 0}
        />

        <Search
          label="Color"
          options={(selectedAnimal?.colors || []).map((color, index) => ({ id: index, name: color, icon: '' }))}
          value={selectedColor}
          onChange={setSelectedColor}
          disabled={!selectedAnimal}
        />

        <Search
          label="Gender"
          options={(selectedAnimal?.genders || []).map((gender, index) => ({ id: index, name: gender, icon: '' }))}
          value={selectedGender}
          onChange={setSelectedGender}
          disabled={!selectedAnimal}
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
