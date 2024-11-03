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
                                <h2 className="font-light mt-5 text-5xl  font-SpaceAge  md:text-xl text-end mb-5"><TextGenerateEffectDemo />  <p className="text-xs font-Poppins  ">Unleash the geek within</p> </h2>
                                <div className="leading-8 ">
                                    <div className="pb-20">
                                        {/* <AnimatedBeamDemo/> */}
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



                                <div className="leading-8" >
                                    <h2 className="font-semibold text-2xl md:text-xl mb-5 ">
                                        Privacy Policy for Cyberia Tech Fest :
                                    </h2>
                                    <p className="mb-4">
                                        <strong>Effective Date:</strong> 22, 23, 24 December 2024
                                    </p>
                                    <p className="mb-4">
                                        <strong>1. Introduction</strong><br />
                                        Welcome to Cyberia! We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains what data we collect, how we use it, and your rights in relation to your information. Cyberia Tech Fest will take place from December 22 to 24, 2024.
                                    </p>
                                    <p className="mb-4">
                                        <strong>2. Information We Collect</strong><br />
                                        We may collect various types of information when you interact with our website:
                                    </p>
                                    <ul className="list-disc list-inside mb-4">
                                        <li><strong>Personal Information:</strong> Name, email address, contact information, and other details you provide during registration for the tech fest or through forms.</li>
                                        <li><strong>Technical Information:</strong> IP addresses, browser type, device information, and usage data to help us understand how our website is used and to improve the user experience.</li>
                                        <li><strong>Cookies and Tracking Data:</strong> We use cookies and similar tracking technologies to monitor activity on our site and enhance your browsing experience.</li>
                                    </ul>
                                    <p className="mb-4">
                                        <strong>3. How We Use Your Information</strong><br />
                                        Cyberia uses the collected data for the following purposes:
                                    </p>
                                    <ul className="list-disc list-inside mb-4">
                                        <li><strong>Event Registration and Communication:</strong> To manage registrations, send you event updates, and provide information related to Cyberia.</li>
                                        <li><strong>Personalization and Analytics:</strong> To improve our website's functionality, analyze user behavior, and tailor content to your preferences.</li>
                                        <li><strong>Security and Legal Compliance:</strong> To maintain the security of our website, comply with legal obligations, and protect against fraud and abuse.</li>
                                    </ul>
                                    <p className="mb-4">
                                        <strong>4. Sharing Your Information</strong><br />
                                        We do not sell or rent your personal information to third parties. However, we may share data with trusted service providers or partners who assist us with website operations, event management, or analytics. These partners are contractually bound to keep your information confidential and use it only for the purposes outlined by Cyberia.
                                    </p>
                                    <p className="mb-4">
                                        <strong>5. Data Security</strong><br />
                                        We take appropriate technical and organizational measures to protect your information from unauthorized access, loss, or misuse. However, please note that no internet transmission is entirely secure, and we cannot guarantee absolute data security.
                                    </p>
                                    <p className="mb-4">
                                        <strong>6. Your Rights</strong><br />
                                        Depending on your location, you may have the following rights regarding your personal information:
                                    </p>
                                    <ul className="list-disc list-inside mb-4">
                                        <li><strong>Access and Correction:</strong> Request access to your data and correct inaccuracies.</li>
                                        <li><strong>Deletion:</strong> Request deletion of your personal information, subject to certain limitations.</li>
                                        <li><strong>Opt-Out:</strong> Withdraw consent where we rely on your consent to process your data.</li>
                                    </ul>
                                    <p className="mb-4">
                                        To exercise your rights, please reach out through the contact methods provided on our website.
                                    </p>
                                    <p className="mb-4">
                                        <strong>7. Changes to This Privacy Policy</strong><br />
                                        We may update this Privacy Policy periodically to reflect changes in our practices or applicable law. We encourage you to review this policy from time to time.
                                    </p>
                                </div>

                                {/* <div className="leading-8">
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
           */}

                            </main>
                        </div>

                        <footer className="flex justify-between w-full mt-10 flex-wrap lg:justify-center lg:gap-5">
                            {/* <div className="bg-[#00000036]  backdrop-blur-lg border border-gray-400  bg-opacity-20 border-opacity-30 shadow-lg rounded-xl p-6 mt-10 leading-8">
          
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
          </div> */}

                        </footer>
                    </section>

                </div>
            </div>
        </>
    );
};

export default About;
