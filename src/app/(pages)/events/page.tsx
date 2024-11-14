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

      <div className="h-full w-full pb-10 flex flex-col">
        <div
          // style={{ backgroundImage: "url('/eventsbg.jpg')" }}
          className="absolutebg-[#00000036] bg-blend-multiply inset-0 flex flex-col h-[200vh] bg-fixed bg-cover bg-center"
        >
          <div className="mb-10px flex-grow">
            <TabsDemo />
          </div>
          <br />         
        </div>
      </div>
    </>
  );
};

export default Events;
