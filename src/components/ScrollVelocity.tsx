import { VelocityScroll } from "./ui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="Innovating Without Limits"
      default_velocity={5}
      className="font-display  text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-xl md:leading-[5rem]"
    />
  );
}
