import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import Link from "next/link";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden h-full dark:bg-transparent bg-white w-full">
      <MacbookScroll
        title={
          <span>
            Our Sponsors <br />
          </span>
        }
        badge={
          <Link href="/">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        src={`/`}
        showGradient={false}
      />
    </div>
  );
}
// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return (
    <img src="/Logo/CyberiaLogo.png" className="h-8" alt="" />
  );
};
