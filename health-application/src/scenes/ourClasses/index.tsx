import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/food-slide/food1.jpg";
import image2 from "@/assets/food-slide/food2.jpg";
import image3 from "@/assets/food-slide/food3.jpg";
import image4 from "@/assets/food-slide/food4.jpg";
import image5 from "@/assets/food-slide/food5.jpg";
import image6 from "@/assets/food-slide/food6.jpg";
import { motion } from "framer-motion";
import Class from "./Class";
import Htext from "@/shared/Htext";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam, ullam a consequuntur impedit quidem corrupti nulla. Odio eum eveniet tempore aliquid nesciunt laudantium ipsam. Alias eum repudiandae delectus cum?",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam, ullam a consequuntur impedit quidem corrupti nulla. Odio eum eveniet tempore aliquid nesciunt laudantium ipsam. Alias eum repudiandae delectus cum?",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam, ullam a consequuntur impedit quidem corrupti nulla. Odio eum eveniet tempore aliquid nesciunt laudantium ipsam. Alias eum repudiandae delectus cum?",
    image: image4,
  },
  {
    name: "Fittness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam, ullam a consequuntur impedit quidem corrupti nulla. Odio eum eveniet tempore aliquid nesciunt laudantium ipsam. Alias eum repudiandae delectus cum?",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section className="w-full bg-primary-100 py-40" id="ourclasses">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <Htext>
              Start building a healthier lifestyle today
              <p className="py-5 text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
                doloremque nobis iste at similique a rerum praesentium iusto,
                iure incidunt odio velit inventore explicabo esse atque alias
                corporis unde placeat.
              </p>
            </Htext>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="h-[360px] w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
