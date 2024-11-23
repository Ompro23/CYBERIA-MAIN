import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "REGISTRATIONS ARE OPENED",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "REGISTRATIONS ARE OPENED",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "REGISTRATIONS ARE OPENED",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "REGISTRATIONS ARE OPENED",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "REGISTRATIONS ARE OPENED",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "REGISTRATIONS ARE OPENED",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  
  body,
}: {
 
  body: string;
}) => {
  return (
    <figure      
    >      
      <blockquote className="mt-2 2xl:text-lg xl:text-lg 2xl:font-normal font-Poppins sm:text-sm">{body}</blockquote>
    </figure>
  );
};
export function MarqueeDemo() {
  return (
    <div className="relative flex h-[100px] mt-10 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent md:shadow-xl transform rotate-x-3 perspective-1000">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
