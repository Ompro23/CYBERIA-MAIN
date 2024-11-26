"use client";
import React, { ChangeEvent, useContext, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { eventContext } from "@/app/context/MyContext";
import { HOST } from "@/lib/utilities";
const Cashfree = require("@cashfreepayments/cashfree-js");
import { message } from "antd";
import { useRouter } from "next/navigation";
import Loader from "./Loader";

interface UserSelectedEvent {
  title: string;
}

interface UserData {
  fullName: string;
  teamName: string;
  email: string;
  contactNo: string;
  contactNo2: string;
  institute: string;
  year: string;
  level: string;
  teamLeader: string;
  members: number;
  gender: string;
  age: string;
  domain: string;
  member: string[]; // Array of member names or identifiers
  stream: string;
  events: string | undefined; // If UserSelectedEvent is optional
}
export function SignupFormTeam() {
  const router = useRouter();
  const eventContextValue = useContext(eventContext);
  const UserSelectedEvent = eventContextValue?.UserSelectedEvent;
  const setTicketData = eventContextValue?.setTicketData;
  const loading = eventContextValue?.loading;
  const setloading = eventContextValue?.setloading;

  const [Data, setData] = useState<UserData>({
    fullName: "",
    teamName: "",
    email: "",
    contactNo: "",
    contactNo2: "",
    institute: "",
    year: "",
    level: "",
    teamLeader: "",
    members: 0,
    gender: "",
    age: "",
    domain: "",
    member: [],
    stream: "",
    events: UserSelectedEvent?.title,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleChangeMember = (
    index: number,
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const updatedMembers = [...Data.member];
    updatedMembers[index] = e.target.value;
    setData({ ...Data, member: updatedMembers });
  };

  const handleSelectChange = (value: string) => {
    setData((prevState) => ({
      ...prevState,
      level: value,
    }));
  };
  const handleSelectYearChange = (value: string) => {
    setData((prevState) => ({
      ...prevState,
      year: value,
    }));
  };
  const handleSelectUGPGChange = (value: string) => {
    setData((prevState) => ({
      ...prevState,
      ug_pg: value,
    }));
  };
  const handleSelectGenderChange = (value: string) => {
    setData((prevState) => ({
      ...prevState,
      gender: value,
    }));
  };

  const [SessionId, setSessionId] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    message.info("Please wait")


    try {
      const cashfree = await Cashfree.load({
        mode: "production", //or production
      });

      const response = await axios.post(
        `${HOST}/api/payments`,
        { ...Data, price: UserSelectedEvent.price },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response.data.data.payment_session_id)
      if (!response.data) {
        message.info("Please try again");
      }
      let checkoutOptions = {
        paymentSessionId: response.data.data.payment_session_id,
        redirectTarget: "_modal",
        appearance: {
          width: "700px",
          height: "700px",
        },
      };

      const result = await cashfree.checkout(checkoutOptions);      
      // console.log(result)
      if (result.redirect) {
        // This will be true when the payment redirection page couldnt be opened in the same window
        // This is an exceptional case only when the page is opened inside an inAppBrowser
        // In this case the customer will be redirected to return url once payment is completed
        // message.success("Payment Completed");
      }
      if (result.error) {
        message.error("try again");
        // console.log(result.error);
      }
      if (result.paymentDetails) {
        message.success("Payment has been completed");
        // router.push("/events")
        message.info("Please wait for redirection");
        setloading?.(true);
        console.log(result);
        console.log(result.paymentDetails.paymentMessage);
        const response = await axios.post(
          `https://cyberia-node-server.vercel.app/api/user/registerTeamUser`,
          { ...Data, events: UserSelectedEvent.title },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );        
        if (response.status === 201 && response.data.TeamData) {
          router.push("/dowldTicket");
          setTicketData?.(response.data.TeamData);
        } else {
          message.error("Some error occured contact Customer Support");
        }
        // This will be called whenever the payment is completed irrespective of transaction status
      }
    } catch (error) {
      message.error("Technical Error or Check your Credentials again");
      console.log(error);
    }
  };
  return (
    <>
    <div className="w-[55vw] sm:w-full p-10 h-full px-20 mx-auto rounded-md md:rounded-2xl  md:p-8 shadow-input bg-white dark:bg-black/[0.5]">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Register for a Team Event
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Before registering to any Event please refer to the timetable first so
        events cannot be collapse on same time
      </p>

     {["BGMI", "Valorant", "CS2"].includes(UserSelectedEvent?.title) ?  <form className="my-8 h-full z-0 overflow-auto" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:w-full md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">Team name</Label>
            <Input
              id="firstname"
              name="teamName"
              value={Data.teamName}
              onChange={handleChange}
              placeholder="Enter your Team name"
              type="text"
            />
          </LabelInputContainer>
          
        </div>
        <div className="flex flex-col sm:w-full md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
            <Label htmlFor="firstname">Team leader</Label>
            <Input
              id="firstname"
              name="teamLeader"
              value={Data.teamLeader}
              onChange={handleChange}
              placeholder="Enter your Team Leader name"
              type="text"
            />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col sm:w-full md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer >
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              value={Data.email}
              onChange={handleChange}
              placeholder="Please provide your mail"
              type="text"
            />
          </LabelInputContainer>
        </div>
          
          <LabelInputContainer>
            <Label htmlFor="email">Member</Label>
            <Input
              id="email"
              name="members"
              value={Data.members}
              maxLength={5}
              onChange={handleChange}
              placeholder="Please provide no of Members"
              type="text"
            />
          </LabelInputContainer>

        {Array.from({ length: Math.min(Data?.members , 5)}).map((_, index) => {
          return (
            <LabelInputContainer className="mt-2 ">
              <Label htmlFor="email">{`UID of Member ${index + 1}`}</Label>
              <Input
                id="email"
                name={`member${index}`}
                key={index}
                value={Data.member[index] || ""}
                onChange={(e) => handleChangeMember(index, e)}
                placeholder={`Please provide Game Id of member`}
                type="text"                
              />
            </LabelInputContainer>
          );
          // <Form.Item
          //     label={`Member ${index + 1}`}
          //     key={index}
          //     type="text"

          //     rules={[
          //         {
          //             required: true,
          //             message: 'Please enter Team Members Name!',
          //         },
          //     ]}
          // >
          //     <Input placeholder="Name of Member" name={`member${index}`} onChange={(e) => handleChange(index, e)}
          //         value={Data.member[index] || ""} className='bg-transparent placeholder:text-gray-300 hover:bg-transparent active:bg-transparent focus:bg-transparent text-white' />
          // </Form.Item>
        })}
        <div className="flex w-full mt-4 gap-5">
          <LabelInputContainer className="mb-4 w-1/2">
            <Label htmlFor="contactNo1">Contact Info </Label>
            <Input
              id="contactNo"
              name="contactNo"
              value={Data.contactNo}
              onChange={handleChange}
              placeholder="Enter your phone number"
              type="digit"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4  w-1/2">
            <Label  htmlFor="contactNo2">Contact Info 2</Label>
            <Input
              id="contactNo2"
              name="contactNo2"
              value={Data.contactNo2}
              onChange={handleChange}
              placeholder="Enter your secondary phone number"
              type="digit"
            />
          </LabelInputContainer>
        </div>
        <div className="flex w-full gap-5">
          <LabelInputContainer className="mb-4 w-1/2">
            <Label htmlFor="contactNo1">Institute</Label>
            <Select
              required
              value={Data.level}
              name="level"
              onValueChange={handleSelectChange}
              defaultValue={"college"}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Institute" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Institute</SelectLabel>
                  <SelectItem value="college">College</SelectItem>
                  <SelectItem value="school">School</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4 w-1/2">
            <Label htmlFor="contactNo2">Level</Label>
            <Select
              value={Data.year}
              required
              name="year"
              onValueChange={handleSelectYearChange}
              defaultValue={"1"}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Level</SelectLabel>
                  {Data.level === "college" ? (
                    <div>
                      <SelectItem value="1">1st year</SelectItem>
                      <SelectItem value="2">2nd year</SelectItem>
                      <SelectItem value="3">3rd year</SelectItem>
                      <SelectItem value="4">4th year</SelectItem>
                    </div>
                  ) : (
                    <div>
                      <SelectItem value="7">7th</SelectItem>
                      <SelectItem value="8">8th</SelectItem>
                      <SelectItem value="9">9th</SelectItem>
                      <SelectItem value="10">10th</SelectItem>
                      <SelectItem value="11">11th</SelectItem>
                      <SelectItem value="12">12th</SelectItem>
                    </div>
                  )}
                </SelectGroup>
              </SelectContent>
            </Select>
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-5">
          <Label htmlFor="twitterpassword">Stream</Label>
          <Input
            id="stream"
            placeholder="Your Stream (Science, Commerce or Arts)"
            type="text"
            name="stream"
            value={Data.stream}
            onChange={handleChange}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-5">
          <Label htmlFor="twitterpassword">Institute Name</Label>
          <Input
            id="institueName"
            placeholder="Name of your institute"
            type="text"
            name="institute"
            value={Data.institute}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <div className="flex w-full gap-5">
          <LabelInputContainer className="mb-8">
            <Label htmlFor="twitterpassword">Gender</Label>
            <Select
              required
              value={Data.gender}
              name="gender"
              onValueChange={handleSelectGenderChange}
              defaultValue={"male"}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Gender</SelectLabel>
                  <SelectItem value="college">Male</SelectItem>
                  <SelectItem value="school">Female</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              placeholder="Your age"
              type="text"
              name="age"
              value={Data.age}
              onChange={handleChange}
            />
          </LabelInputContainer>
        </div>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
      </form> :  <form className="my-8 h-full z-0 overflow-auto" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:w-full md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">Team name</Label>
            <Input
              id="firstname"
              name="teamName"
              value={Data.teamName}
              onChange={handleChange}
              placeholder="Enter your Team name"
              type="text"
            />
          </LabelInputContainer>
          
        </div>
        <div className="flex flex-col sm:w-full md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
            <Label htmlFor="firstname">Team leader</Label>
            <Input
              id="firstname"
              name="teamLeader"
              value={Data.teamLeader}
              onChange={handleChange}
              placeholder="Enter your Team Leader name"
              type="text"
            />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col sm:w-full md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer >
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              value={Data.email}
              onChange={handleChange}
              placeholder="Please provide your mail"
              type="text"
            />
          </LabelInputContainer>
        </div>
          
          <LabelInputContainer>
            <Label htmlFor="email">Member</Label>
            <Input
              id="email"
              name="members"
              value={Data.members}
              maxLength={5}
              onChange={handleChange}
              placeholder="Please provide no of Members"
              type="text"
            />
          </LabelInputContainer>

        {Array.from({ length: Math.min(Data?.members , 5)}).map((_, index) => {
          return (
            <LabelInputContainer className="mt-2 ">
              <Label htmlFor="email">{`Member ${index + 1}`}</Label>
              <Input
                id="email"
                name={`member${index}`}
                key={index}
                value={Data.member[index] || ""}
                onChange={(e) => handleChangeMember(index, e)}
                placeholder={`Please provide Member Name`}
                type="text"                
              />
            </LabelInputContainer>
          );
          // <Form.Item
          //     label={`Member ${index + 1}`}
          //     key={index}
          //     type="text"

          //     rules={[
          //         {
          //             required: true,
          //             message: 'Please enter Team Members Name!',
          //         },
          //     ]}
          // >
          //     <Input placeholder="Name of Member" name={`member${index}`} onChange={(e) => handleChange(index, e)}
          //         value={Data.member[index] || ""} className='bg-transparent placeholder:text-gray-300 hover:bg-transparent active:bg-transparent focus:bg-transparent text-white' />
          // </Form.Item>
        })}
        <div className="flex w-full mt-4 gap-5">
          <LabelInputContainer className="mb-4 w-1/2">
            <Label htmlFor="contactNo1">Contact Info </Label>
            <Input
              id="contactNo"
              name="contactNo"
              value={Data.contactNo}
              onChange={handleChange}
              placeholder="Enter your phone number"
              type="digit"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4  w-1/2">
            <Label  htmlFor="contactNo2">Contact Info 2</Label>
            <Input
              id="contactNo2"
              name="contactNo2"
              value={Data.contactNo2}
              onChange={handleChange}
              placeholder="Enter your secondary phone number"
              type="digit"
            />
          </LabelInputContainer>
        </div>
        <div className="flex w-full gap-5">
          <LabelInputContainer className="mb-4 w-1/2">
            <Label htmlFor="contactNo1">Institute</Label>
            <Select
              required
              value={Data.level}
              name="level"
              onValueChange={handleSelectChange}
              defaultValue={"college"}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Institute" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Institute</SelectLabel>
                  <SelectItem value="college">College</SelectItem>
                  <SelectItem value="school">School</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4 w-1/2">
            <Label htmlFor="contactNo2">Level</Label>
            <Select
              value={Data.year}
              required
              name="year"
              onValueChange={handleSelectYearChange}
              defaultValue={"1"}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Level</SelectLabel>
                  {Data.level === "college" ? (
                    <div>
                      <SelectItem value="1">1st year</SelectItem>
                      <SelectItem value="2">2nd year</SelectItem>
                      <SelectItem value="3">3rd year</SelectItem>
                      <SelectItem value="4">4th year</SelectItem>
                    </div>
                  ) : (
                    <div>
                      <SelectItem value="7">7th</SelectItem>
                      <SelectItem value="8">8th</SelectItem>
                      <SelectItem value="9">9th</SelectItem>
                      <SelectItem value="10">10th</SelectItem>
                      <SelectItem value="11">11th</SelectItem>
                      <SelectItem value="12">12th</SelectItem>
                    </div>
                  )}
                </SelectGroup>
              </SelectContent>
            </Select>
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-5">
          <Label htmlFor="twitterpassword">Stream</Label>
          <Input
            id="stream"
            placeholder="Your Stream (Science, Commerce or Arts)"
            type="text"
            name="stream"
            value={Data.stream}
            onChange={handleChange}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-5">
          <Label htmlFor="twitterpassword">Institute Name</Label>
          <Input
            id="institueName"
            placeholder="Name of your institute"
            type="text"
            name="institute"
            value={Data.institute}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <div className="flex w-full gap-5">
          <LabelInputContainer className="mb-8">
            <Label htmlFor="twitterpassword">Gender</Label>
            <Select
              required
              value={Data.gender}
              name="gender"
              onValueChange={handleSelectGenderChange}
              defaultValue={"male"}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Gender</SelectLabel>
                  <SelectItem value="college">Male</SelectItem>
                  <SelectItem value="school">Female</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              placeholder="Your age"
              type="text"
              name="age"
              value={Data.age}
              onChange={handleChange}
            />
          </LabelInputContainer>
        </div>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
      </form>}
    </div>
      <div className={` ${loading? "flex" : "hidden" } h-full w-full top-0 left-0 justify-center backdrop-blur-md items-center absolute `}>
      <Loader/>
  </div>
  </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
