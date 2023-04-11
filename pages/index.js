import Layout from "../components/Layout/Layout";
import Products from "./products";

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto py-4">
        <h1 className="text-4xl font-bold mb-8">
          Welcome to My E-commerce Site
        </h1>
        <p className="text-lg mb-4">
          Check out our latest products and find great deals on everything from
          electronics to clothing.
        </p>
        <p className="text-lg">
          Start shopping now and enjoy free shipping on orders over $50.
        </p>
      </div>
      <div>
        <Products />
      </div>
    </Layout>
  );
};

export default Home;
