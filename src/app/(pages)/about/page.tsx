
import { AnimatedBeamDemo } from "@/components/AnimatedBeam";
import { FocusCardsDemo } from "@/components/FocusCards";
import Footer from "@/components/Footer";
import MobNav from "@/components/MobNav";
import MobileNav from "@/components/MobileNav";
import { NavbarDemo } from "@/components/Navbar";
import { TextGenerateEffectDemo } from "@/components/TextGenerate";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const About = () => {
  return (
    <>
      <div className="sm:hidden">
        <NavbarDemo />
      </div>
      <div className="sm:block 2xl:hidden">
        {/* <MobileNav /> */}
        <MobNav />
      </div>

      <div className="h-full  w-full">
        <div
          // style={{ backgroundImage: "url('/AboutPage.jpg')" }}
          className=" sm:hidden light bg-[#00000036]  bg-blend-multiply bg-fixed bg-no-repeat bg-contain"
        >


          <section className="text-white  md:py-[10rem] lg:py-[8rem] py-[5rem] flex flex-col items-center justify-center text-justify px-6 md:px-10 lg:px-20">

            <div className="bg-[#000] my-10 backdrop-blur-lg border border-gray-400 border-opacity-30 shadow-lg rounded-xl p-6 w-full">
              <main className="flex flex-col justify-center items-center gap-10 mb-20">
                <div className="font-light mt-5 text-7xl  font-SpaceAge  md:text-xl text-end mb-5">CYBERIA  <p className="text-xs font-Poppins  ">Unleash the geek within</p> </div>
                <div className="leading-8 ">
                  <div className="pb-20">
                    <AnimatedBeamDemo />
                  </div>
                  <div className="m-[100px]">            
            <div className="flex flex-col gap-3">              
              <Accordion type="single" defaultValue="item-1" >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-3xl font-Poppins">About Cyberia</AccordionTrigger>
                  <AccordionContent className="text-[#b7b8b8] text-sm">
                  Welcome to Cyberia 2024, the premier tech fest organized by the Department of Computer Applications (DCA), where technology meets creativity and innovation ignites possibilities. Cyberia is more than just an event; it's a celebration of ideas, knowledge, and the limitless potential of technology.

Dive into a world of opportunities with thrilling coding marathons, competitive hackathons, and captivating tech challenges designed to push the boundaries of innovation. Engage with industry experts through insightful tech talks and hands-on workshops that explore the latest trends and breakthroughs in the ever-evolving tech landscape.

Cyberia is the perfect platform for students, tech enthusiasts, and innovators to showcase their talents, collaborate with peers, and experience the excitement of cutting-edge advancements. Whether you're a tech wizard, a budding entrepreneur, or simply curious about the digital frontier, Cyberia has something to offer for everyone.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-start no-underline  text-2xl">About the DCA</AccordionTrigger>
                  <AccordionContent className="text-[#b7b8b8] text-sm">
                  The Department of Computer Applications (DCA) at The Maharaja Sayajirao University of Baroda stands at the forefront of academic excellence, innovation, and technological advancement. Established with the vision of nurturing skilled professionals and leaders in the realm of computing, the department offers a dynamic blend of theoretical foundations and practical expertise, empowering students to excel in the ever-evolving tech industry.

DCA provides a robust academic environment with cutting-edge curricula, state-of-the-art infrastructure, and a faculty team comprising experienced educators and industry experts. The department focuses on fostering analytical thinking, creative problem-solving, and innovation through a wide array of programs, including undergraduate, postgraduate, and research opportunities in computer applications and technology.

Beyond academics, the department encourages students to engage in interdisciplinary projects, participate in tech-driven events like Cyberia, and develop a holistic perspective on technology's role in society. With a strong emphasis on research and collaboration, DCA consistently contributes to advancements in areas like artificial intelligence, data science, software engineering, and cybersecurity
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-start no-underline  text-2xl">Faculty of Science</AccordionTrigger>
                  <AccordionContent className="text-[#b7b8b8] text-sm">
                  The Faculty of Science at The Maharaja Sayajirao University of Baroda is a hub of innovation and research. With a focus on interdisciplinary learning, the faculty offers a range of undergraduate, postgraduate, and doctoral programs. The faculty is committed to fostering a culture of curiosity and collaboration, nurturing the next generation of scientists and researchers.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-start no-underline  text-xl">The Maharaja Sayajirao University of Baroda</AccordionTrigger>
                  <AccordionContent className="text-[#b7b8b8] text-sm">
                  The Maharaja Sayajirao University of Baroda is a premier institution of higher learning in Vadodara, Gujarat. Established in 1949, the university has a rich history of academic excellence and innovation. With a focus on holistic education, the university offers a wide range of undergraduate, postgraduate, and doctoral programs across various disciplines. The university is committed to fostering a culture of innovation, research, and social responsibility.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            </div>
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

        <div  className="sm:flex pb-20 md:hidden lg:hidden 2xl:hidden xl:hidden  justify-start  flex-col  items-center h-full bg-[#0e0f0f] w-full">
          <div className="m-[100px]">
            <h1 className="text-6xl font-SpaceAge">CYBERIA <p className="text-xs text-end font-Poppins">Unleash the geek within</p> </h1>
            <div className="pb-20">
              <AnimatedBeamDemo />
            </div>
            <div className="flex flex-col gap-3">              
              <Accordion type="single" defaultValue="item-1" >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-3xl font-Poppins">About Cyberia</AccordionTrigger>
                  <AccordionContent className="text-[#b7b8b8] text-sm">
                  Know more about Cyberia 2024, the Department of Computer Applications, Faculty of Science, and The Maharaja Sayajirao University of Baroda. Cyberia provides an arena for the youth of today and serve as a platform to exhibit their technical acumen to the world and compete with like-minded peers.platform to exhibit their technical acumen to the world and compete with like-minded peers.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-start no-underline  text-2xl">About the DCA</AccordionTrigger>
                  <AccordionContent className="text-[#b7b8b8] text-sm">
                  At The Maharaja Sayajirao University of Baroda, the Department of Computer Applications offers a transformative Bachelor of Computer Applications (BCA) & Master of Science (Information Technology) (MSc. IT) programs. Seamlessly integrating theory with hands-on experience, the department's expert faculty guides. By forging strong industry connections, including internships and guest lectures, the department ensures students are equipped not just to navigate the tech landscape, but to shape its future with innovation.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-start no-underline  text-2xl">Faculty of Science</AccordionTrigger>
                  <AccordionContent className="text-[#b7b8b8] text-sm">
                  The Faculty of Science at The Maharaja Sayajirao University of Baroda is a hub of innovation and research. With a focus on interdisciplinary learning, the faculty offers a range of undergraduate, postgraduate, and doctoral programs. The faculty is committed to fostering a culture of curiosity and collaboration, nurturing the next generation of scientists and researchers.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-start no-underline  text-xl">The Maharaja Sayajirao University of Baroda</AccordionTrigger>
                  <AccordionContent className="text-[#b7b8b8] text-sm">
                  The Maharaja Sayajirao University of Baroda is a premier institution of higher learning in Vadodara, Gujarat. Established in 1949, the university has a rich history of academic excellence and innovation. With a focus on holistic education, the university offers a wide range of undergraduate, postgraduate, and doctoral programs across various disciplines. The university is committed to fostering a culture of innovation, research, and social responsibility.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            </div>
          </div>
            <div className=" grid grid-cols-1 gap-5 place-items-center grid-rows-3 h-full  w-full">
              <div className="flex flex-col  w-11/12 rounded-sm h-[50vh] border border-white/[0.2]">
                <div className="h-3/4  p-5 w-full">
                      <img src="/Pics/HariBhai.png" className="h-full rounded-md w-full object-contain" alt="" />
                </div>
                <div className="h-1/4 flex gap-1 flex-col items-center justify-center p-3 w-full">
                      <h1 className="text-xl font-Poppins">Patron</h1>
                      <h1 className="text-md font-extralight font-Poppins">Prof. Haribhai Kataria</h1>
                      <h1 className="text-xs font-thin text-[#b7b8b8] font-Poppins">(Dean) Faculty Of Science</h1>
                </div>
              </div>              
              <div className="flex flex-col  w-11/12 rounded-sm h-[50vh] border border-white/[0.2]">
                <div className="h-3/4  p-5 w-full">
                      <img src="/Pics/P_K_Mehta.jpeg" className="h-full rounded-md w-full object-contain" alt="" />
                </div>
                <div className="h-1/4 flex gap-1 flex-col items-center justify-center p-3 w-full">
                      <h1 className="text-xl font-Poppins">Cyberia Head Personal</h1>
                      <h1 className="text-md font-extralight font-Poppins">Prof. Prashant K. Mehta</h1>
                      <h1 className="text-xs font-thin text-[#b7b8b8] font-Poppins">(HOD) Dept. Computer Application</h1>
                </div>
              </div>              
              <div className="flex flex-col  w-11/12 rounded-sm h-[50vh] border border-white/[0.2]">
                <div className="h-3/4  p-5 w-full">
                      <img src="/Pics/V_K_Shrivastava.png" className="h-full rounded-md w-full object-contain" alt="" />
                </div>
                <div className="h-1/4 flex gap-1 flex-col items-center justify-center p-3 w-full">
                      <h1 className="text-xl font-Poppins">Cyberia Organizing Committee</h1>
                      <h1 className="text-md font-extralight font-Poppins">Prof. Vijay Kumar Srivastava</h1>
                      <h1 className="text-xs font-thin text-[#b7b8b8] font-Poppins">Vice Chancellor</h1>
                </div>
              </div>              
            </div>
        </div>
      </div>
    </>
  );
};

export default About;
