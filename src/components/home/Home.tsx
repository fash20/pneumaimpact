import React, {useEffect} from "react";
import OurFeature from "./OurFeature";
import FAQ from "./FAQ";
import OurReview from "./OurReview";
import RateUs from "./RateUs";
import Subscription from "./Subscription";
import FrontPage from "./FrontPage";
import Target from "./Target";
import Travel from "./Travel";
import Phone from "./Phone";


const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="grid grid-cols-1 gap-y-10 lg:gap-36">
      <FrontPage />
      <OurFeature />
      <Target />
      <Travel />
      <Phone />
      <OurReview />
      <FAQ />
      <RateUs />
      <Subscription />
    </div>
  );
};

export default Home;
