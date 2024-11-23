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

      <div className=" sm:h-[300vh] 2xl:h-[220vh] w-full  flex flex-col">
        <div
          // style={{ backgroundImage: "url('/eventsbg.jpg')" }}
          className="  border-b-[1px] border-white/[0.2] overflow-y-scroll  sm:p-0 2xl:bg-gradient-to-b from-black to-[#141516]  inset-0 flex flex-col h-full sm:h-full  "
        >
          <div className="mb-10 flex flex-col  h-full">
            <TabsDemo />
          </div>
          <br />         
        </div>
      </div>
    </>
  );
};

export default Events;
