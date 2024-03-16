import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion/dist/framer-motion";
import { useRef } from "react";

let randomProducts = [
  {
    title:
      "Ninja Your Way to the Top: 7 Tips I Wish I knew for Crushing It in Your Tech Career",
    link: "https://medium.com/@ibrahim.rahhal/ninja-your-way-to-the-top-10-tips-i-wish-i-knew-for-crushing-it-in-your-tech-career-4960b7d58b44",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*F1ykAO-bxYJOGPsf1E0-SA.jpeg",
  },
  {
    title: "Speeding Up Webpack Build: Our Success Story of +95% Faster Builds",
    link: "https://medium.com/@ibrahim.rahhal/speeding-up-webpack-build-times-our-success-story-of-95-faster-builds-55a4742d6ad3",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*9iEPquU8Agmct3lnx93nzw.png",
  },
  {
    title: "Why Algorithms are Equally Important for Front-End Engineers",
    link: "https://medium.com/@ibrahim.rahhal/why-algorithms-are-equally-important-for-front-end-engineers-10938a2aa568",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*eEvfi8if4B27aaGt6BvaPw.png",
  },
  {
    title: "Unleashing the Power of JavaScript ASTs",
    link: "https://medium.com/@ibrahim.rahhal/unleashing-the-power-of-javascript-asts-fb727d9fe34f",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1104/format:webp/1*BZzNxq2jwR_-ulE4I2kR7Q.jpeg",
  },
  {
    title: "The Complete Webpack Guide for Beginners",
    link: "https://medium.com/@ibrahim.rahhal/the-complete-webpack-guide-for-beginners-9a15838bc6d3",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*8WOdmW70J2UXnAAm3CNMuQ.jpeg",
  },
];

randomProducts = [...randomProducts, ...randomProducts, ...randomProducts];
export default function ReadingSection({ key }: { key: number }) {
  return (
    <div className="mt-80">
      <HeroParallax products={randomProducts} />
    </div>
  );
}
const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold ">
        Discover the joy <br /> of reading with me.
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8">
        Step into my realm of advanced tech insights and leadership wisdom. As a
        technical lead, I navigate complex topics with ease, offering tips and
        strategies to excel in the ever-changing tech landscape.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: any;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl ">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
