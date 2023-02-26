import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn't exist ... the sadness.</p>
    <Link
      to="/"
      className="text-indigo-600 hover:text-indigo-700 hover:underline dark:text-indigo-400 dark:hover:text-indigo-500"
    >
      Return Home
    </Link>
  </Layout>
);

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;
