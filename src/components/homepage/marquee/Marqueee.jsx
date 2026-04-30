import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  return (
    <div className="bg-gray-100 py-3 border-y border-gray-200 mt-7 rounded">
      <Marquee pauseOnHover={true} speed={40} gradient={false}>
        <div className="flex gap-10 text-lg font-medium text-gray-700">
          <span>✨ New Arrivals: <span className="text-blue-600 font-bold">Ocean Blue Ceramic Tile</span></span>
          <span>🏠 Weekly Feature: <span className="text-green-600 font-bold">Modern Geometric Patterns</span></span>
          <span>🤝 Join the Community for more design inspiration!</span>
          <span className="mr-10">🔥 Limited Offer: Get 10% off on your first order!</span>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;