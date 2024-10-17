import { Header } from '@/widgets/header';
import type { AppProps } from 'next/app';

import { QueryProviders } from './providers/query-providers';
import './styles/font.css';
import './styles/styles.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProviders>
      <Header />
      <Component {...pageProps} />
    </QueryProviders>
  );
}
