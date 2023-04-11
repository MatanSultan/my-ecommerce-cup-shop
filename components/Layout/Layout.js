import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>My E-commerce Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <Link href="/">
            <button className="text-white font-bold text-lg">Cup Shop</button>
          </Link>
        </div>
        <div></div>
      </nav>

      <main>{children}</main>
    </>
  );
};

export default Layout;
