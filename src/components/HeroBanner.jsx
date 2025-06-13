import heroImg from "../../src/assets/homeImage/heropic.jpg";
import sideImg from "../../src/assets/homeImage/heroimg2.jpg"

const HeroBanner = () => {
  return (
    <section className="relative h-screen bg-cover bg-center">
      <img
        src={heroImg}
        alt="hero image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-48 px-4">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-md">
            Hamro Yatra Nepal
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-medium italic">
            Discover Nepal, Live the Journey
          </p>
          <button className="mt-8 bg-white text-black px-6 py-3 rounded-full text-sm md:text-base font-semibold shadow-md hover:bg-gray-100 transition">
            Explore Destinations
          </button>
          <p>where all the beauty</p>
          <p>where all the beauty</p>
        </div>
        <div className="">
          <img src={sideImg} alt=""
          className="rounded-3xl h-[23rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
