import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import '../styles/dark-mode.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
