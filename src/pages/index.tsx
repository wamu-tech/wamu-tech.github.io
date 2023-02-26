import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => (
  <Layout>
    <div className="text-center">
      <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-indigo-600 sm:text-5xl sm:leading-none md:text-6xl">
        Wamu
      </h2>

      <h3 className="text-xl md:text-3xl mt-10">Coming Soon</h3>
    </div>
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;
