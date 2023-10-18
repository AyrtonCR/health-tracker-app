import Htext from "@/shared/Htext";
import { SelectedPage, BenefitType } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/shared/ActionButton";
motion;

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae nesciunt nemo voluptate perspiciatis cum temporibus nisi debitis dolor adipisci reprehenderit dicta, assumenda possimus expedita commodi ipsa voluptates. Eligendi, placeat repudiandae!",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100s of diverse classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae nesciunt nemo voluptate perspiciatis cum temporibus nisi debitis dolor adipisci reprehenderit dicta, assumenda possimus expedita commodi ipsa voluptates. Eligendi, placeat repudiandae!",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and pro trainers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae nesciunt nemo voluptate perspiciatis cum temporibus nisi debitis dolor adipisci reprehenderit dicta, assumenda possimus expedita commodi ipsa voluptates. Eligendi, placeat repudiandae!",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext>More than just a gym</Htext>
          <p className="my-5 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet autem
            laboriosam quae, maiores ducimus provident voluptatum nostrum
            aspernatur unde non consequuntur minima explicabo, dolore odio
            ratione perspiciatis consectetur aliquam! Adipisci!
          </p>
        </motion.div>
        {/* Benefits */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
          s
        </motion.div>
        {/*  Graphics and Description*/}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* Description */}
          <div>
            {/* Title */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Htext>
                    Millions of Happy Members getting {""}
                    <span className="text-primary-500">FIT</span>
                  </Htext>
                </motion.div>
              </div>
            </div>
            {/* Description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem obcaecati eligendi, assumenda quidem adipisci
                quibusdam ea laudantium iure voluptas, officiis ducimus
                possimus. Accusamus cumque totam, incidunt at fugit quis
                accusantium?
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
                quisquam? Aspernatur amet, cumque necessitatibus nostrum
                consectetur a natus temporibus eos aperiam laudantium fugiat
                inventore dignissimos asperiores quasi quisquam pariatur?
                Cupiditate?
              </p>
            </motion.div>
            {/* Button */}
            <div className="relative mt-16">
              <div className="content:sparkles before:absolute before:-bottom-20 before:right-40 before:z-[-1]">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
