import HeroBanner from "../components/HeroBanner";
import CookieConsent from "../components/Cookies";
import Navbar from "../components/Navbar";
import About from "../components/About";

const Homepage = () => {
  return (
    <>
      <Navbar/>
      <HeroBanner />
      <About />
      <CookieConsent />
    </>
  );
};

export default Homepage;
