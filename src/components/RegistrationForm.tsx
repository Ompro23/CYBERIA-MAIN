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
} from "@/components/ui/select"
import axios from "axios";
import { eventContext } from "@/app/context/MyContext";
import { HOST } from "@/lib/utilities";
import {load} from "@cashfreepayments/cashfree-js";
import { message } from "antd";
import { useRouter } from "next/navigation";



export function SignupFormSolo() {
 
const router = useRouter();
  const eventContextValue = useContext(eventContext);
  const UserSelectedEvent = eventContextValue?.UserSelectedEvent;
  const loading = eventContextValue?.loading;
  const setloading = eventContextValue?.setloading;

  const [Data, setData] = useState({
    fullName: "",
    email: "",
    contactNo: "",
    contactNo2: "",
    institute: "",
    year: "",
    level: "",
    age: "",
    gender: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

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
  const handleSelectGenderChange = (value: string) => {
    setData((prevState) => ({
      ...prevState,
      gender: value,


    }));
  };


  const [SessionId, setSessionId] = useState("");
 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  
    try {
      const cashfree = await load({
        mode: "sandbox" //or production
      });

      
      const response = await axios.post(`http://127.0.0.1:3000/api/payments`,{...Data,price:UserSelectedEvent.price});
      // console.log(response.data.data.payment_session_id)
      if(!response.data.data.payment_session_id){
          message.info("Please try again")
      }
      else{
        setSessionId(response.data.data.payment_session_id);
        message.success("Please wait for Payment Window")
      }

      let checkoutOptions = {
        paymentSessionId: SessionId,
        redirectTarget: "_modal" //optional ( _self, _blank, or _top)
    }

    const result = await cashfree.checkout(checkoutOptions)
    if(result.error){    
      message.error("User has closed the popup or there is some payment error");
      // console.log(result.error);
  }
  if(result.redirect){
      // This will be true when the payment redirection page couldnt be opened in the same window
      // This is an exceptional case only when the page is opened inside an inAppBrowser
      // In this case the customer will be redirected to return url once payment is completed
      message.info("Payment will be redirected");
  }
  if(result.paymentDetails){
      // This will be called whenever the payment is completed irrespective of transaction status
      message.success("Payment has been completed");
      // router.push("/events")
      console.log(result.paymentDetails.paymentMessage);
  }
    } catch (error) {
      console.log(error)
      message.error("Technical Error try after Sometime")
    }
    
  };
  return (
    <div className="w-[55vw] sm:w-full p-10 h-full px-20 mx-auto rounded-md md:rounded-2xl  md:p-8 shadow-input bg-white dark:bg-black/[0.5]">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Register for an Solo Event
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Before registering to any Event please refer to the timetable first so events cannot be collapse on same time
      </p>

      <form className="my-8 h-full z-0 overflow-auto" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:w-full md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">Full name</Label>
            <Input id="firstname" name="fullName" value={Data.fullName} onChange={handleChange} placeholder="Enter your full name" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" value={Data.email} onChange={handleChange} placeholder="Please provide your mail" type="text" />
          </LabelInputContainer>
        </div>
        <div className="flex w-full gap-5">
          <LabelInputContainer className="mb-4 w-1/2">
            <Label htmlFor="contactNo1">Contact Info </Label>
            <Input id="contactNo" name="contactNo" value={Data.contactNo} onChange={handleChange} placeholder="Enter your phone number" type="digit" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4 w-1/2">
            <Label htmlFor="contactNo2">Contact Info (Secondary) </Label>
            <Input id="contactNo2" name="contactNo2" value={Data.contactNo2} onChange={handleChange} placeholder="Enter your phone number" type="digit" />
          </LabelInputContainer>
        </div>
        <div className="flex w-full gap-5">
          <LabelInputContainer className="mb-4 w-1/2">
            <Label htmlFor="contactNo1">Institute</Label>
            <Select value={Data.level} name="level" onValueChange={handleSelectChange} defaultValue={"college"}>
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
            <Select value={Data.year} name="year" onValueChange={handleSelectYearChange} defaultValue={"1"}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Level</SelectLabel>
                  {Data.level === "college" ?
                    <div>
                      <SelectItem value="1">1st year</SelectItem>
                      <SelectItem value="2">2nd year</SelectItem>
                      <SelectItem value="3">3rd year</SelectItem>
                      <SelectItem value="4">4th year</SelectItem>
                    </div>
                    :
                    <div>
                      <SelectItem value="7">7th</SelectItem>
                      <SelectItem value="8">8th</SelectItem>
                      <SelectItem value="9">9th</SelectItem>
                      <SelectItem value="10">10th</SelectItem>
                      <SelectItem value="11">11th</SelectItem>
                      <SelectItem value="12">12th</SelectItem>
                    </div>}

                </SelectGroup>
              </SelectContent>
            </Select>
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Institute Name</Label>
          <Input
            id="institueName"
            placeholder="Name of your institute"
            type="text"
            name="institute" value={Data.institute} onChange={handleChange}
          />
        </LabelInputContainer>
        <div className="flex w-full gap-5">
          <LabelInputContainer className="mb-8">
            <Label htmlFor="twitterpassword">Gender</Label>
            <Select value={Data.gender} name="gender" onValueChange={handleSelectGenderChange} defaultValue={"male"}>
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
              name="age" value={Data.age} onChange={handleChange}
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

        {/* <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              OnlyFans
            </span>
            <BottomGradient />
          </button>
        </div> */}
      </form>
    </div>
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
