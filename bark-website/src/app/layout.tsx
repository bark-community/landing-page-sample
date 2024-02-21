import type { Metadata } from "next";
import Head from "next/head";
import { Inter_400Latin } from "@fontsource/inter/400.css";
import "./globals.css";

const metadata: Metadata = {
  title: "BARK",
  description:
    "The BARK ecosystem is not just transforming transactions; it's revolutionizing aid distribution, creating a transparent, efficient, and community-driven platform for positive impact.",
};

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  useEffect(() => {
    const interFont = new Inter_400Latin();
    return () => {
      interFont.unmount();
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div className="font-inter">{children}</div>
    </>
  );
};

export default Layout;
