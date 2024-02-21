// components/About.tsx

const About = () => {
    return (
      <div className="container mx-auto my-8">
        <h1 className="text-4xl font-bold mb-4">About BARK</h1>
        <p className="text-lg mb-6">
          BARK is a groundbreaking protocol that is revolutionizing aid distribution, creating a transparent, efficient, and community-driven platform for positive impact. Our mission is to bring positive change and empowerment through decentralized technology.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Add more content or components as needed */}
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
            <p>To create a world where aid distribution is transparent, efficient, and community-driven.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Our Values</h2>
            <p>We prioritize transparency, community engagement, and positive impact in everything we do.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  