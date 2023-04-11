import Layout from "../components/Layout/Layout";

const Products = () => {
  return (
    <>
      <div className="container mx-auto py-4">
        <h1
          className="text-4xl
        font-bold mb-8"
        >
          Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white shadow rounded-md p-4">
            <img
              src=" https://www.harfieldtableware.co.uk/wp-content/uploads/2019/09/001MBL-8oz-Cup-Med-Blue-scaled.jpg"
              alt="Product"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold mb-2">Product 1</h2>
            <p className="text-gray-500 mb-2">$99.99</p>
            <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
          <div className="bg-white shadow rounded-md p-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0CQ_5jZwp3A-twAAsU_6rFhV1bC1EEiYBvA&usqp=CAU"
              alt="Product"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold mb-2">Product 2</h2>
            <p className="text-gray-500 mb-2">$49.99</p>
            <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
          <div className="bg-white shadow rounded-md p-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiFODj97iOC5JrwEewLUdoDusmHRoLodcy6w&usqp=CAU"
              alt="Product"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold mb-2">Product 3</h2>
            <p className="text-gray-500 mb-2">$29.99</p>
            <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
          <div className="bg-white shadow rounded-md p-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiaMjAZ2oiUOwYnY0J3jfIgKAac87tTacpLA&usqp=CAU"
              alt="Product"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold mb-2">Product 4</h2>
            <p className="text-gray-500 mb-2">$149.99</p>
            <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
