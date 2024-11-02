"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs2";
import { CardHoverEffectDemo, CardHoverEffectDemo2 } from "./EventCard";

export function TabsDemo() {
  const tabs = [    
    {
      title: "Technical",
      value: "services",
      content: (
        <div className="w-full overflow-auto relative h-auto mb-28 rounded-2xl p-10 text-xl md:text-4xl font-bold backdrop-blur-2xl border border-white/10 shadow-2xl text-white bg-[#0000003f]">
          <p>Technical Events</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Non Technical",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden mb-28 relative h-auto rounded-2xl p-10 text-xl md:text-4xl font-bold backdrop-blur-2xl border border-white/10 shadow-2xl text-white bg-[#0000003f]">
          <p>Non Technical  Events</p>
          <DummyContent2 />
        </div>
      ),
    },    
  ];

  return (
    <div className="h-[20rem] my-40 md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-42">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <div>
        <CardHoverEffectDemo/>
    </div>
  );
};

const DummyContent2 = () => {
  return (
    <div>
        <CardHoverEffectDemo2/>
    </div>
  );
};
