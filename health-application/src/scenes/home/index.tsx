import React from "react";
// import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/httitle.png";
import HomePageGraphic from "@/assets/food-png/png-2.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AddField from "@/components/addField";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Home({ setSelectedPage }: Props) {
  // const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="gap-16 bg-gray-20 pb-10 pt-10 md:h-full md:pb-0"
    >
      {/* Image and Main Headxer */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* Main Header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Headings */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              {/* cspell: disable-next-line */}
              {/* className="before:content-httitlebg before:max-md: before:absolute before:-top-14 before:left-6 before:z-[-1] after:content-[none]" */}
              <div>
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              sapiente rerum odit nemo culpa neque at enim! Sequi, iste? Dolores
              vitae delectus voluptate incidunt, possimus temporibus laborum
              odit repellat alias?
            </p>
          </motion.div>
          {/* Actions */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Sign Up
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* Image */}
        <div className="z-10 flex basis-3/5 justify-center md:ml-40 md:mt-16 md:justify-end">
          <img alt="home-page-graphic" src={HomePageGraphic}></img>
        </div>
      </motion.div>
      {/* Sponsors */}

      <div className="h=[150px] w-full bg-primary-100 py-10">
        <div className="mx-auto w-5/6">
          <div className="grid justify-items-center">
            <p className="grid ">
              Enter food you eat with the calories into the list below ...
            </p>
            {/* Form Container */}
            <div className="">
              {/* Form */}
              <form className="m-6 grid h-fit w-fit rounded-md border-solid border-black bg-rose-200 p-3">
                {/* Sub title */}
                <p>Daily food consumed:</p>
                {/* Form Input */}
                <div>
                  <label>Food:</label>
                  <input className="m-2 rounded-sm"></input>
                </div>
                <button className="m-2 grid justify-self-end border-[0.01rem] border-solid border-black px-3 py-[0.2rem]">
                  Add field
                </button>
                <AddField />
                <button className="rounded-md border-[0.01rem] border-solid border-black bg-white px-3 py-1 transition-all hover:scale-[1.1] hover:border-[0.09rem] hover:border-black hover:bg-slate-50">
                  Calculate
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
