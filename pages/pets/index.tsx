import { GetStaticProps } from "next";
import Link from "next/link";

import { Pets } from "../../interfaces";
import { samplePetData } from "../../utils/sample-data";
import Layout from "../../components/Layout";
import List from "../../components/List";

type Props = {
  items: Pets[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Pets List">
    <h1>Pets List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /pets</p>
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
  const items: Pets[] = samplePetData;
  return { props: { items } };
};

export default WithStaticProps;
