import React, { useState } from "react";
// import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/httitle.png";
import HomePageGraphic from "@/assets/food-png/png-2.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
// import { list } from "@/shared/types";
// import AddField from "@/components/addField";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Home({ setSelectedPage }: Props) {
  const [daily, setDaily] = useState([{ food: "" }]);
  const [loggedFood, setLoggedFood] = useState([{ loggedFood: "" }]);
  console.log(daily);
  console.log(loggedFood);

  const loggedFoodFunction = () => {
    setLoggedFood([...loggedFood, { loggedFood: "" }]);
  };

  // function clearText() {
  //   document.getElementById("textfield1").value = "";
  // }

  const handleServiceAdd = () => {
    setDaily([...daily, { food: "" }]);
  };

  const handleServiceRemove = (index: number) => {
    console.log("titties");
    const list = [...daily];
    list.splice(index, 1);
    setDaily(list);
  };

  const handleServiceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const list: any = [...daily];
    list[index][name] = value;
    setDaily(list);
  };

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
        <div className="z-10 box-border flex basis-3/5 justify-center md:ml-40 md:mt-16 md:justify-end">
          <img alt="home-page-graphic" src={HomePageGraphic}></img>
        </div>
      </motion.div>
      {/* Sponsors */}

      <div className="h=[150px] w-full bg-primary-100 py-10">
        <div className="mx-auto w-5/6">
          <div className="box-border grid justify-items-center">
            <p className="box-border grid">
              Enter food you eat with the calories into the list below ...
            </p>
            {/* Form Container */}
            <div className="">
              {/* Form */}
              <form className="m-6 box-border grid h-fit w-96 rounded-md border-solid border-black bg-rose-200 p-3">
                {/* Sub title */}
                <p>Daily food consumed:</p>

                {/* Form Input */}

                {daily.map((singleDaily, index: number) => (
                  <>
                    <div key={index}>
                      <label>Food:</label>
                      <input
                        name="food"
                        type="text"
                        id="food"
                        className="m-2 w-44 rounded-sm"
                        value={singleDaily.food}
                        onChange={(e) => handleServiceChange(e, index)}
                        required
                      ></input>
                      <div className="inline-block">
                        {daily.length - 1 === index && daily.length < 10 && (
                          <button
                            onClick={handleServiceAdd}
                            className="m-2 box-border grid justify-self-end rounded-md border-[0.01rem] border-black  bg-white px-3 py-1 text-xs transition-all hover:scale-[1.1] hover:border-[0.09rem] hover:border-black hover:bg-slate-50"
                          >
                            Add field
                          </button>
                        )}
                      </div>
                      <div>
                        {daily.length > 1 && (
                          <button
                            onClick={() => handleServiceRemove(index)}
                            type="button"
                            className="m-2 box-border box-border grid justify-self-end rounded-md border-[0.01rem] border-[0.01rem] border-solid border-solid border-black border-black bg-white px-3 px-3 py-1 py-[0.2rem] text-xs transition-all hover:scale-[1.1] hover:border-[0.09rem] hover:border-black hover:bg-slate-50"
                          >
                            <span>Remove</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </>
                ))}

                {/* <AddField /> */}
                <button
                  onClick={loggedFoodFunction}
                  className="mr-[42px] box-border grid w-fit justify-self-end rounded-md border-[0.01rem] border-solid border-black bg-white px-3 py-1 text-xs transition-all hover:scale-[1.1] hover:border-[0.09rem] hover:border-black hover:bg-slate-50"
                >
                  Calculate
                </button>
                {/* Output Area to show added foods */}

                <h2 className="mb-8">Output</h2>
                {daily.map((singleDaily, index: number) => (
                  <ul key={index}>
                    {singleDaily.food && (
                      <li key={index}>{singleDaily.food}</li>
                    )}
                  </ul>
                ))}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
