import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { MotionH1 } from "../MotionComponents";

const Hero = () => {
  return (
    <HeroHighlight containerClassName="bg-base-background">
      <MotionH1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="mx-auto max-w-4xl px-4 text-center text-2xl font-bold leading-relaxed text-white md:text-4xl lg:text-5xl lg:leading-snug "
      >
        With insomnia, nothing&apos;s real. Everything is far away. Everything
        is a{" "}
        <Highlight className=" text-gray-900">
          copy, of a copy, of a copy.
        </Highlight>
      </MotionH1>
    </HeroHighlight>
  );
};

export default Hero;
