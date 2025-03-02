import { GetStaticProps } from 'next';
import Link from 'next/link';
import { fetchPets } from '../../lib/petfinder';

import { Pets } from '../../interfaces';
import Layout from '../../components/Layout';
import List from '../../components/List';

type Props = {
  items: Pets[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Pets List">
    <h1>Pets List</h1>
    <List items={items} />
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const pets = await fetchPets();

  return { props: { items: pets.animals || [] } };
};

export default WithStaticProps;
