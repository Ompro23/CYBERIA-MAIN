import MobNav from "@/components/MobNav";
import { NavbarDemo } from "@/components/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WordRotateDemo } from "@/components/WordRotate";

const About = () => {
  return (
    <>
      <div className="sm:hidden">
        <NavbarDemo />
      </div>
      <div className="sm:block 2xl:hidden">
        <MobNav/>
      </div>

      <div className="flex mt-24 h-full w-full">
        <div
          // style={{ backgroundImage: "url('/AboutPage.jpg')" }}
          className="border-b-[1px] border-white/[0.2]  sm:p-0 2xl:bg-gradient-to-b from-black to-[#141516]   h-full w-full justify-center items-center flex-col"
        >
          <main className="flex flex-col justify-center items-center gap-10 ">
            <div className="font-light mt-5 text-7xl  font-SpaceAge blur-in-text  md:text-5xl text-end mb-5">
              CYBERIA{" "}
              <p className="text-xs font-Poppins  ">Unleash the geek within</p>{" "}
            </div>
            <div className="leading-8 ">
              <div className="m-[100px] md:m-[50px] flex flex-col justify-center items-center">
                <h2 className="font-normal text-3xl  text-center sm:border-none border-b-2 border-white w-fit md:text-xl mb-5 ">
                  Terms and Conditions for Cyberia Tech Fest
                </h2>
                <div className="mb-4 flex flex-row justify-center items-center font-extralight">
                  <span className="font-semibold">Event Dates:</span>{" "}
                  <WordRotateDemo /> December 2024
                </div>
                <div className="flex mt-10 flex-col gap-3">
                  <Accordion type="single" defaultValue="item-1">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-3xl sm:text-xl font-Poppins">
                        1. Introduction
                      </AccordionTrigger>
                      <AccordionContent className="text-[#b7b8b8]  md:text-xs text-sm">
                        Welcome to Cyberia Tech Fest! By participating in
                        Cyberia, you agree to the following terms and
                        conditions. These terms govern your participation in all
                        events, including technical and non-technical
                        categories, and outline the rules for both solo and team
                        participation.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-start no-underline md:text-sm  text-xl">
                        2. Eligibility
                      </AccordionTrigger>
                      <AccordionContent className="text-[#b7b8b8] md:text-xs text-sm">
                        Open to All: Cyberia Tech Fest is open to all students
                        and professionals with an interest in technology and
                        related fields. Minimum Age Requirement: Participants
                        must be at least 18 years old or have parental/guardian
                        consent to participate if under 18.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-start no-underline md:text-sm   text-xl">
                        3. Event Categories
                      </AccordionTrigger>
                      <AccordionContent className="text-[#b7b8b8] md:text-xs text-sm">
                        Technical Events: These include coding competitions,
                        hackathons, robotics challenges, and other events
                        focused on technical skills and knowledge. Non-Technical
                        Events: These may include quizzes, design competitions,
                        gaming tournaments, and various other activities that do
                        not require technical expertise. Event Details: Each
                        event may have specific rules and guidelines, which will
                        be shared on the official Cyberia website. Participants
                        are expected to read and follow these individual event
                        rules.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-start no-underline  md:text-sm  text-xl">
                        4. Participation Format
                      </AccordionTrigger>
                      <AccordionContent className="text-[#b7b8b8] md:text-xs text-sm">
                        Solo Participation: Participants may enter as
                        individuals for events that allow solo entries. The
                        number of solo entries per participant may vary by
                        event. Team Participation: Participants can also join as
                        teams, depending on the event requirements. Team sizes
                        may vary, with minimum and maximum member limits
                        specified in the event details. Limit on Entries:
                        Participants may join multiple events as solo or team
                        entries but must adhere to the schedule and be
                        responsible for managing time conflicts.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-start no-underline md:text-sm   text-xl">
                        5. Registration
                      </AccordionTrigger>
                      <AccordionContent className="text-[#b7b8b8] md:text-xs text-sm">
                        Registration Process: All participants must complete the
                        official registration form on the Cyberia website.
                        Required details include name, contact information, team
                        members (if applicable), and event selection. Fees:
                        Registration fees may apply to specific events. Fee
                        details, if any, will be available on the website.
                        Payment can be made to the account holder Harshul Rathod as per the instructions provided during
                        registration. Deadline: Registration closes [Insert
                        Registration Deadline Date]. Late registrations may not
                        be accepted.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-6">
                      <AccordionTrigger className="text-start no-underline md:text-sm   text-xl">
                        6. Code of Conduct
                      </AccordionTrigger>
                      <AccordionContent className="text-[#b7b8b8] md:text-xs flex flex-col gap-2 text-sm">
                        Respect and Fair Play: Cyberia promotes a positive and
                        inclusive environment. Participants are expected to
                        maintain respectful behavior towards others. Prohibited
                        Actions: Any form of cheating, hacking, harassment, or
                        inappropriate conduct is strictly prohibited and may
                        result in immediate disqualification. Compliance with
                        Event Rules: Each event has unique rules and criteria
                        that must be followed. Participants who fail to comply
                        with the rules of any event may be disqualified from
                        that event.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-7">
                      <AccordionTrigger className="text-start no-underline  md:text-sm  text-xl">
                        7. Judging and Prizes
                      </AccordionTrigger>
                      <AccordionContent className="text-[#b7b8b8] md:text-xs text-sm">
                        Judging Criteria: Each event has specific judging
                        criteria, which will be outlined on the event page.
                        Judges' decisions are final and binding. Prizes: Winners
                        may receive awards, certificates, or prizes as announced
                        for each event. Prizes are non-transferable and cannot
                        be exchanged for cash.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-8">
                      <AccordionTrigger className="text-start no-underline md:text-sm   text-xl">
                      8. Intellectual Property and Content Use
                      </AccordionTrigger>
                      <AccordionContent className="text-[#b7b8b8] md:text-xs text-sm">
                      Original Work: Participants must submit original work for events that require content or project submissions. Plagiarism will result in disqualification.
                      Usage Rights: By participating, you grant Cyberia the right to use, reproduce, and distribute any submissions (e.g., projects, designs) for promotional and educational purposes.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-9">
                      <AccordionTrigger className="text-start no-underline md:text-sm   text-xl">
                      9. Limitation of Liability
                      </AccordionTrigger>
                      <AccordionContent className="text-[#b7b8b8] md:text-xs text-sm">
                      Cyberia Tech Fest is not responsible for any injuries, losses, or damages that may occur during participation in the event, whether online or on-site. Participants join Cyberia at their own risk and are responsible for their personal belongings and equipment.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-10">
                      <AccordionTrigger className="text-start no-underline md:text-sm   text-xl">
                      10. Changes to Terms and Conditions
                      </AccordionTrigger>
                      <AccordionContent className="text-[#b7b8b8] md:text-xs text-sm">
                      Cyberia reserves the right to modify or update these terms and conditions at any time. Changes will be posted on the official website. Participants are encouraged to review the terms periodically.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-11">
                      <AccordionTrigger className="text-start no-underline md:text-sm   text-xl">
                      11. Refund Policy
                      </AccordionTrigger>
                      <AccordionContent className="text-[#b7b8b8] md:text-xs text-sm">
                      Eligibility for Refunds: Refunds are generally not provided for registration fees. However, exceptions may be made in cases of event cancellation by Cyberia or if the participant withdraws before the registration deadline.
Non-Refundable Fees: Once the registration deadline has passed, all registration fees are non-refundable, regardless of attendance.
Requesting a Refund: Participants who believe they are eligible for a refund must submit a request in writing to the Cyberia Tech Fest organizing team before the registration deadline.
If approved refund will be process with in 7-10 business days
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-12">
                      <AccordionTrigger className="text-start no-underline md:text-sm   text-xl">
                      12. Agreement to Terms
                      </AccordionTrigger>
                      <AccordionContent className="text-[#b7b8b8] md:text-xs text-sm">
                      By registering for Cyberia Tech Fest, you confirm that you have read, understood, and agree to these Terms and Conditions.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <h1 className="text-xl font-normal md:text-sm mt-10 text-center text-white text-wrap">All right reserve @computer application students association science faculty MSU</h1>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
    </>
  );
};


export default About;

// <div className="h-full   w-full">
//         <div
//           style={{ backgroundImage: "url('/AboutPage.jpg')" }}
//           className="z-1000 light bg-[#0000007d]  bg-blend-multiply bg-fixed bg-no-repeat bg-cover"
//         >
//           <section className="text-white  md:py-[10rem] lg:py-[8rem] py-[5rem] flex flex-col items-center justify-center text-justify px-6 md:px-10 lg:px-20">
//             <div className="bg-[#00000036] my-10 backdrop-blur-lg border border-gray-400 border-opacity-30 shadow-lg rounded-3xl p-6 w-full">
//               <main className="flex flex-col justify-center items-center gap-10 mb-20">
//                 <h2 className="font-light mt-5 text-5xl  font-SpaceAge  md:text-xl text-end mb-5">
//                   <TextGenerateEffectDemo />{" "}
//                   <p className="text-xs font-Poppins  ">
//                     Unleash the geek within
//                   </p>{" "}
//                 </h2>
//                 <div className="leading-8 ">
//                   <div className="pb-20">{/* <AnimatedBeamDemo/> */}</div>
//                 </div>

//                 {/* <div className="leading-8">
//             <h2 className="font-semibold text-2xl md:text-xl mb-5">
//               About Cyberia :
//             </h2>
//             <p>
//             Cyberia provides an arena for the youth of today and serve as a
//                   platform to exhibit their technical acumen to the world and
//                   compete with like-minded peers.platform to exhibit their technical acumen to the world and
//                   compete with like-minded peers.
//             </p>
//           </div> */}

//                 <div className="leading-8">
//                   <h2 className="font-semibold text-2xl md:text-xl mb-5 ">
//                     Terms and Conditions for Cyberia Tech Fest :
//                   </h2>
//                   <p className="mb-4">
//                     <strong>Event Dates:</strong> December 22 to 24, 2024
//                   </p>
//                   <p className="mb-4">
//                     <strong>1. Introduction</strong>
//                     <br />
//                     Welcome to Cyberia Tech Fest! By participating in Cyberia,
//                     you agree to the following terms and conditions. These terms
//                     govern your participation in all events, including technical
//                     and non-technical categories, and outline the rules for both
//                     solo and team participation.
//                   </p>
//                   <p className="mb-4">
//                     <strong>2. Eligibility</strong>
//                     <br />
//                     Open to All: Cyberia Tech Fest is open to all students and
//                     professionals with an interest in technology and related
//                     fields.
//                     <br />
//                     Minimum Age Requirement: Participants must be at least 18
//                     years old or have parental/guardian consent to participate
//                     if under 18.
//                   </p>
//                   <p className="mb-4">
//                     <strong>3. Event Categories</strong>
//                     <br />
//                     Technical Events: These include coding competitions,
//                     hackathons, robotics challenges, and other events focused on
//                     technical skills and knowledge.
//                     <br />
//                     Non-Technical Events: These may include quizzes, design
//                     competitions, gaming tournaments, and various other
//                     activities that do not require technical expertise.
//                     <br />
//                     Event Details: Each event may have specific rules and
//                     guidelines, which will be shared on the official Cyberia
//                     website. Participants are expected to read and follow these
//                     individual event rules.
//                   </p>
//                   <p className="mb-4">
//                     <strong>4. Participation Format</strong>
//                     <br />
//                     Solo Participation: Participants may enter as individuals
//                     for events that allow solo entries. The number of solo
//                     entries per participant may vary by event.
//                     <br />
//                     Team Participation: Participants can also join as teams,
//                     depending on the event requirements. Team sizes may vary,
//                     with minimum and maximum member limits specified in the
//                     event details.
//                     <br />
//                     Limit on Entries: Participants may join multiple events as
//                     solo or team entries but must adhere to the schedule and be
//                     responsible for managing time conflicts.
//                   </p>
//                   <p className="mb-4">
//                     <strong>5. Registration</strong>
//                     <br />
//                     Registration Process: All participants must complete the
//                     official registration form on the Cyberia website. Required
//                     details include name, contact information, team members (if
//                     applicable), and event selection.
//                     <br />
//                     Fees: Registration fees may apply to specific events. Fee
//                     details, if any, will be available on the website. Payment
//                     can be made to the account holder Shridhar Vijay Popat as
//                     per the instructions provided during registration.
//                     <br />
//                     Deadline: Registration closes [Insert Registration Deadline
//                     Date]. Late registrations may not be accepted.
//                   </p>
//                   <p className="mb-4">
//                     <strong>6. Code of Conduct</strong>
//                     <br />
//                     Respect and Fair Play: Cyberia promotes a positive and
//                     inclusive environment. Participants are expected to maintain
//                     respectful behavior towards others.
//                     <br />
//                     Prohibited Actions: Any form of cheating, hacking,
//                     harassment, or inappropriate conduct is strictly prohibited
//                     and may result in immediate disqualification.
//                     <br />
//                     Compliance with Event Rules: Each event has unique rules and
//                     criteria that must be followed. Participants who fail to
//                     comply with the rules of any event may be disqualified from
//                     that event.
//                   </p>
//                   <p className="mb-4">
//                     <strong>7. Judging and Prizes</strong>
//                     <br />
//                     Judging Criteria: Each event has specific judging criteria,
//                     which will be outlined on the event page. Judges' decisions
//                     are final and binding.
//                     <br />
//                     Prizes: Winners may receive awards, certificates, or prizes
//                     as announced for each event. Prizes are non-transferable and
//                     cannot be exchanged for cash.
//                   </p>
//                   <p className="mb-4">
//                     <strong>8. Intellectual Property and Content Use</strong>
//                     <br />
//                     Original Work: Participants must submit original work for
//                     events that require content or project submissions.
//                     Plagiarism will result in disqualification.
//                     <br />
//                     Usage Rights: By participating, you grant Cyberia the right
//                     to use, reproduce, and distribute any submissions (e.g.,
//                     projects, designs) for promotional and educational purposes.
//                   </p>
//                   <p className="mb-4">
//                     <strong>9. Limitation of Liability</strong>
//                     <br />
//                     Cyberia Tech Fest is not responsible for any injuries,
//                     losses, or damages that may occur during participation in
//                     the event, whether online or on-site. Participants join
//                     Cyberia at their own risk and are responsible for their
//                     personal belongings and equipment.
//                   </p>
//                   <p className="mb-4">
//                     <strong>10. Changes to Terms and Conditions</strong>
//                     <br />
//                     Cyberia reserves the right to modify or update these terms
//                     and conditions at any time. Changes will be posted on the
//                     official website. Participants are encouraged to review the
//                     terms periodically.
//                   </p>
//                   <p className="mb-4">
//                     <strong>11. Refund Policy</strong>
//                     <br />
//                     Eligibility for Refunds: Refunds are generally not provided
//                     for registration fees. However, exceptions may be made in
//                     cases of event cancellation by Cyberia or if the participant
//                     withdraws before the registration deadline.
//                     <br />
//                     Non-Refundable Fees: Once the registration deadline has
//                     passed, all registration fees are non-refundable, regardless
//                     of attendance.
//                     <br />
//                     Requesting a Refund: Participants who believe they are
//                     eligible for a refund must submit a request in writing to
//                     the Cyberia Tech Fest organizing team before the
//                     registration deadline.
//                     <br />
//                     If approved refund will be process with in 7-10 business
//                     days
//                   </p>
//                   <p className="mb-4">
//                     <strong>12. Agreement to Terms</strong>
//                     <br />
//                     By registering for Cyberia Tech Fest, you confirm that you
//                     have read, understood, and agree to these Terms and
//                     Conditions.
//                   </p>
//                   <p className="mb-4">
//                     <strong>
//                       All right reserve @ computer application students
//                       association science faculty MSU
//                     </strong>
//                   </p>
//                 </div>

//                 {/* <div className="leading-8">
//             <h2 className="font-semibold text-2xl md:text-xl mb-5">
//               About the Department of Computer Applications : 
//             </h2>
//             <p>
//               At The Maharaja Sayajirao University of Baroda, the Department
//               of Computer Applications offers a transformative Bachelor of
//               Computer Applications (BCA) & Master of Science (Information
//               Technology) (MSc. IT) programs. Seamlessly integrating theory
//               with hands-on experience, the department's expert faculty
//               guides. By forging strong industry connections, including
//               internships and guest lectures, the department ensures students
//               are equipped not just to navigate the tech landscape, but to
//               shape its future with innovation.
//             </p>
//           </div>

//           <div className="leading-8">
//             <h2 className="font-semibold text-2xl md:text-xl mb-5">
//               About Faculty of Science : 
//             </h2>
//             <p>
//               The Faculty of Science at The Maharaja Sayajirao University of
//               Baroda is a hub of innovation and research. With a focus on
//               interdisciplinary learning, the faculty offers a range of
//               undergraduate, postgraduate, and doctoral programs. The faculty
//               is committed to fostering a culture of curiosity and
//               collaboration, nurturing the next generation of scientists and
//               researchers.
//             </p>
//           </div>

//           <div className="leading-8">
//             <h2 className="font-semibold text-2xl md:text-xl mb-5">
//               About the Maharaja Sayajirao University of Baroda : 
//             </h2>
//             <p>
//               The Maharaja Sayajirao University of Baroda is a premier
//               institution of higher learning in Vadodara, Gujarat. Established
//               in 1949, the university has a rich history of academic
//               excellence and innovation. With a focus on holistic education,
//               the university offers a wide range of undergraduate,
//               postgraduate, and doctoral programs across various disciplines.
//               The university is committed to fostering a culture of
//               innovation, research, and social responsibility.
//             </p>
//           </div>
//            */}
//               </main>
//             </div>

//             <footer className="flex justify-between w-full mt-10 flex-wrap lg:justify-center lg:gap-5">
//               {/* <div className="bg-[#00000036]  backdrop-blur-lg border border-gray-400  bg-opacity-20 border-opacity-30 shadow-lg rounded-xl p-6 mt-10 leading-8">
          
//           <h2 className="font-bold text-lg">Cyberia Organizing Committee</h2>
//           <div className="grid gap-2">
//             <a>Prof. Vijay Kumar Srivastava</a>
//             <p className="text-gray-400">Vice Chancellor</p>
//             <img
//               src={"/Pics/V_K_Shrivastava.png"}
//               className="w-[300px] h-[300px] shadow-sm rounded-xl mt-4"
//             />
    
//           </div>
//         </div>
         
//           <div className="bg-[#00000036]  backdrop-blur-lg border border-gray-400  bg-opacity-20 border-opacity-30 shadow-lg rounded-xl p-6 mt-10 leading-8">
//             <h2 className="font-bold text-lg">Patron</h2>
//             <div className="grid gap-2">
//               <a>Prof. Haribhai Kataria</a>
//               <p className="text-gray-400">(Dean) Faculty Of Science</p>
//               <img
//                 src={"/Pics/HariBhai.png"}
//                 className="w-[300px] h-[300px] shadow-sm rounded-xl mt-4"
//               />
//             </div>
//           </div>
          
//           <div className="bg-[#00000036]   backdrop-blur-lg border border-gray-400  border-opacity-30 shadow-lg rounded-xl p-6 mt-10 leading-8">
//             <h2 className="font-bold text-lg">Cyberia Head Personal</h2>
//             <div className="grid gap-2">
//               <a>Prof. Prashant K. Mehta</a>
//               <p className="text-gray-400">(HOD) Dept. Computer Application</p>
//               <img
//                 src={"/Pics/P_K_Mehta.jpeg"}
//                 className=" w-[300px] h-[300px] shadow-sm rounded-xl mt-4"
//               />
//             </div>
//           </div> */}
//             </footer>
//           </section>
//         </div>
//       </div>
