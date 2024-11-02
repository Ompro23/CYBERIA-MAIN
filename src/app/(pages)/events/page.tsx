import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { NavbarDemo } from "@/components/Navbar";
import { TabsDemo } from "@/components/Tabs";

const Events = () => {
  return (
    <>
      <div className="sm:hidden">
        <NavbarDemo />
      </div>
      <div className="sm:block 2xl:hidden">
        <MobileNav />
      </div>

      <div className="h-full w-full ">
        <div
          style={{ backgroundImage: "url('/eventsbg.jpg')" }}
          className="absolute bg-[#0000008d] bg-blend-multiply inset-0 flex flex-col  h-[150vh] z-0 bg-fixed bg-cover bg-center"
        >
          
         <TabsDemo/>
        </div>
      </div>
       
       
    </>
  );
};

export default Events;
