import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedbull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SelectedPage from "@/shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="gap-16 bg-gray-20 pb-10 pt-10 md:h-full md:pb-0"
    >
      {/* Image and Main Headxer */}
      <div>
        {/* Main Header */}
        <div>
          {/* Headings */}
          <div>
            <div>
              <div>
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              sapiente rerum odit nemo culpa neque at enim! Sequi, iste? Dolores
              vitae delectus voluptate incidunt, possimus temporibus laborum
              odit repellat alias?
            </p>
          </div>
          {/* Actions */}
          <div>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>
        {/* Image */}
        <div>
          <img alt="home-page-graphic" src={HomePageGraphic}></img>
        </div>
      </div>
      {/* Sponsors */}

      {isAboveMediumScreens && (
        <div>
          <div>
            <div>
              <img alt="redbull-sponsor" src={SponsorRedbull}></img>
              <img alt="forbes-sponsor" src={SponsorForbes}></img>
              <img alt="fortune-sponsor" src={SponsorFortune}></img>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
