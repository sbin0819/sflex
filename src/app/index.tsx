import { Header } from '@/widgets/header';
import type { AppProps } from 'next/app';
import './globals.css';
import { QueryProviders } from './providers/query-providers';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProviders>
      <Header />
      <Component {...pageProps} />
    </QueryProviders>
  );
}
