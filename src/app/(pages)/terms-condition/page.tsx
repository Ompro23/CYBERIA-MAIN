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
                                        Terms and Conditions for Cyberia Tech Fest :
                                    </h2>
                                    <p className="mb-4">
                                        <strong>Event Dates:</strong> December 22 to 24, 2024
                                    </p>
                                    <p className="mb-4">
                                        <strong>1. Introduction</strong><br />
                                        Welcome to Cyberia Tech Fest! By participating in Cyberia, you agree to the following terms and conditions. These terms govern your participation in all events, including technical and non-technical categories, and outline the rules for both solo and team participation.
                                    </p>
                                    <p className="mb-4">
                                        <strong>2. Eligibility</strong><br />
                                        Open to All: Cyberia Tech Fest is open to all students and professionals with an interest in technology and related fields.<br />
                                        Minimum Age Requirement: Participants must be at least 18 years old or have parental/guardian consent to participate if under 18.
                                    </p>
                                    <p className="mb-4">
                                        <strong>3. Event Categories</strong><br />
                                        Technical Events: These include coding competitions, hackathons, robotics challenges, and other events focused on technical skills and knowledge.<br />
                                        Non-Technical Events: These may include quizzes, design competitions, gaming tournaments, and various other activities that do not require technical expertise.<br />
                                        Event Details: Each event may have specific rules and guidelines, which will be shared on the official Cyberia website. Participants are expected to read and follow these individual event rules.
                                    </p>
                                    <p className="mb-4">
                                        <strong>4. Participation Format</strong><br />
                                        Solo Participation: Participants may enter as individuals for events that allow solo entries. The number of solo entries per participant may vary by event.<br />
                                        Team Participation: Participants can also join as teams, depending on the event requirements. Team sizes may vary, with minimum and maximum member limits specified in the event details.<br />
                                        Limit on Entries: Participants may join multiple events as solo or team entries but must adhere to the schedule and be responsible for managing time conflicts.
                                    </p>
                                    <p className="mb-4">
                                        <strong>5. Registration</strong><br />
                                        Registration Process: All participants must complete the official registration form on the Cyberia website. Required details include name, contact information, team members (if applicable), and event selection.<br />
                                        Fees: Registration fees may apply to specific events. Fee details, if any, will be available on the website.<br />
                                        Deadline: Registration closes [Insert Registration Deadline Date]. Late registrations may not be accepted.
                                    </p>
                                    <p className="mb-4">
                                        <strong>6. Code of Conduct</strong><br />
                                        Respect and Fair Play: Cyberia promotes a positive and inclusive environment. Participants are expected to maintain respectful behavior towards others.<br />
                                        Prohibited Actions: Any form of cheating, hacking, harassment, or inappropriate conduct is strictly prohibited and may result in immediate disqualification.<br />
                                        Compliance with Event Rules: Each event has unique rules and criteria that must be followed. Participants who fail to comply with the rules of any event may be disqualified from that event.
                                    </p>
                                    <p className="mb-4">
                                        <strong>7. Judging and Prizes</strong><br />
                                        Judging Criteria: Each event has specific judging criteria, which will be outlined on the event page. Judges' decisions are final and binding.<br />
                                        Prizes: Winners may receive awards, certificates, or prizes as announced for each event. Prizes are non-transferable and cannot be exchanged for cash.
                                    </p>
                                    <p className="mb-4">
                                        <strong>8. Intellectual Property and Content Use</strong><br />
                                        Original Work: Participants must submit original work for events that require content or project submissions. Plagiarism will result in disqualification.<br />
                                        Usage Rights: By participating, you grant Cyberia the right to use, reproduce, and distribute any submissions (e.g., projects, designs) for promotional and educational purposes.
                                    </p>
                                    <p className="mb-4">
                                        <strong>9. Limitation of Liability</strong><br />
                                        Cyberia Tech Fest is not responsible for any injuries, losses, or damages that may occur during participation in the event, whether online or on-site. Participants join Cyberia at their own risk and are responsible for their personal belongings and equipment.
                                    </p>
                                    <p className="mb-4">
                                        <strong>10. Changes to Terms and Conditions</strong><br />
                                        Cyberia reserves the right to modify or update these terms and conditions at any time. Changes will be posted on the official website. Participants are encouraged to review the terms periodically.
                                    </p>
                                     <p className="mb-4">
                                        <strong>11. Refund Policy</strong><br />
                                        Eligibility for Refunds: Refunds are generally not provided for registration fees. However, exceptions may be made in cases of event cancellation by Cyberia or if the participant withdraws before the registration deadline.<br />
                                        Non-Refundable Fees: Once the registration deadline has passed, all registration fees are non-refundable, regardless of attendance.<br />
                                        Requesting a Refund: Participants who believe they are eligible for a refund must submit a request in writing to the Cyberia Tech Fest organizing team before the registration deadline.<br />
                                        If approved refund will be process with in 7-10 business days
                                    </p>
                                    <p className="mb-4">
                                        <strong>12. Agreement to Terms</strong><br />
                                        By registering for Cyberia Tech Fest, you confirm that you have read, understood, and agree to these Terms and Conditions.
                                    </p>
                                    <p className="mb-4">
                                        <strong>All right reserve @ computer application students association science faculty MSU</strong>
                                        
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
