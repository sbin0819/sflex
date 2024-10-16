import { Header } from '@/widgets/header';
import type { AppProps } from 'next/app';

import { QueryProviders } from './providers/query-providers';
import './styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProviders>
      <Header />
      <Component {...pageProps} />
    </QueryProviders>
  );
}
