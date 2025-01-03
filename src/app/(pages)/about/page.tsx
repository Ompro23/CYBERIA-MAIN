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
} from "@/components/ui/accordion";

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
                <div className="font-light mt-5 text-7xl  font-SpaceAge  md:text-xl text-end mb-5">
                  CYBERIA{" "}
                  <p className="text-xs font-Poppins  ">
                    Unleash the geek within
                  </p>{" "}
                </div>
                <div className="leading-8 ">
                  <div className="pb-20">
                    <AnimatedBeamDemo />
                  </div>
                  <div className="m-[100px]">
                    <div className="flex flex-col gap-3">
                      <Accordion type="single" defaultValue="item-1">
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-3xl font-Poppins">
                            About Cyberia
                          </AccordionTrigger>
                          <AccordionContent className="text-[#b7b8b8] text-sm">
                            Welcome to Cyberia 2024, the premier tech fest
                            organized by the Department of Computer Applications
                            (DCA), where technology meets creativity and
                            innovation ignites possibilities. Cyberia is more
                            than just an event; it's a celebration of ideas,
                            knowledge, and the limitless potential of
                            technology. Dive into a world of opportunities with
                            thrilling coding marathons, competitive hackathons,
                            and captivating tech challenges designed to push the
                            boundaries of innovation. Engage with industry
                            experts through insightful tech talks and hands-on
                            workshops that explore the latest trends and
                            breakthroughs in the ever-evolving tech landscape.
                            Cyberia is the perfect platform for students, tech
                            enthusiasts, and innovators to showcase their
                            talents, collaborate with peers, and experience the
                            excitement of cutting-edge advancements. Whether
                            you're a tech wizard, a budding entrepreneur, or
                            simply curious about the digital frontier, Cyberia
                            has something to offer for everyone.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-start no-underline  text-2xl">
                            About the DCA
                          </AccordionTrigger>
                          <AccordionContent className="text-[#b7b8b8] text-sm">
                            The Department of Computer Applications (DCA) at The
                            Maharaja Sayajirao University of Baroda stands at
                            the forefront of academic excellence, innovation,
                            and technological advancement. Established with the
                            vision of nurturing skilled professionals and
                            leaders in the realm of computing, the department
                            offers a dynamic blend of theoretical foundations
                            and practical expertise, empowering students to
                            excel in the ever-evolving tech industry. DCA
                            provides a robust academic environment with
                            cutting-edge curricula, state-of-the-art
                            infrastructure, and a faculty team comprising
                            experienced educators and industry experts. The
                            department focuses on fostering analytical thinking,
                            creative problem-solving, and innovation through a
                            wide array of programs, including undergraduate,
                            postgraduate, and research opportunities in computer
                            applications and technology. Beyond academics, the
                            department encourages students to engage in
                            interdisciplinary projects, participate in
                            tech-driven events like Cyberia, and develop a
                            holistic perspective on technology's role in
                            society. With a strong emphasis on research and
                            collaboration, DCA consistently contributes to
                            advancements in areas like artificial intelligence,
                            data science, software engineering,
                            and cybersecurity
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-start no-underline  text-2xl">
                            Faculty of Science
                          </AccordionTrigger>
                          <AccordionContent className="text-[#b7b8b8] text-sm">
                          Faculty of Science, Maharaja Sayajirao University of Baroda

The <b>Faculty of Science</b> at the Maharaja Sayajirao University (MSU) of Baroda, located in Vadodara, Gujarat, is one of the premier institutions in India for scientific education, research, and innovation. Established in **1949**, the Faculty of Science has a long-standing legacy of excellence in nurturing scientific minds and advancing knowledge in various disciplines of science.
<p className="mt-5"></p>
<b>Departments and Courses</b> <br />
The faculty encompasses a wide range of departments, each offering undergraduate, postgraduate, and doctoral programs:
<br />
1. Botany: Specializes in plant sciences, environmental studies, and biodiversity research.  <br />
2. Chemistry: Renowned for its advanced research in organic, inorganic, physical, and analytical chemistry. <br />
3. Geology: Offers expertise in earth sciences, mineralogy, and sustainable resource management. <br />
4. Mathematics: Focuses on pure and applied mathematics, fostering analytical and problem-solving skills. <br />
5. Physics: Engages in cutting-edge research in quantum mechanics, astrophysics, and material sciences. <br />
6. Statistics: Prepares students for data analysis, computational statistics, and emerging fields like data science. <br />
7. Zoology: Covers animal biology, wildlife studies, and biotechnology applications. <br />
8. Environmental Science**: Dedicated to addressing modern ecological challenges and sustainability. <br />
9.Biochemistry: Combines biology and chemistry to explore molecular mechanisms of life processes. <br />
<p className="mt-5"></p>
<b>Research and Innovation</b> <br />
The Faculty of Science is recognized for its significant contributions to research in both fundamental and applied sciences. It boasts state-of-the-art laboratories, research centers, and collaborations with national and international institutions. The faculty actively engages in projects funded by agencies such as **CSIR**, **UGC**, **DBT**, and **DST**, contributing to fields like nanotechnology, genetics, environmental conservation, and renewable energy.
<p className="mt-5"></p>
<b>Infrastructure</b> <br />
The faculty is equipped with:
- Modern lecture halls and laboratories.
- Specialized research facilities, including high-performance computing systems and spectroscopy labs.
- A dedicated science library with access to numerous journals, publications, and digital resources.
<p className="mt-5"></p>
<b>Student Life and Opportunities</b> <br />
Students at the Faculty of Science enjoy a vibrant academic environment with opportunities for:
- Participation in seminars, workshops, and conferences.
- Internships and collaborations with industries and research organizations.
- Extracurricular activities and science clubs fostering holistic development.

#### Achievements and Alumni
The alumni of the Faculty of Science have gone on to make remarkable contributions to academia, industry, and government sectors. Many have become distinguished scientists, educators, and entrepreneurs, furthering the institution's reputation globally.

#### Vision and Mission
The Faculty of Science at MSU Baroda remains committed to:
- Promoting scientific temper and critical thinking.
- Encouraging interdisciplinary approaches to solving complex global challenges.
- Producing skilled professionals and researchers who contribute to societal and scientific advancements.

With its legacy of excellence, dynamic learning environment, and forward-looking approach, the Faculty of Science continues to inspire and empower future generations of scientists.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-start no-underline  text-xl">
                            The Maharaja Sayajirao University of Baroda
                          </AccordionTrigger>
                          <AccordionContent className="text-[#b7b8b8] text-sm">
                    The Maharaja Sayajirao University of Baroda is a premier
                    institution of higher learning in Vadodara, Gujarat.
                    Established in 1949, the university has a rich history of
                    academic excellence and innovation. With a focus on holistic
                    education, the university offers a wide range of
                    undergraduate, postgraduate, and doctoral programs across
                    various disciplines. The university is committed to
                    fostering a culture of innovation, research, and social
                    responsibility. 
                    <p className="mt-5" ></p>
                    The idea of establishing a University at Baroda had engaged the attention of the Government of the former State of Baroda and its educational advisors long before the question of regional universities and decentralization, reorganization and reconditioning of higher education to suit the cultural educational needs of areas had taken root in the country. The concept was first visualized by Dr. Jackson, when, as Principal of the Baroda College in the 1908, he advocated the establishment of a Science Institute at Baroda on an improved and independent basis. It was a consistent policy of the Government of Baroda to subject its educational system to periodical inquiries of an exploratory nature by educational experts of international fame, because of which the first Commission was appointed in 1909. The principal recommendation of that Commission was to expand the activities of the Baroda College by establishing additional chairs in new branches of knowledge. As a result of this policy of chalking out untrodden paths in higher education and thereby evolving a university atmosphere in Baroda, chairs of Comparative Region and Household Science were instituted. Prof. Widgery and Mrs. Strong were appointed to hold these chairs.

In 1916, the educational policy of the State was again reviewed. As a part of this inquiry, one of the members of the Commission, Shri S. V. Mukerjea, prepared minutes of recommendations and in his note, he advocated the establishment of a University at Baroda. In 1919 the matter was brought to the forefront by the appointment of yet another Committee consisting of the late Principal Clarke, Prof. Widgery and Shri N. K. Dixit, the then Educational Commissioner of the State. The Committee drew up an elaborate report in favor of civic University at Baroda. Thereafter, Prof. P. Sheshadri of the Benares Hindu University was requested to lay out a scheme for a University at Baroda. Prof. Widgery also submitted a scheme for a State University on the lines of the smaller German Universities. During this period, Her Highness Shrimant Maharani Chimnabai Saheb, the Maharani Gaekwad of Baroda, offered a princely donation for run

      <p className="mt-5">
        
      </p>
      The University Song of MSU Baroda was composed by Prof. Chandravadan Chimanlal Mehta (6th April 1901 – 4th May 1991), popularly known as C. C. Mehta. He was a Gujarati playwright, theatre critic, bibliographer, poet, story writer, autobiographer, travel writer and broadcaster from Vadodara, Gujarat, India.

he was associated with the performing arts departments of the Maharaja Sayajirao University of Baroda. He pioneered the theatre education in India and started diploma and degree courses in theatre in the Maharaja Sayajirao University of Baroda. He represented India in the international theatre fora.

In 1962, he was awarded the Padma Shri by the Government of India. He won the 1971 Sahitya Akademi Award for Gujarati language for his autobiographical travelogue Natya Gathariyan. He was also awarded the Sangeet Natak Akademi Award for playwriting in Gujarati in 1971. In 1984, he was awarded the Sangeet Natak Akademi Fellowship, the highest honour conferred by the Sangeet Natak Akademi. He received Sahitya Gaurav Puraskar for the year 1991.
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
                <h2 className="font-bold text-lg">
                  Cyberia Organizing Committee
                </h2>
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
                  <p className="text-gray-400">
                    (HOD) Dept. Computer Application
                  </p>
                  <img
                    src={"/Pics/P_K_Mehta.jpeg"}
                    className=" w-[300px] h-[300px] shadow-sm rounded-xl mt-4"
                  />
                </div>
              </div>
            </footer>
          </section>
        </div>

        <div className="sm:flex pb-20 md:hidden lg:hidden 2xl:hidden xl:hidden  justify-start  flex-col  items-center h-full bg-[#0e0f0f] w-full">
          <div className="m-[100px]">
            <h1 className="text-6xl font-SpaceAge">
              CYBERIA{" "}
              <p className="text-xs text-end font-Poppins">
                Unleash the geek within
              </p>{" "}
            </h1>
            <div className="pb-20">
              <AnimatedBeamDemo />
            </div>
            <div className="flex flex-col gap-3">
              <Accordion type="single" defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-3xl font-Poppins">
                    About Cyberia
                  </AccordionTrigger>
                  <AccordionContent className="text-[#b7b8b8] text-sm">
                    Welcome to Cyberia 2024, the premier tech fest organized by
                    the Department of Computer Applications (DCA), where
                    technology meets creativity and innovation ignites
                    possibilities. Cyberia is more than just an event; it's a
                    celebration of ideas, knowledge, and the limitless potential
                    of technology. Dive into a world of opportunities with
                    thrilling coding marathons, competitive hackathons, and
                    captivating tech challenges designed to push the boundaries
                    of innovation. Engage with industry experts through
                    insightful tech talks and hands-on workshops that explore
                    the latest trends and breakthroughs in the ever-evolving
                    tech landscape. Cyberia is the perfect platform for
                    students, tech enthusiasts, and innovators to showcase their
                    talents, collaborate with peers, and experience the
                    excitement of cutting-edge advancements. Whether you're a
                    tech wizard, a budding entrepreneur, or simply curious about
                    the digital frontier, Cyberia has something to offer for
                    everyone.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-start no-underline  text-2xl">
                    About the DCA
                  </AccordionTrigger>
                  <AccordionContent className="text-[#b7b8b8] text-sm">
                    At The Maharaja Sayajirao University of Baroda, the
                    Department of Computer Applications offers a transformative
                    Bachelor of Computer Applications (BCA) & Master of Science
                    (Information Technology) (MSc. IT) programs. Seamlessly
                    integrating theory with hands-on experience, the
                    department's expert faculty guides. By forging strong
                    industry connections, including internships and guest
                    lectures, the department ensures students are equipped not
                    just to navigate the tech landscape, but to shape its future
                    with innovation.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-start no-underline  text-2xl">
                    Faculty of Science
                  </AccordionTrigger>
                  <AccordionContent className="text-[#b7b8b8] text-sm">
                          Faculty of Science, Maharaja Sayajirao University of Baroda

The <b>Faculty of Science</b> at the Maharaja Sayajirao University (MSU) of Baroda, located in Vadodara, Gujarat, is one of the premier institutions in India for scientific education, research, and innovation. Established in **1949**, the Faculty of Science has a long-standing legacy of excellence in nurturing scientific minds and advancing knowledge in various disciplines of science.
<p className="mt-5"></p>
<b>Departments and Courses</b> <br />
The faculty encompasses a wide range of departments, each offering undergraduate, postgraduate, and doctoral programs:
<br />
1. Botany: Specializes in plant sciences, environmental studies, and biodiversity research.  <br />
2. Chemistry: Renowned for its advanced research in organic, inorganic, physical, and analytical chemistry. <br />
3. Geology: Offers expertise in earth sciences, mineralogy, and sustainable resource management. <br />
4. Mathematics: Focuses on pure and applied mathematics, fostering analytical and problem-solving skills. <br />
5. Physics: Engages in cutting-edge research in quantum mechanics, astrophysics, and material sciences. <br />
6. Statistics: Prepares students for data analysis, computational statistics, and emerging fields like data science. <br />
7. Zoology: Covers animal biology, wildlife studies, and biotechnology applications. <br />
8. Environmental Science**: Dedicated to addressing modern ecological challenges and sustainability. <br />
9.Biochemistry: Combines biology and chemistry to explore molecular mechanisms of life processes. <br />
<p className="mt-5"></p>
<b>Research and Innovation</b> <br />
The Faculty of Science is recognized for its significant contributions to research in both fundamental and applied sciences. It boasts state-of-the-art laboratories, research centers, and collaborations with national and international institutions. The faculty actively engages in projects funded by agencies such as **CSIR**, **UGC**, **DBT**, and **DST**, contributing to fields like nanotechnology, genetics, environmental conservation, and renewable energy.
<p className="mt-5"></p>
<b>Infrastructure</b> <br />
The faculty is equipped with:
- Modern lecture halls and laboratories.
- Specialized research facilities, including high-performance computing systems and spectroscopy labs.
- A dedicated science library with access to numerous journals, publications, and digital resources.
<p className="mt-5"></p>
<b>Student Life and Opportunities</b> <br />
Students at the Faculty of Science enjoy a vibrant academic environment with opportunities for:
- Participation in seminars, workshops, and conferences.
- Internships and collaborations with industries and research organizations.
- Extracurricular activities and science clubs fostering holistic development.

#### Achievements and Alumni
The alumni of the Faculty of Science have gone on to make remarkable contributions to academia, industry, and government sectors. Many have become distinguished scientists, educators, and entrepreneurs, furthering the institution's reputation globally.

#### Vision and Mission
The Faculty of Science at MSU Baroda remains committed to:
- Promoting scientific temper and critical thinking.
- Encouraging interdisciplinary approaches to solving complex global challenges.
- Producing skilled professionals and researchers who contribute to societal and scientific advancements.

With its legacy of excellence, dynamic learning environment, and forward-looking approach, the Faculty of Science continues to inspire and empower future generations of scientists.
                          </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-start no-underline  text-xl">
                    The Maharaja Sayajirao University of Baroda
                  </AccordionTrigger>
                  <AccordionContent className="text-[#b7b8b8] text-sm">
                    The Maharaja Sayajirao University of Baroda is a premier
                    institution of higher learning in Vadodara, Gujarat.
                    Established in 1949, the university has a rich history of
                    academic excellence and innovation. With a focus on holistic
                    education, the university offers a wide range of
                    undergraduate, postgraduate, and doctoral programs across
                    various disciplines. The university is committed to
                    fostering a culture of innovation, research, and social
                    responsibility. 
                    <p className="mt-5" ></p>
                    The idea of establishing a University at Baroda had engaged the attention of the Government of the former State of Baroda and its educational advisors long before the question of regional universities and decentralization, reorganization and reconditioning of higher education to suit the cultural educational needs of areas had taken root in the country. The concept was first visualized by Dr. Jackson, when, as Principal of the Baroda College in the 1908, he advocated the establishment of a Science Institute at Baroda on an improved and independent basis. It was a consistent policy of the Government of Baroda to subject its educational system to periodical inquiries of an exploratory nature by educational experts of international fame, because of which the first Commission was appointed in 1909. The principal recommendation of that Commission was to expand the activities of the Baroda College by establishing additional chairs in new branches of knowledge. As a result of this policy of chalking out untrodden paths in higher education and thereby evolving a university atmosphere in Baroda, chairs of Comparative Region and Household Science were instituted. Prof. Widgery and Mrs. Strong were appointed to hold these chairs.

In 1916, the educational policy of the State was again reviewed. As a part of this inquiry, one of the members of the Commission, Shri S. V. Mukerjea, prepared minutes of recommendations and in his note, he advocated the establishment of a University at Baroda. In 1919 the matter was brought to the forefront by the appointment of yet another Committee consisting of the late Principal Clarke, Prof. Widgery and Shri N. K. Dixit, the then Educational Commissioner of the State. The Committee drew up an elaborate report in favor of civic University at Baroda. Thereafter, Prof. P. Sheshadri of the Benares Hindu University was requested to lay out a scheme for a University at Baroda. Prof. Widgery also submitted a scheme for a State University on the lines of the smaller German Universities. During this period, Her Highness Shrimant Maharani Chimnabai Saheb, the Maharani Gaekwad of Baroda, offered a princely donation for run

      <p className="mt-5">
        
      </p>
      The University Song of MSU Baroda was composed by Prof. Chandravadan Chimanlal Mehta (6th April 1901 – 4th May 1991), popularly known as C. C. Mehta. He was a Gujarati playwright, theatre critic, bibliographer, poet, story writer, autobiographer, travel writer and broadcaster from Vadodara, Gujarat, India.

he was associated with the performing arts departments of the Maharaja Sayajirao University of Baroda. He pioneered the theatre education in India and started diploma and degree courses in theatre in the Maharaja Sayajirao University of Baroda. He represented India in the international theatre fora.

In 1962, he was awarded the Padma Shri by the Government of India. He won the 1971 Sahitya Akademi Award for Gujarati language for his autobiographical travelogue Natya Gathariyan. He was also awarded the Sangeet Natak Akademi Award for playwriting in Gujarati in 1971. In 1984, he was awarded the Sangeet Natak Akademi Fellowship, the highest honour conferred by the Sangeet Natak Akademi. He received Sahitya Gaurav Puraskar for the year 1991.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className=" grid grid-cols-1 gap-5 place-items-center grid-rows-3 h-full  w-full">
            <div className="flex flex-col  w-11/12 rounded-sm h-[50vh] border border-white/[0.2]">
              <div className="h-3/4  p-5 w-full">
                <img
                  src="/Pics/HariBhai.png"
                  className="h-full rounded-md w-full object-contain"
                  alt=""
                />
              </div>
              <div className="h-1/4 flex gap-1 flex-col items-center justify-center p-3 w-full">
                <h1 className="text-xl font-Poppins">Patron</h1>
                <h1 className="text-md font-extralight font-Poppins">
                  Prof. Haribhai Kataria
                </h1>
                <h1 className="text-xs font-thin text-[#b7b8b8] font-Poppins">
                  (Dean) Faculty Of Science
                </h1>
              </div>
            </div>
            <div className="flex flex-col  w-11/12 rounded-sm h-[50vh] border border-white/[0.2]">
              <div className="h-3/4  p-5 w-full">
                <img
                  src="/Pics/P_K_Mehta.jpeg"
                  className="h-full rounded-md w-full object-contain"
                  alt=""
                />
              </div>
              <div className="h-1/4 flex gap-1 flex-col items-center justify-center p-3 w-full">
                <h1 className="text-xl font-Poppins">Cyberia Head Personal</h1>
                <h1 className="text-md font-extralight font-Poppins">
                  Prof. Prashant K. Mehta
                </h1>
                <h1 className="text-xs font-thin text-[#b7b8b8] font-Poppins">
                  (HOD) Dept. Computer Application
                </h1>
              </div>
            </div>
            <div className="flex flex-col  w-11/12 rounded-sm h-[50vh] border border-white/[0.2]">
              <div className="h-3/4  p-5 w-full">
                <img
                  src="/Pics/V_K_Shrivastava.png"
                  className="h-full rounded-md w-full object-contain"
                  alt=""
                />
              </div>
              <div className="h-1/4 flex gap-1 flex-col items-center justify-center p-3 w-full">
                <h1 className="text-xl font-Poppins">
                  Cyberia Organizing Committee
                </h1>
                <h1 className="text-md font-extralight font-Poppins">
                  Prof. Vijay Kumar Srivastava
                </h1>
                <h1 className="text-xs font-thin text-[#b7b8b8] font-Poppins">
                  Vice Chancellor
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
