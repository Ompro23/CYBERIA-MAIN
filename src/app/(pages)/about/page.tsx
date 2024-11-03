import { AnimatedBeamDemo } from "@/components/AnimatedBeam";
import { FocusCardsDemo } from "@/components/FocusCards";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { NavbarDemo } from "@/components/Navbar";
import { TextGenerateEffectDemo } from "@/components/TextGenerate";

const About = () => {
  return (
    <>
      <div className="sm:hidden">
        <NavbarDemo />
      </div>
      <div className="sm:block 2xl:hidden">
        <MobileNav />
      </div>

      <div className="h-full  w-full">
        <div
          style={{ backgroundImage: "url('/AboutPage.jpg')" }}
          className="z-1000 light bg-[#0000007d]  bg-blend-multiply bg-fixed bg-no-repeat bg-cover"
        >
          

          <section className="text-white  md:py-[10rem] lg:py-[8rem] py-[5rem] flex flex-col items-center justify-center text-justify px-6 md:px-10 lg:px-20">    
      
      <div className="bg-[#00000036] my-10 backdrop-blur-lg border border-gray-400 border-opacity-30 shadow-lg rounded-3xl p-6 w-full">
        <main className="flex flex-col justify-center items-center gap-10 mb-20">
            <h2 className="font-light mt-5 text-5xl  font-SpaceAge  md:text-xl text-end mb-5"><TextGenerateEffectDemo/>  <p className="text-xs font-Poppins  ">Unleash the geek within</p> </h2>
          <div className="leading-8 ">
            <div className="pb-20">
            <AnimatedBeamDemo/>
            </div>
            <div className="leading-8">

            <p className="typing-animation">
            <h2 className="font-semibold text-2xl md:text-xl mb-5">
              
              
            </h2>
                 Know more about Cyberia 2024, the Department of Computer Applications, Faculty of Science, and The Maharaja Sayajirao University of Baroda.
            </p>
            </div>
          </div>

          {/* <div className="leading-8">
            <h2 className="font-semibold text-2xl md:text-xl mb-5">
              About Cyberia :
            </h2>
            <p>
            Cyberia provides an arena for the youth of today and serve as a
                  platform to exhibit their technical acumen to the world and
                  compete with like-minded peers.platform to exhibit their technical acumen to the world and
                  compete with like-minded peers.
            </p>
          </div> */}

          

{/* <div className="leading-8" >
            <h2 className="font-semibold text-2xl md:text-xl mb-5 ">
              About Cyberia :
            </h2>
            <p>
            Cyberia provides an arena for the youth of today and serve as a
            platform to exhibit their technical acumen to the world and
                  compete with like-minded peers.platform to exhibit their technical acumen to the world and
                  compete with like-minded peers.
            </p>
          </div> */}

          <div className="leading-8">
            <h2 className="font-semibold text-2xl md:text-xl mb-5">
              About the Department of Computer Applications : 
            </h2>
            <p>
              At The Maharaja Sayajirao University of Baroda, the Department
              of Computer Applications offers a transformative Bachelor of
              Computer Applications (BCA) & Master of Science (Information
              Technology) (MSc. IT) programs. Seamlessly integrating theory
              with hands-on experience, the department's expert faculty
              guides. By forging strong industry connections, including
              internships and guest lectures, the department ensures students
              are equipped not just to navigate the tech landscape, but to
              shape its future with innovation.
            </p>
          </div>

          <div className="leading-8">
            <h2 className="font-semibold text-2xl md:text-xl mb-5">
              About Faculty of Science : 
            </h2>
            <p>
              The Faculty of Science at The Maharaja Sayajirao University of
              Baroda is a hub of innovation and research. With a focus on
              interdisciplinary learning, the faculty offers a range of
              undergraduate, postgraduate, and doctoral programs. The faculty
              is committed to fostering a culture of curiosity and
              collaboration, nurturing the next generation of scientists and
              researchers.
            </p>
          </div>

          <div className="leading-8">
            <h2 className="font-semibold text-2xl md:text-xl mb-5">
              About the Maharaja Sayajirao University of Baroda : 
            </h2>
            <p>
              The Maharaja Sayajirao University of Baroda is a premier
              institution of higher learning in Vadodara, Gujarat. Established
              in 1949, the university has a rich history of academic
              excellence and innovation. With a focus on holistic education,
              the university offers a wide range of undergraduate,
              postgraduate, and doctoral programs across various disciplines.
              The university is committed to fostering a culture of
              innovation, research, and social responsibility.
            </p>
          </div>
          <div className="leading-8">
            <h2 className="font-semibold text-2xl md:text-xl mb-5">
            About Cyberia : 
            </h2>
            <p>
            Cyberia provides an arena for the youth of today and serve as a
            platform to exhibit their technical acumen to the world and
            compete with like-minded peers.platform to exhibit their technical acumen to the world and
            compete with like-minded peers.
            </p>
          </div>
          

        </main>
      </div>
                          
        <footer className="flex justify-between w-full mt-10 flex-wrap lg:justify-center lg:gap-5">
        <div className="bg-[#00000036]  backdrop-blur-lg border border-gray-400  bg-opacity-20 border-opacity-30 shadow-lg rounded-xl p-6 mt-10 leading-8">
          
          <h2 className="font-bold text-lg">Cyberia Organizing Committee</h2>
          <div className="grid gap-2">
            <a>Prof. Vijay Kumar Srivastava</a>
            <p className="text-gray-400">Vice Chancellor</p>
            <img
              src={"/Pics/V_K_Shrivastava.png"}
              className="w-[300px] h-[300px] shadow-sm rounded-xl mt-4"
            />
    
          </div>
        </div>
         
          <div className="bg-[#00000036]  backdrop-blur-lg border border-gray-400  bg-opacity-20 border-opacity-30 shadow-lg rounded-xl p-6 mt-10 leading-8">
            <h2 className="font-bold text-lg">Patron</h2>
            <div className="grid gap-2">
              <a>Prof. Haribhai Kataria</a>
              <p className="text-gray-400">(Dean) Faculty Of Science</p>
              <img
                src={"/Pics/HariBhai.png"}
                className="w-[300px] h-[300px] shadow-sm rounded-xl mt-4"
              />
            </div>
          </div>
          
          <div className="bg-[#00000036]   backdrop-blur-lg border border-gray-400  border-opacity-30 shadow-lg rounded-xl p-6 mt-10 leading-8">
            <h2 className="font-bold text-lg">Cyberia Head Personal</h2>
            <div className="grid gap-2">
              <a>Prof. Prashant K. Mehta</a>
              <p className="text-gray-400">(HOD) Dept. Computer Application</p>
              <img
                src={"/Pics/P_K_Mehta.jpeg"}
                className=" w-[300px] h-[300px] shadow-sm rounded-xl mt-4"
              />
            </div>
          </div>
          
        </footer>        
      </section>
      
        </div>
      </div>
    </>
  );
};

export default About;
