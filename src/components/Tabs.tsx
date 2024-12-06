"use client";

import { Tabs } from "./ui/tabs2";
import { CardHoverEffectDemo, CardHoverEffectDemo2, CardHoverEffectDemo3 } from "./EventCard";

export function TabsDemo() {
  const tabs = [    
    {
      title: "Technical",
      value: "services",
      content: (
        <div className="w-full z-50 sm:h-[300vh] absolute overflow-x-hidden mb-28 h-[200vh]  pb-10 rounded-2xl p-10 text-xl md:text-4xl font-bold backdrop-blur-2xl border border-white/10 shadow-2xl text-white bg-[#0000003f]">
          <p>Technical Events</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Non Technical",
      value: "playground",
      content: (
        <div className="w-full z-50 absolute overflow-x-hidden mb-28 h-[200vh]  pb-10 rounded-2xl p-10 text-xl md:text-4xl font-bold backdrop-blur-2xl border border-white/10 shadow-2xl text-white bg-[#0000003f]">
          <p>Non Technical  Events</p>
          <DummyContent2 />
        </div>
      ),
    },    
    {
      title: "Work Shops",
      value: "workshops",
      content: (
        <div className="w-full z-50 absolute overflow-x-hidden mb-28 h-[200vh]  pb-10 rounded-2xl p-10 text-xl md:text-4xl font-bold backdrop-blur-2xl border border-white/10 shadow-2xl text-white bg-[#0000003f]">
          <p>Work Shops</p>
          <DummyContent3 />
        </div>
      ),
    },    
  ];

  return (
    <div className="h-[200vh] z-50 overflow-y-scroll  overflow-x-hidden  md:h-full    flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mt-42">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="h-full">
        <CardHoverEffectDemo/>
    </div>
  );
};

const DummyContent2 = () => {
  return (
    <div className="h-full">
        <CardHoverEffectDemo2/>
    </div>
  );
};

const DummyContent3 = () => {
  return (
    <div className="h-full">
        <CardHoverEffectDemo3/>
    </div>
  );
};
