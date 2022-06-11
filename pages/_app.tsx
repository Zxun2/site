import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";

const AnimatedCursor: React.ComponentType<{ color: string }> = dynamic(
  () => import("react-animated-cursor"),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <AnimatedCursor color="59, 130, 246" />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
