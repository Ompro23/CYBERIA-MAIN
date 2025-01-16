import Footer from "@/components/Footer";
import MobNav from "@/components/MobNav";
import { NavbarDemo } from "@/components/Navbar";
import { TabsDemo } from "@/components/Tabs";

const Events = () => {
  return (
    <>
      <div className="sm:hidden">
        <NavbarDemo />
      </div>
      <div className="sm:block 2xl:hidden">
        <MobNav />
      </div>

      <div className=" sm:h-full h-full 2xl:h-full w-full  flex flex-col">
        <div
          // style={{ backgroundImage: "url('/eventsbg.jpg')" }}
          className="border-b-[1px]   mt-10  border-white/[0.2] overflow-y-scroll  sm:p-0 2xl:bg-gradient-to-b from-black to-[#141516]  inset-0 flex flex-col h-full sm:h-full  "
        >
          <h1 className="text-center w-full text-3xl  absolute  mt-24 ">
            Registrations closing on 10th Feb
          </h1>
          <div className="mb-10  h-[200vh] relative flex  flex-col z-0">
            <TabsDemo />
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default Events;
