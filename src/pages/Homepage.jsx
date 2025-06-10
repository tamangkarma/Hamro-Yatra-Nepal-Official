import HeroBanner from "../components/HeroBanner";
import CookieConsent from "../components/Cookies";
import Navbar from "../components/Navbar";

const Homepage = () => {
  return (
    <>
      <Navbar/>
      <HeroBanner />
      <CookieConsent />
    </>
  );
};

export default Homepage;
