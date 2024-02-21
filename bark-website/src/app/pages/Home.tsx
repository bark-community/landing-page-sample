// components/Home.tsx

const Home = () => {
    return (
      <div className="container mx-auto my-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to BARK</h1>
        <p className="text-lg mb-6">
          BARK is a revolutionary protocol transforming transactions and aid distribution.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Add your content or components here */}
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Docs</h2>
            <p>Find in-depth information about BARK Protocol features and API.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Whitepaper</h2>
            <p>Read more about BARK in our comprehensive whitepaper.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Projects</h2>
            <p>Explore projects related to BARK Protocol.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  