import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';
import { fetchTypes } from '../lib/petfinder';

import { Types } from '../interfaces/types';
import { sampleTypeData } from '../utils/sample-types';

interface Props {
  items: Types;
}

const IndexPage = ({ items }: Props) => (
  <Layout title="Home">
    <h1>Hello PetFinder 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.

  // const types = await fetchTypes()

  const items: Types[] = sampleTypeData;

  return { props: { items } };
};

export default IndexPage;
