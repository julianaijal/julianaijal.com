import { Suspense } from 'react';
import Layout from './_components/Layout';
import Schema from './_lib/Schema';

export default function Page() {
  return (
    <>
      {/* Schema.org structured data */}
      <Suspense fallback={null}>
        <Schema />
      </Suspense>
      <Layout />
    </>
  );
}
