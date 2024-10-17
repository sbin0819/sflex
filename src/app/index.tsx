import { Header } from '@/widgets/header';
import type { AppProps } from 'next/app';

import { Fragment } from 'react';
import { QueryProviders } from './providers/query-providers';
import './styles/styles.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <QueryProviders>
        <Header />
        <Component {...pageProps} />
      </QueryProviders>
    </Fragment>
  );
}
